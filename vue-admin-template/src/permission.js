import router from '@/router/index.js'
import store from '@/store/index'

//
router.beforeEach(async(to, from, next) => {
  if (['/404', '/login'].includes(to.path)) return next()

  if (store.state.user.token) {
    // 登录成功后，路由守卫中获取数据
    if (!store.state.user.userInfo.userId) {
      // // 2.请求接口获取数据
      // await store.dispatch('user/getUserInfo')
      // // 3.定义标识
      // const menus = store.state.user.userInfo.roles.menus
      // // 4.过滤路由
      // const filterRoutes = aysncRoutes.filter(el => menus.includes(el.children[0].name))
      // // 5.添加到路由中去
      // router.addRoutes(filterRoutes)
      // // 6.添加到配置中去
      // router.options.routes.push(...filterRoutes)
      // // router.options === new Router({ })里面的这个对象{ }
      // 4.发送请求获取用户信息，获取用户的菜单权限
      const { roles: { menus }} = await store.dispatch('user/getUserInfo')
      // 5.过滤路由：调用过滤路由的action
      const filterRoutes = await store.dispatch('permission/filterRoute', menus)
      // 6.添加到路由中去：通过addRoutes方法添加
      // router.addRoutes(filterRoutes)
      // 7.解决：白屏问题
      router.addRoutes([...filterRoutes, { path: '*', redirect: '/404', hidden: true }])
      // 8.解决：菜单栏不显示问题
      // 到侧边栏组件中添加routes
      // 9.解决刷新页面404问题
      return next(to.path)
    }
    next()
  } else {
    next('/login')
  }
})

// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login'] // no redirect whitelist

// router.beforeEach(async(to, from, next) => {
//   // start progress bar
//   NProgress.start()

//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   const hasToken = getToken()

//   if (hasToken) {
//     if (to.path === '/login') {
//       // if is logged in, redirect to the home page
//       next({ path: '/' })
//       NProgress.done()
//     } else {
//       const hasGetUserInfo = store.getters.name
//       if (hasGetUserInfo) {
//         next()
//       } else {
//         try {
//           // get user info
//           await store.dispatch('user/getInfo')

//           next()
//         } catch (error) {
//           // remove token and go to login page to re-login
//           await store.dispatch('user/resetToken')
//           Message.error(error || 'Has Error')
//           next(`/login?redirect=${to.path}`)
//           NProgress.done()
//         }
//       }
//     }
//   } else {
//     /* has no token*/

//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       // other pages that do not have permission to access are redirected to the login page.
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })
