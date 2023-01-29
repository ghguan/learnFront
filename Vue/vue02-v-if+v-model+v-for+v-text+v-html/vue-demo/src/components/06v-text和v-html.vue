<template>
  <div>
      <div v-text="str"></div>
      <div v-html="str"></div>      
  </div>
</template>

<script>
export default {
    data(){
        return {
            str:'<a href="http://www.baidu.com">去百度</a>'
        }
    }
}
</script>

<style>

</style>