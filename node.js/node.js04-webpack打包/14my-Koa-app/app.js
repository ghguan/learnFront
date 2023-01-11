// 用koa来启动一个web服务

// const http = require('http')

// const server = http.createServer()

// server.listen(() => {
//     console.log('running')
// })
// server.on('request', (req, res) => {
     // console.log('~~~~')
//     res.end('hello world')
// })

// commonJS导入，导入的是对象，使用其方法要.
const myModule = require('./utils/index.js')
const ip = myModule.getIpv4() 

const Koa = require('koa')
// 实例化一个app
const app = new Koa()

app.use(async ctx => {
    // ctx.body ===> res.end()
    ctx.body = 'Hello World'
})

app.listen(3000, () => {
    console.log(`koa is running at http://${ip}:3000`)
})

// 访问服务器要获取ip => 终端  ipconfig