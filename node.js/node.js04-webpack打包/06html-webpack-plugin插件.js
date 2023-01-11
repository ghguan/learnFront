// html-webpack-plugin插件  
// 想要每次打包时，自动创建一个html文件，并且，自动把打包的js文件引入到这个html文件中

// 在webpack.config.js中导入插件
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// 使用插件的 plugins 数组
// module.exports =>
// plugins: [
//     new HtmlWebpackPlugin({
         // js插入的位置
//         inject: 'body',
         // 打包之后的文件名
//         filename: 'index.html',
         // 使用哪个文件作为模板
//         template: path.resolve(__dirname, './public/index.html'),
//     }),
// ]