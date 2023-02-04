<template>
  <div>
    <div v-color="color1">我是内容</div>
    <button @click="changeC">123</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      color1:'orange',
      color2:'blue',

    }
  },
  methods: {
    changeC(){
      this.color1='red'
    }
  }
  // directives:{
  //   color:{
  //     inserted(el){
  //       el.style.color = 'red'
  //     }
  //   }
  // }
}
</script>

<style>

</style>