import request from '@/utils/request'

// 注册接口
export const register = (data) => {
  return request.post('/user/register', data)
}
