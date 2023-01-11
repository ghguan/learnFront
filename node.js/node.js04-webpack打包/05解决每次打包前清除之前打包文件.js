// 每次打包并不能覆盖之前的文件
// 所以每次打包前，要清除之前打包的文件

// 手动清除太麻烦，在webpack.config.js中配置
// module.exports属性 => output => clean:true
// 每次打包前，清理dist目录

// 但不想dist目录下的创建的html文件被清空，怎么办？
// 解决：html-webpack-plugin插件 