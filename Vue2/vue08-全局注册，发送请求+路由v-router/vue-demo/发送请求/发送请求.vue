<template>
    <div>
      <button @click="click">click</button>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return {
        arr:[]
      }
    },
    methods:{
      async click(){
        const api = 'http://ajax-api.itheima.net/api/books'
        // axios.get()
        // this.$http.get(api).then((res)=>{
        //   console.log(res)
        // })
        const res = await this.$http.get(api)
        let arr = res.data.data
        console.log(arr)
      }
    }
  }
  </script>
  
  <style>
  
  </style>>