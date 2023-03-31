// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({
  // state 状态, 即数据, 类似于vue组件中的data,
  // 区别在于 data 是组件自己的数据, 而 state 中的数据整个vue项目的组件都能访问到
  state: {
    // 自定义的数据
    count: 101,
    msg: 'Vuex'
  },
  // 存放操作数据的方法
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
  //    在子组件中提交mutation
  mutations: {
    // 方法里参数 第一个参数是当前store的state属性
    // 所有的mutation函数，第一个参数都是state
    addCount (state) {
      // 不是this，mutation函数内不适用this
      state.count++
    },
    // 第一个参数：state  固定名
    // 第二个参数：payload  自定义名
    // !最多只能俩参数
    // 载荷 运输参数 调用mutaiions的时候 可以传递参数 传递载荷
    addNum (state, n) {
      state.count += n
    },
    subCount (state) {
      state.count--
    },
    changeNum (state, payload) {
      state.count = payload
    }
  },
  // 如果是异步操作，放到action中处理
  // 1.action可以包含任意的异步操作
  // 2. action中不能修改state数据
  actions: {
    // 写好后，页面中就可以调用这个方法~~
    // action方法 的第一个参数 context 上下文对象 ctx ==> 指代了store
    // (如果分了模块，ctx指代的就是模块 )
    // 第二个参数 payload
    waitAdd (ctx, payload) {
      setTimeout(() => {
        console.log(payload.num)
        ctx.commit('addNum', payload.num)
      }, 3000)
    }
  },
  // 开启严格模式，必须按着规范来，对于不规范的Vuex用法，会报错
  // 默认是不开启的，实际开发也不需要开启，这个会耗一些性能
  strict: true
})

// 导出仓库
export default store
