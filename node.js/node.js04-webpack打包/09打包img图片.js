// webpack4 打包img 还需要loader
// webpack5 打包img 不需要loader，不需要安装第三方包，新增了内置对象进行配置

// 添加配置
// webpack.config.js => module.exports => module => rules
// 打包图片的配置
// {
//     test: /\.(png|svg|jpg|jpeg|gif)$/i,
//     type: 'asset/resource',
// },

// 在src下的index.js中导入图片 
// import dog from './assets/imgs/dog.png'
// import shake from './assets/imgs/shake.gif'

// 执行 npm run dev 打包

// 访问打包dist目录下的html文件页面
// 图片文件成功打包，并引入html文件，能正常使用
