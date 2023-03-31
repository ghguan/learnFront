import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'
const request = axios.create({
  // 接口1
  // baseURL: 'http://ihrm.itheima.net/prod-api'
  // 解决跨域
  // 接口2：后端处理过跨域问题
  // baseURL: 'http://ihrm-java.itheima.net/api'
  // 接口3：代理处理跨域问题
  // baseURL: '/api'
  baseURL: '/prod-api'
})
// 添加请求拦截器
request.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  // console.log('config',config)
  if (store.state.user.token) {
    config.headers.Authorization = 'Bearer ' + store.state.user.token
  }
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(async function(response) {
  // 对响应数据做点什么
  // console.log('执行响应拦截的正确处理',response)
  // 状态码为200
  const { data: { data, success, message }} = response
  // 如果失败，产生错误,走进catch
  if (!success) {
    // 同Toast使用方法
    Message.error(message)
    // 阻止登录失败还发生跳转
    // 方式一抛出错误
    // throw new Error(message)
    // 方式二产生错误
    return Promise.reject(new Error(message))
  }
  // 成功则返回数据token
  return data
  // return response
}, function(error) {
  // console.log('执行响应拦截的失败处理', error)
  // 对响应错误做点什么 状态码不为200，401(token失效)，400(前端问题)，500(后端问题)
  // console.dir(error)  // 查看error对象,获取相关数据 error.response
  if (error.response) {
    // 单独处理token超时问题 status===401
    // console.dir(error)
    if (error.response.status === 401) {
      // 执行退出操作
      store.dispatch('user/logout')
      // 跳转到登录页
      router.push('/login')
    }
    // 提示 错误信息
    Message.error(error.response.data.message)
  }
  return Promise.reject(error)
})

export default request
