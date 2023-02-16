<template>
  <div id="app">
    <!-- 只留下默认的路由出口 -->
    <!-- 组件也可以写成但标签的方式-->
    <router-view />
    <van-cell title="选择日期区间" :value="date" @click="show = true" />
    <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    <van-slider v-model="value" @change="onChange" />
    <button @click="goLogin">登录</button>
    <button @click="goRegister">注册</button>
  </div>
</template>
<script>
import dayjs from 'dayjs'
// 局部导入
// import { Toast } from 'vant'
// 局部导入接口模块
import request from '@/utils/request.js'

// 组件是按需导出的，这样导入无效
// import storage from '@/utils/storage.js'❌
import { setToken } from '@/utils/storage.js'

export default {
  data () {
    return {
      date: '',
      show: false,
      value: 50
    }
  },
  methods: {
    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm (date) {
      const [start, end] = date
      this.show = false
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
      console.log(start, end)
      console.log(dayjs(start).format('YYYY-MM-DD'), dayjs(end).format('YYYY-MM-DD'))
    },
    onChange (value) {
      // 局部导入用法
      // Toast('当前值：' + value)
      // 全局导入用法
      this.$toast('当前值：' + value)
    },
    async goRegister () {
    // 拼接完整地址，发送请求
    // const res = await request.post('/user/login')
    // 参数怎么传呢
    // const res = await request.post('路径'，{参数})
      const res = await request.post('/user/register', {
        username: 'xxxxxx',
        password: '123456'
      })
      console.log(res)
    },
    async goLogin () {
      const res = await request.post('/user/login', {
        username: 'zxdfe',
        password: '123456'
      })
      console.log(res)
      const { token } = res.data
      setToken(token)
    }
  }
}
</script>
