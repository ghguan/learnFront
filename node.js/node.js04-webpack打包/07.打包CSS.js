// webpack只能解析js文件

// 解析其他文件需要安装配置loder
// npm i --save-dev  style-loader css-loader

// 配置loder
// webpack.config.js => module.exports => module:

// 模块配置
// module: {
     // 解析规则
//     rules: [
//       {
//         test: /\.css$/i, // .css结尾的文件
//         use: ['style-loader', 'css-loader'] // 通过 这2个 loader进行解析
//       }
//     ]
//   },

// 在src下的index.js中导入css

// 执行 npm run dev 打包

// 访问打包dist目录下的html文件页面，添加了样式
// css文件成功打包，并引入html文件，能正常使用