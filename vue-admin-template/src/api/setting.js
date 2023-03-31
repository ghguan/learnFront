import request from '@/utils/request'
export function getCompanyInfo(id) {
  return request({
    url: '/company/' + id,
    method: 'GET'
  })
}
export function getRoles(params) {
  return request({
    url: '/sys/role',
    params,
    method: 'GET'
  })
}
export function addRole(data) {
  return request({
    url: '/sys/role',
    method: 'POST',
    data
  })
}
export function delRole(id) {
  return request({
    url: '/sys/role/' + id,
    method: 'delete'
  })
}
export function getRoleDetail(id) {
  return request({
    url: '/sys/role/' + id,
    method: 'get'
  })
}
export function updateRole(data) {
  return request({
    url: '/sys/role/' + data.id,
    method: 'put',
    data
  })
}
// 给角色分配权限
export function assignPerm(data) {
  return request({
    url: '/sys/role/assignPrem',
    method: 'put',
    data
  })
}
