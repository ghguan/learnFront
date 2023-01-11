// Source Map 就是一个信息文件，里面储存着位置信息。存储着压缩混淆后的代码，所对应的转换前的位置。

// 配置Source Map
// webpack.config.js => module.exports
// source-map 仅限在开发模式中使用
//（开发中，程序员需要排错，需要准确的定位错误行号）
// devtool: 'source-map',