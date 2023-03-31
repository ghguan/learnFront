<template>
  <div>
    <h1>v-if和v-show</h1>
    <button @click="isShow=!isShow">显示隐藏</button>
    <h2 v-show="isShow">我是v-show</h2>
    <h2 v-if="isShow">我是v-if</h2>
  </div>
</template>

<script>

export default {

  data(){
    return {
      isShow:true,
    }
  },

}
</script>

<style>

</style>
