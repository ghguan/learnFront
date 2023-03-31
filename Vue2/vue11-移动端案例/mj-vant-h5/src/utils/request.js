/* 封装axios用于发送请求 */
import axios from 'axios'
import { Toast } from 'vant'
import { getToken, removeToken } from '@/utils/storage'
import router from '@/router/index'
// 创建一个新的axios实例
const request = axios.create({
  // 接口的基础地址
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  // 设置请求超时时间，超过这个时间，判定为请求超时
  timeout: 5000
})
// 为什么单独创建一个实例出来？
// 提高复用性和便于后期维护
// 不同的接口，可以进行不同的配置，更灵活

// 拦截器一般是做一些公共的逻辑处理，每一个request的请求都要经过拦截器
// 使用前
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
// request.interceptors.response.use(function (response) {
// 对响应数据做点什么
// return response.data
// }, function (error) {
// 对响应错误做点什么
// return Promise.reject(error)
// })
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  if (error.response) {
    // 有错误响应, 提示错误提示
    if (error.response.status === 401) {
      removeToken()
      router.push('/login')
    } else {
      Toast(error.response.data.message)
    }
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 默认导出，导入的时候不要加{}
export default request
