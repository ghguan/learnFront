// 存、取、删除  token
// localStorage.setItem('name', value)
// localStorage.getItem('name')
// localStorage.removeItem('name')

// 定义name
const KEY = 'my-h5-vant-token'

// 按需导出方法

// 定义存
// 接收值
export const setToken = (newToken) => {
  return localStorage.setItem(KEY, newToken)
}
// 函数返回值return！！！！

// 定义取
export const getToken = () => {
  return localStorage.getItem(KEY)
}

// 定义删除
export const removeToken = () => {
  return localStorage.removeItem(KEY)
}
