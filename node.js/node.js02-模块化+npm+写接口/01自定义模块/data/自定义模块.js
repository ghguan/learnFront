// 变量
const msg = '我是msg变量'
const info = '不导出我，用不了'

// 方法
const fn = function(){
    console.log('我是方法')
}

// 导出内容，当别人导入该模块就可以使用这些内容
module.exports = {
    msg,
    fn
}