<template>
  <div>
    <div class="goods">
        <h3>商品：{{title}}</h3>
        <p>价格：{{price}}</p>
        <p>描述：{{info}}</p>
        <p>描述：{{desc}}</p>
        <button @click="cut(pid)">砍一刀</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'SonCom',
    props:['price','title','info','pid','desc'],
   
    methods:{
        cut(id){
            // this.price -= 1
            this.$emit('cut',10,id)
        }
    }
}
</script>

<style>

</style>