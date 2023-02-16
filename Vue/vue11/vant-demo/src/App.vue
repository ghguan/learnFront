<template>
  <div id="app">
    <!-- 只留下默认的路由出口 -->
    <!-- 组件也可以写成单标签的方式-->
    <van-cell title="选择多个日期" :value="text" @click="show = true" />
    <van-calendar v-model="show" type="multiple" @confirm="onConfirm" />
    <!-- <router-view /> -->

    <!-- 区间 -->
    <van-cell title="选择日期区间" :value="date" @click="show = true" />
    <van-calendar v-model="show" type="range" @confirm="onConfirm" />

    <!-- 滑块 -->
    <van-slider v-model="value" @change="onChange" />
    <button @click="goRegister">注册</button>
    <button @click="goLogin">登录</button>
  </div>
</template>

<script>
// 导入dayjs
import dayjs from 'dayjs'
import request from './utils/request.js'
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
      console.log(this.date)
      console.log(dayjs(start).format('YYYY-MM-DD'), dayjs(end).format('YYYY-MM-DD'))
    },
    onChange (value) {
      this.$toast('当前值：' + value)
    },
    // 注册
    async goRegister () {
      const res = await request.post('/user/register', {
        username: 'adddssf',
        password: '123456'
      })
      console.log(res)
    },
    // 登录
    async goLogin () {
      const res = await request.post('/user/login', {
        username: 'adddssf',
        password: '123456'
      })
      console.log(res)
      const { token } = res.data
      setToken(token)
    }
  }
}
</script>
<style>
</style>
