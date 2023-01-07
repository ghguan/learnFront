// 导入模块
const http = require("http")

// 创建一个服务器
const server = http.createServer()

// 启动服务器
server.listen(3000, () => {
    console.log('server is running at port 3000')
})

// 监听request事件，做出响应
// request就是监听请求的意思，当有请求过来了，我就干嘛
server.on('request', (request, response) => {
    // cbFn中第一个参数 请求相关信息  request
    //       第二个参数 处理响应相关的东西 response
    // 访问服务器就执行打印
    console.log('hello,world')
    
    // 1.request 请求
    // (1)request.url  请求路径，服务器后输入的路径内容
    console.log("request.url", request.url)
    // request.url /% E4 % BD % A0 % E5 % A5 % BD
    // 中文路径传过来，会被编码

    // 解决编码问题
    console.log('request.url', decodeURIComponent(request.url))
    // request.url / 你好

    // (2)request.method 请求方式
    console.log(request.method)
    // GET

    // 2.response 响应 ==> 返回给前端一些东西
    // (1)respanse.end('内容') 返回内容给浏览器 
    // 一般最后写，否则后续代码不能正确执行
    // 只显示第一条，中文是乱码
    // response.end('你好')
    // response.end('hello')    
    
    // (2)response.statusCode = xxx  返回给浏览器状态码
    response.statusCode = 404
    // network里查看status

    
    // (3)response.setHeader('') 设置响应头
    // Content-Type 设置返回给浏览器的内容是什么格式
    // "text/html" 内容/文件格式
    // charset 设置编码格式
    // 分号隔开
    response.setHeader('content-type','text/plain;charset=utf-8')
    response.setHeader('Content-Type','text/html;charset=utf-8')
    // network里查看response Headers

    response.end('<h1>你好</h1>')
    // 响应头content-type设置为html，返回浏览器标题一
    // 若未设置为html 则返回浏览器整个字符串

    response.end('你好')
    // 响应头content-type 设置为text等文件格式，返回浏览器中文，否则乱码
    response.end('hello')    
    // response.end一般最后写，否则后续代码不能正确执行
    // 多个response.end，只生效第一个

    // 访问：http://192.168.19.63:3000
    // 发起请求：/你好
    // => http://192.168.19.63:3000/你好
    // 运行时打印：
    // server is running at port 3000
    // 访问时打印：
    // hello, world
    // 发起请求时打印：
    // request.url /% E4 % BD % A0 % E5 % A5 % BD
    // 解码中文：
    // request.url / 你好
    // 打印请求方式
    // GET
    // 页面显示响应数据：
    // 只显示第一条，中文是乱码
    // 浣犲ソ
    // 设置响应头content-type后，中文就不是乱码了
    // 你好


})
// 192.168.19.63:3000