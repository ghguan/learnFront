// webpack-dev-server插件  不能打包生成目录dist 
// 会开启一个服务器，并自动监测文件变更，刷新页面
// webpack-dev-server启动服务并自动检测文件的变化

// 安装
// npm i --save-dev webpack-dev-server

// 添加配置
// webpack.config.js => module.exports 
// 开发服务器
// devServer: {
//     port: 9000, // 实时打包所用的端口号
//         open: true, // 初次打包完成后，自动打开浏览器
             // 服务器的根目录
//             static: path.join(__dirname, './dist'),
// },

// 添加执行命令
// package.json =>scripts
// "serve": "webpack serve --config webpack.config.js"

// 执行 npm run serve
// 自动打开页面