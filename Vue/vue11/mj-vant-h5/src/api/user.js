import request from '@/utils/request'

// 注册接口
export const register = (data) => {
  return request.post('/user/register', data)
}
// 登录接口
export const login = (data) => {
  return request.post('/user/login', data)
}
// 获取用户信息
export const getUserInfo = () => {
  return request('/user/currentUser')
}
