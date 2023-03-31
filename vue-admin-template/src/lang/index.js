// 导入vue和VueI8n
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 调用Vue.use()方法
// 1. 注册使用插件
Vue.use(VueI18n)
// 2. 创建并导出VueI18n实例
export default new VueI18n({
  // 3. 设置默认语言
  locale: 'zh',
  // 4. 设置语言环境信息
  messages: {
    zh: {
      // 5. 设置语言环境信息中的语言包
      home: {
        title: '首页'
      },
      about: {
        title: '关于'
      }
    },
    en: {
      home: {

        title: 'home'
      },
      about: {
        title: 'about'
      }
    }
  }
})

