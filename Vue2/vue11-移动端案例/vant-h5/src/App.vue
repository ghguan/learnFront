<template>
  <div id="app">
    <!-- 只留下默认的路由出口 -->
    <!-- 组件也可以写成单标签的方式-->
    <!-- <router-view/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// 导入dayjs

export default {
  data () {
    return {
      date: '',
      show: false,
      value: 50
    }
  }
}
</script>
<style>
</style>
