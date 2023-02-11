<template>
  <div class="my-tag">
      <input
        class="input"
        type="text"
        placeholder="请输入标签"
        ref="ipt"
        v-if="isShow"        
        @keyup.enter="enter"        
        @blur="close"
        v-model="msg" 
      />
      <div class="text" v-else @dblclick="click" >{{value}}</div>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String
    }
  },
  data(){
    return {
      isShow:false,
      msg:''
    }
  },
  methods:{
    click(){
      this.isShow = true
      this.msg = this.value
      this.$nextTick(()=>{
        this.$refs.ipt.focus()
      })
    },
    close(){
      this.isShow = false
    },
    enter(){
      this.isShow = false 
      // 若输入为空,不执行后续操作
      if(!this.msg.trim())return
      this.$emit('input',this.msg)
    },
  },
  
}
</script>

<style>

</style>