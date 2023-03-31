import dayjs from 'dayjs'
// import Vue from 'vue'
// Vue.filter('formatTime', (val) => {
//   return dayjs(val).format('YYYY/MM/DD')
// })
export function formatTime(val, fomart = 'YYYY/MM/DD') {
  return dayjs(val).format(fomart)
}

import employeesEnum from '@/api/constant/employees.js'
export function formatHireType(val) {
  const f = employeesEnum.hireType.find(el => {
    return el.id === parseInt(val)
  })
  return f ? f.value : '未知'
}
