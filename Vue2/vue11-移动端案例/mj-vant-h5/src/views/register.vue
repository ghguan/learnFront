<template>
  <div class="register-page">
    <!-- 注册页 -->
    <!-- 标题可用导航栏去掉按钮 -->
    <van-nav-bar title="注册页" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- name属性是onSubmit 参数values对象内部 的属性名 -->
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
      <!-- 使用路由入口的方式进行跳转 -->
      <!-- 添加类名，获得对应样式 -->
      <router-link class="link" to="/login">有账号,去登录</router-link>
    </van-form>
  </div>
</template>

<script>
import { register } from '@/api/user'
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
    // }
    async onSubmit (values) {
      console.log(values)
      // 往后台发送注册请求了
      await register(values)
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
