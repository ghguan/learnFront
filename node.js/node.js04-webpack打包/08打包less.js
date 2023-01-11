// webpack只能解析js文件

// 解析其他文件需要安装配置loder
// npm i less less-loader --save-dev

// 配置loder
// webpack.config.js => module.exports => module => rules
// {
//     test: /\.less$/i, // .less结尾的文件
//     use: [
       // 使用如下的loader进行解析
//       'style-loader',
//       'css-loader',
//       'less-loader',
//     ],
//   },
// 顺序不能改

// 模块配置
// module: {
     // 解析规则
//     rules: [
    // css
//       {
//         test: /\.css$/i, // .css结尾的文件
//         use: ['style-loader', 'css-loader'], // 通过 这2个 loader进行解析
//       },
    // less
//       {
//         test: /\.less$/i, // .less结尾的文件
//         use: [
           // 使用如下的loader进行解析
//           'style-loader',
//           'css-loader',
//           'less-loader',
//         ],
//       },
//     ],
//   },

// 在src下的index.js中导入less 
// import '路径.less'

// 执行 npm run dev 打包

// 访问打包dist目录下的html文件页面，添加了样式
// less文件成功打包，并引入html文件，能正常使用

// ! 修改代码后，要重新打包，才能看到修改后的效果