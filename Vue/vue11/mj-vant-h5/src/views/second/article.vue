<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a @click="changeSorter('weight_desc')"
      :class="{ active: sorter === 'weight_desc' }"
        href="javascript:;"
        >推荐</a
      >
      <a  @click="changeSorter(null)"
      :class="{ active: sorter === null }"
        href="javascript:;"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <article-item v-for="item in list" :key="item.id" :item="item">  </article-item>
    </van-list>

  </div>
</template>

<script>
import { getArticle } from '@/api/article'
export default {
  name: 'article-page',
  data () {
    return {
      list: [],
      current: 1,
      pageSize: 10,
      sorter: 'weight_desc',
      loading: false,
      finished: false
    }
  },
  // 进页面就会触发onLoad()，这个逻辑就不需要了
  // async created () {
  //   const { current, pageSize } = this
  //   const { data } = await getArticle({
  //     current,
  //     pageSize,
  //     sorter: 'weight_desc'
  //   })
  //   // console.log(res)
  //   // console.log(data)
  //   this.list = data.rows
  //   // console.log(this.list)
  // },
  methods: {
    // 触发onLoad，发送请求，请求数据
    async onLoad () {
      // 重新请求数据
      const { current, pageSize, sorter } = this
      const { data } = await getArticle({
        current,
        pageSize,
        sorter
        // 如果不传就是最新，传weight_desc就是推荐
      })
      // 数据更新 追加数据，而不是替换数据
      // this.list = data.rows
      // push，不能push数组 => push （...数组）
      // concat，拼接两个数组
      this.list.push(...data.rows)
      this.loading = false
      this.current++
      // 如果我们当前请求的页码，当于总页数
      if (this.current > data.pageTotal) {
        this.finished = true
      // 即使触底了也不会发送请求了
      }
    },
    changeSorter (val) {
      this.sorter = val
      // 发请求
      // 发请求之前，需要重置一些条件
      this.current = 1
      this.list = []
      // 假设已经加载完了，也需要重置
      this.finished = false

      // 表示正在发送请求
      this.loading = true
      // 发请求
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
