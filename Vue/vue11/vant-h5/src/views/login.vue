<template>
  <div class="login-page">
    <!-- 登录页 -->
    <!-- 导航栏 -->
    <van-nav-bar
      title="登录页"
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
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
      <!-- 注册跳转 -->
      <router-link class="link" to="/register">注册账号</router-link>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
import { setToken } from '@/utils/storage.js'

export default {
  name: 'login-page',
  data () {
    return {
      username: 'zxdfe',
      password: '123456'
    }
  },
  methods: {
    // onSubmit (values) {
    //   console.log('submit', values)
    // }
    async onSubmit (values) {
      const { data } = await login(values)
      setToken(data.token)
      this.$toast.success('登录成功')
      this.$router.push('/')
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
