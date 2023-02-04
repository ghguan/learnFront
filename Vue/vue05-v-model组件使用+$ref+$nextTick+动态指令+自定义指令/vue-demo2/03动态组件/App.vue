<template>
  <div id="app"> 
    <select-com @choose="choose"></select-com>
    <!--
      动态组件的使用 ( component 组件 + is 属性 )
      (1) 设置挂载点<component>, (在哪显示)
      (2) 使用is属性来设置要显示哪个组件 (显示哪一个组件)
    -->
    <component :is="compName"></component>

    <!-- 
     1. 动态组件：  可以改变的组件 
     2. 解决问题： 多组件在同一位置，切换显示的需求
    -->
  </div>
</template>

<script>
import UserAccount from './components/UserAccount.vue'
import UserInfo from './components/UserInfo.vue'
import SelectCom from './components/SelectCom.vue'
export default ({
  components:{
    UserAccount,
    UserInfo,
    SelectCom
  },
  data(){
    return {
      compName:'UserAccount'
    }
  },
  methods:{
    choose(val){
      this.compName=val
    }
  }

})
</script>

<style lang="less">
#app {
  padding: 20px;
  .my-btn-primary {
    margin-right: 10px;
  }
}

</style>
