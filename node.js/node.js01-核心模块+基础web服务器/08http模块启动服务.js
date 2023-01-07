// 1.导入模块
const http = require("http")

// 2.创建一个web服务器
// 服务器可以干嘛？发送请求，响应请求
const server = http.createServer()

// 3. 启动服务器
// 端口号 0-65535
server.listen(3000, () => {
    console.log('server is running at port 3000')
})

// 4. 监听request事件，做出响应
// request就是监听请求的意思，当有请求过来了，我就干嘛
server.on('request', () => {
    // 
    console.log('hello world')
})

// ipconfig 可以查看本机ip地址 
// ==> 以太网，IPv4地址：局域网地址
// 访问：局域网地址+端口号
// 192.168.19.63:3000
// 访问前要先开启服务 ==> 运行该.js文件
// 访问就会触发request事件，做出响应==>执行回调函数
