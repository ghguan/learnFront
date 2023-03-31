<template>
  <div class="login-page">
    <!-- 登录页 -->
    <van-nav-bar
      title="登录页"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
      <router-link class="link" to="/register">没账号,去注册</router-link>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { setToken } from '@/utils/storage'
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // onSubmit (values) {
    //   console.log('submit', values)
    // }
    async onSubmit (values) {
      const { data } = await login(values)
      // console.log(await login(values))
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
