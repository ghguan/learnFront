<template>
  <div>
    用户名：<input type="text" v-model="username">
    密码：<input type="password" v-model="password">
    <button @click="submit">登录</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        submit(){

        },
        reset(){
            this.password=this.username=''
        }

    }
}
</script>

<style>

</style>