const { defineConfig } = require('@vue/cli-service')
// 如果想修改webpack配置，在这个文件下写
module.exports = defineConfig({
  transpileDependencies: true,
    //设置端口号
  devServer:{
    port: 3000
  }
})