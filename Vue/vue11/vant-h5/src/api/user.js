// 提供注册 Api 函数

import request from '@/utils/request.js'

// 注册接口
export const register = (data) => {
  console.log(data)
  return request.post('/user/register', data)
}
// 登录接口
export const login = (data) => {
  return request.post('/user/login', data)
}
