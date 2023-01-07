// 导入
const fs = require('fs')
const path = require('path')
const http = require('http')

// 使用
// 创建web服务器
const server = http.createServer()

// 启动
server.listen(3000,()=>{
    console.log('server is running at port 3000')
})

// 监听
server.on('request',(req,res)=>{
    console.log('come')
    // res.setHeader('content-type','text/html;charset=utf-8')
    if(req.url === '/' || req.url === '/index.html'){
        const path1 = path.join(__dirname,'./Clock案例/www/index.html')
        const read1 = fs.readFileSync(path1)
        res.end(read1)
    }else if(req.url === '/clock.css'){
        const path2 = path.join(__dirname,'/Clock案例/www/clock.css')
        const read2 = fs.readFileSync(path2)
        res.end(read2)
    }else if(req.url === '/clock.js'){
        const path3 = path.join(__dirname,'./Clock案例/www/clock.js')
        const read3 = fs.readFileSync(path3)
        res.end(read3)
    }else{
        res.end('<h1>404 not fount</h1>')
    }
    // req.url
    // res.statusCode = 200
    // res.serHeader('content-type','text/html;charset=utf-8')
    // res.end()
    // fs.readFileSync('path','utf-8')
    // path.join(__dirname,'')

})
// 注意：
// 1. 请求地址req.url,不仅仅指手动输入在端口后的路径，浏览器遇到 link和script标签 也会发送请求
//      响应数据将文件返回给浏览器时，浏览器解析文件时，link和script标签中引入的路径也是请求地址
//      例如：index.html文件中引入了/clock.css路径和/clock.js路径
//      所以要展示完整的index.html文件样式和特效，还需要根据标签中的路径分别响应clock.css文件clock.js文件
// 2. 不用设置响应头，读取的是html,css,js文件，浏览器能自动识别，不用单独设置响应头