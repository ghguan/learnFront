// 1. 新建文件夹，初始化项目 npm init -y（在文件夹下运行）
// 2. 安装koa
// 3. 用koa来启动一个web服务
// （1）引入Koa
const Koa = require('koa')
// （2）实例化一个app
const app = new Koa()

// （3）app.use(async fn)   
// app.use 为app这个应用，添加fn这个中间件
// app.use 表示，对于任何请求，都会调用async这个函数来处理
app.use(async ctx => {
    // ctx.body ===> res.end()
    ctx.body = 'Hello World'
})
// fn这个回调函数 自动接收两个参数
// 1.  ctx  ==> context 上下文环境
// 2.  next  表示调用执行下一个中间件 
// context ctx 它把我们的request和response封装到这个对象中了 

// （4）监听端口
app.listen(3000, () => {
    console.log('koa is running')
})

// 4. 运行服务器
// 5. 获取IP，访问服务器
// 6. 创建utils文件夹 （工具库）
// 7. utils - 创建index.js - 封装getIPV4函数 - 导出模块
const getIpv4 = () => {
    // CommonJS的require可以放在函数中执行 import不行！
    const os = require('os')
    const ifaces = os.networkInterfaces()
    let ip = ''
    for (let key in ifaces) {
        ifaces[key].forEach((el) => {
            if (el.family === 'IPv4' && !el.internal && el.address.startsWith("192")) {
                ip = el.address;
            }
        });
    }
    return ip || "127.0.0.1";
}

module.exports = {
    getIpv4
}
// 8. app.js 导入 getIPV4 模块

// 用koa来启动一个web服务

// 1. 引入Koa
const Koa = require('koa')
// 2. 实例化app
const app = new Koa()
// 导入ipv4方法
const ipv4 = require('./utils/index')

// 3. app.use(async fn)   
// app.use 为app这个应用，添加fn这个中间件
// app.use 表示，对于任何请求，都会调用async这个函数来处理

// fn这个回调函数 自动接收两个参数
// 1.  ctx  ==> context 上下文环境
// 2.  next  表示调用执行下一个中间件 
// context ctx 它把Node的request和response封装到这个对象中了,里面有很多属性和方法 
app.use(async ctx => {
    // 1. 请求 
    // Node ===> request.url 
    // 1. ctx.url 
    // 2. ctx.method
    // 3. ctx.ip  ===> 请求的ip
    // 4. ctx.header  请求头
    console.log(ctx.url)
    console.log(ctx.method)
    console.log(ctx.ip)
    console.log(ctx.header)

    // 2. 响应  response 
    // 2.1 状态码 ctx.status
    // 2.2 设置响应头 ctx.set(key, value)
    // 2.3 res.end()  ===> ctx.body = 
    console.log(ctx.status)
    ctx.set('myHeader', 'string')
    ctx.status = 401

    ctx.body = 'Hello World'
})

// 4. 监听端口
app.listen(3000, () => {
    console.log(`koa is running at http://${ipv4()}:3000`)
})

// 中间件
// 1. 中间件 middleware
// 中间件的本质就是一个函数，定义一个中间件就是定义一个函数

// 2. 怎么将一个函数作为中间件来使用 ？ 
// ==> app.use(async fn)
// 使用app.use()方法来来注册一个中间件
// 或者说，将fn这个中间件挂载到app这个对象上

// 3. 中间件这个函数 自动接收两个参数
// 1. ctx 上下文 
// 2. next 是一个函数，next() 表示调用下一个中间件函数

// 中间件的执行顺序
const Koa = require('koa')
const app = new Koa()
// 注册一个中间件
// fn中间件函数，接收两个参数，next表示调用下一个中间件函数

// 1. 如果第一个中间件不调用next(), 就不会下放控制权，执行下一个中间件
// 2. 中间件的洋葱模型，整个代码的执行顺序

// 以next为分隔， 先执行next前面的代码， 最后执行next后面的代码
app.use(async (ctx, next) => {
    ctx.body = 'hello koa - 1'
    await next()
    ctx.body = 'hello koa - 3'
})

app.use(async (ctx, next) => {
    ctx.body = 'hello koa - 2'
})

app.listen(3000,() => {
    console.log('koa is running at port 3000')
})