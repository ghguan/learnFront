<template>
  <div class="like-page">
    <van-nav-bar fixed title="我的点赞" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <article-item v-for="(item,i) in list" :key="i" :item="item" />
    </van-list>
  </div>
</template>

<script>
import { getArticlesLike } from '@/api/article'
export default {
  name: 'like-page',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      const { data } = await getArticlesLike({ page: this.page })
      this.list.push(...data.rows)
      this.loading = false
      if (this.page === data.pageTotal || !data.rows.length) {
        this.finished = true
      } else {
        this.page++
      }
    }
  }
}
</script>

<style lang="less" scoped>
.like-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
