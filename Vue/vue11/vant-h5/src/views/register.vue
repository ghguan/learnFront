<template>
  <div class="register-page">
    <!-- 注册页 -->
    <!-- 导航栏 -->
    <van-nav-bar
      title="注册页"
    />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" >注册</van-button>
      </div>
      <!-- 登录跳转 -->
      <router-link class="link" to="/login">去登录</router-link>
    </van-form>
  </div>
</template>

<script>
import { register } from '@/api/user.js'
export default {
  name: 'register-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // onSubmit (values) {
    //   console.log('submit', values)
    // },
    async onSubmit (values) {
      console.log(values)
      // 往后台发送注册请求了
      const res = await register(values)
      console.log(res)
      this.$toast.success('注册成功')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
