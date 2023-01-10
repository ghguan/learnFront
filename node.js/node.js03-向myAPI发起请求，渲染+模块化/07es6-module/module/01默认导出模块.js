// 默认导出
// export default xxx

const msg = '你好'

const sayHi = function(){
    console.log('Hi')
}

// 一个模块中只能存在一句导出
// 一句导出只能导出一个属性/方法
// 导出多个方法/属性,用对象接收
// export default msg
// export default sayHi ❌

export default {
    msg,
    sayHi
}