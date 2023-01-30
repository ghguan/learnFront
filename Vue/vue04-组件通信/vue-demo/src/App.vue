<template>
  <div>
    <h3>小卖部</h3>
    <!-- <son-com price="100" title="篮球" :info="msg"></son-com> -->
    <son-com  v-for="(item) in list" :key="item.name"
    :price="item.price"
    :title="item.name"
    :pid="item.id"
    desc="nihao"
    @cut="cutPrice"></son-com>

  </div>
</template>

<script>
import SonCom from './components/son.vue'
export default {
  data(){
        return {
            list:[
                {id:1,name:'阿尔卑斯',price:0.5},
                {id:2,name:'哇哈哈',price:3.5}
            ]
        }
    },
  components:{
    SonCom
  },
  methods:{
    cutPrice(num,id){
      console.log(1)
      const good = this.list.find(function(el){return el.id === id})
      good.price -= num
    }
  }
}
</script>

<style>

</style>