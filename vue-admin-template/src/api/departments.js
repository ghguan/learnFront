import request from '@/utils/request'
export function getDepartments() {
  return request({
    url: '/company/department',
    method: 'get'

  })
}
export function addDepartments(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}
export function delDepartment(id) {
  return request({
    url: '/company/department/' + id,
    method: 'delete'
  })
}
export function getDepartmentDetail(id) {
  return request({
    url: '/company/department/' + id,
    method: 'get'
  })
}
export function updateDepartment(data) {
  return request({
    url: '/company/department/' + data.id,
    method: 'put',
    data
  })
}
