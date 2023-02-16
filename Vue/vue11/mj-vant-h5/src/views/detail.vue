<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详细"
    />
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>
        {{ article.createdAt }} | {{ article.views }} 浏览量 |
        {{ article.likeCount }} 点赞数
      </p>
      <p>
        <img :src="article.avatar" alt="" />
        <span>{{ article.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="article.content"></main>
    <div class="opt">
      <van-icon @click="toggleLike" :class="{active:article.likeFlag}" name="like-o"/>
      <van-icon @click="toggleCollect" :class="{active:article.collectFlag}" name="star-o"/>
    </div>
  </div>
</template>

<script>
import { getArticleDetail, updateCollect, updateLike } from '@/api/article'

export default {
  name: 'detail-page',
  data () {
    return {
      article: {}
    }
  },
  async created () {
    this.article = {}
    const { data } = await getArticleDetail(this.$route.params.id)
    this.article = data
  },
  methods: {
    async toggleLike () {
      await updateLike(this.article.id)
      this.article.likeFlag = !this.article.likeFlag
      if (this.article.likeFlag) {
        this.article.likeCount++
        this.$toast.success('点赞成功')
      } else {
        this.article.likeCount--
        this.$toast.success('取消点赞')
      }
    },
    async toggleCollect () {
      await updateCollect(this.article.id)
      this.article.collectFlag = !this.article.collectFlag
      if (this.article.collectFlag) {
        this.$toast.success('收藏成功')
      } else {
        this.$toast.success('取消收藏')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #FEC635;
        color: #fff;
      }
    }
  }
}
</style>
