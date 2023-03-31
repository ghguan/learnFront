<template>
  <div class="layout-page">
    <!-- 首页 -->
    <!-- 顶部区域 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 二级路由出口 -->
    <router-view ></router-view>
    <!-- 底部tabbar - 区域 -->
    <van-tabbar route>
      <van-tabbar-item to="/article"  icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect"  icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like"  icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/my"  icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-page',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft () {
      this.$toast('返回')
    },
    onClickRight () {
      this.$toast('按钮')
    }
  }
}
</script>

<style lang="less" scoped></style>
