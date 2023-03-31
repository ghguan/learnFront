<template>
  <div>
    <cur-com></cur-com>
    <input type="text" v-if="isShow" ref="ipt">
    <button v-else @click="handleClick"> 搜索</button>
  </div>
</template>

<script>
import CurCom from './components/SelectCom.vue'
export default {
  data(){
    return {
      isShow:false,
    }
  },
  components:{
    CurCom
  },
  methods:{
    handleClick(){
      this.isShow=true
      this.$nextTick(() => {
      this.$refs.ipt.focus()
    })
    },
    

  }
}
</script>

<style>

</style>