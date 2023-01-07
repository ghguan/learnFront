// 192.168.19.63:3000

// 1.导入模块
const http = require('http')

// 2.创建
const server = http.createServer()

// 3.启动
server.listen(3000,()=>{
    console.log('server is running at port 3000')   
})

// 4.监听
server.on('request',(req,res)=>{
    // 1.req.url
    // 2.设置响应头 res.setHeader
    // 3.请求路径为判断条件，响应对应内容
    res.setHeader('content-type','text/html;charset=utf-8')
    if(req.url === '/' || req.url === '/index.html'){        
        res.end('<h1>首页</h1>')
    }else if(req.url === '/about.html'){
        res.end('<h1>about页面</h1>')
    }else{
        res.end('<h1>404 not fount</h1>')
    }
    // console.log('come')
    // console.log('req.url',decodeURIComponent(req.url))
    // console.log(req.method)
    // res.statusCode = 500
    // res.setHeader('content-type','text/html;charset=utf-8')
    // res.end('<h1>你好</h1>')
})