import { constantRoutes, aysncRoutes } from '@/router'

// 1.准备模块
export default {
  namespaced: true,
  state: {
    // 路由配置
    routes: constantRoutes
  },
  mutations: {
    setRoutes(state, filterRoutes) {
      state.routes = [...constantRoutes, ...filterRoutes]
    },
    removeRoutes(state) {
      state.routes = constantRoutes
    }
  },
  actions: {
    // 2.定义过滤路由的action
    filterRoute(ctx, menus) {
      console.log(aysncRoutes)
      aysncRoutes.filter(el => el.children[0].name === 'sd')
      const filterRoutes = aysncRoutes.filter(el => menus.includes(el.children[0].name))
      ctx.commit('setRoutes', filterRoutes)
      return filterRoutes
    }

  }
}
