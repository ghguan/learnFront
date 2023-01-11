module.exports = {
    // 打包的入口文件: 以src下的index.js为入口，读取它所依赖的文件进行解析打包
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // 打包到哪里：dist
    output: {
      // 使用绝对路径
      path: path.resolve(__dirname, 'dist'),
      // 打包出来的文件名: bundle.js 可自定义
      filename: 'bundle.js',
    },
  }