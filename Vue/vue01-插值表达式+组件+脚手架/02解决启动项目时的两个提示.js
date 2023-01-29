// 提示1：
// Download the Vue Devtools extension for a better development experience: 
// https://github.com/vuejs/vue-devtools
// 解决：以服务器的方式启动项目：右键-open with live serve

// 提示2：生产提示
// You are running Vue in development mode.
// Make sure to turn on production mode when deploying for production.
// See more tips at https://vuejs.org/guide/deployment.html
// 解决：设置配置项
// Vue.config => productionTip =false :阻止vue在启动时，生成生产提示
// 方式一：直接在js中添加下面代码
// Vue.config.productionTip =false
// 方式二：vue.js文件中 搜索productionTip，修改