import { getEmployeeInfo, getUserBaseInfo, login } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
//

export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: { }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    clearToken(state) {
      state.token = undefined
      removeToken()
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    clearUserInfo(state) {
      state.userInfo = {}
    }
  },
  actions: {
    async login(ctx, loginForm) {
      const token = await login(loginForm)
      ctx.commit('setToken', token)
    },
    logout(ctx) {
      ctx.commit('clearToken')
      ctx.commit('clearUserInfo')
    },
    async getUserInfo(ctx) {
      const o = await getUserBaseInfo()
      // console.log(o)
      const m = await getEmployeeInfo(o.userId)
      // console.log(m)
      const n = { ...o, ...m }
      ctx.commit('setUserInfo', n)
      return n
    }
  }
}
