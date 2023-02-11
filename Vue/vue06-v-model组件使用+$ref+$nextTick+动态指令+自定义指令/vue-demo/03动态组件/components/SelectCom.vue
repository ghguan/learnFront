<template>
  <div>
    <h1>动态组件dynamic的学习</h1>
    <button class="my-btn-primary" @click="choose('UserAccount')">
      账号密码填写
    </button>
    <button class="my-btn-success" @click="choose('UserInfo')">
      个人信息填写
    </button>
  </div>
</template>

<script>
export default {
  methods:{
    choose(val){
      this.$emit('choose',val)
    }
  }
}
</script>

<style>

</style>