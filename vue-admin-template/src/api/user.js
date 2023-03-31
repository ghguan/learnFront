// import store from '@/store'
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data: data
  })
}

export function getUserBaseInfo(token) {
  return request({
    url: '/sys/profile',
    method: 'post'
    // headers: {
    //   Authorization: 'Bearer ' + store.state.user.token
    // }
  })
}
export function getEmployeeInfo(id) {
  return request({
    url: '/sys/user/' + id,
    method: 'get'
    // headers: {
    //   Authorization: 'Bearer ' + store.state.user.token
    // }
  })
}
// export function getEmployeeBaseInfo(id) {
//   return request({
//     url: '/sys/user' + id,
//     method: 'get',
//     headers: {
//       Authorization: 'Bearer ' + store.state.user.token
//     }
//   })
// }

