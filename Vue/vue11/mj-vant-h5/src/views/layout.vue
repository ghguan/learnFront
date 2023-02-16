<template>
  <div class="layout-page">
    <!-- 首页架子 - 内容区域 -->
    <!-- 二级路由出口 -->
    <router-view ></router-view>
    <!-- route 选中高亮 -->
    <van-tabbar route>
      <!-- <router-view/>二级路由入口 + to='路径' 实现tabbar跳转到指定页面 -->
      <van-tabbar-item to="/article" icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-page',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped></style>
