<template>
  <div>
    年龄：<input type="text" v-model.number="age">
    标题：<input type="text" v-model.trim="title">
    描述：<input type="text" v-model.lazy="desc">
  </div>

  <!-- 123test => 123
       test => "test" -->
</template>
 
<script>
export default {
    data(){
        return {
            age:'',
            title:'',
            desc:''
        }
    }
}
</script>

<style>

</style>