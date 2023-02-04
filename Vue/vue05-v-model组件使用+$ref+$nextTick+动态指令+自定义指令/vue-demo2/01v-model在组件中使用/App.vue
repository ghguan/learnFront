<template>
  <div>
    <cur-com v-model="value"></cur-com>
    <!-- <cur-com :value="value" @input="input"></cur-com> -->
  </div>
</template>

<script>
import CurCom from './components/SelectCom.vue'
export default {
  components:{
    CurCom
  },
  data(){
    return {
      value:1
    }
  },
  // methods:{
  //   input(val){
  //     this.value=val
  //   }
  // }
}
</script>

<style>

</style>