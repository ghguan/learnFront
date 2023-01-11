// 开启了dev-server之后，还会默认开启一个很有用的功能，HMR(hot module replacement)模块热替换

// 设置配置
// webpack.config.js => module.exports =>  devServer
// hot: false,// 模块热替换 true / false  开启 / 关闭

// true :
// 1. 修改/src/index.js中引用的样式文件,刷新
// 2. 改了/src/index.js还是会刷新
// 3. 修改的不是/src/index.js关联的，不刷新
// 3. 不刷新的部分：页面中的一些输入的值---input,form，之前输入的内容--->还在

// false：
// 改什么都刷新