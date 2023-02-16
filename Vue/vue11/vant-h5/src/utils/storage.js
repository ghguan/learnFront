// 存，取，删除
// localStorage.setItem('key', val)
// localStorage.getItem(key)
// localStorage.removeItem(key)

const KEY = 'my-H5-vant-token'

export const setToken = (newToken) => {
  localStorage.setItem(KEY, newToken)
}
export const getToken = () => {
  return localStorage.getItem(KEY)
}
export const removeToken = () => {
  return localStorage.removeItem(KEY)
}
