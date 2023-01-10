const myAjax = function (url, params) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        if (!params) {
           xhr.open('get',url)
           xhr.send()
        } else {
            xhr.open('post',url)
            // ! post 要设置请求头
            xhr.setRequestHeader('content-type','application/json')
            xhr.send(JSON.stringify(params))
        }
        

        xhr.addEventListener('readystatechange', function () {
            if (!xhr.readyState) return
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                resolve(JSON.parse(xhr.response))
                // console.log(xhr.response)
                reject(xhr.status)
            }
        })
    })
}
// module.exports ={
//     myAjax
// }
// 在node中XMLHttpRequest为未定义，就不在node中测试
// myAjax('http://ajax-api.itheima.net/api/news').then((res) => { console.log(res) })
// myAjax('http://ajax-api.itheima.net/api/login',{
//     username:'admin',
//     password:'123456'
// }).then((res)=>{console.log(res)})

// 用promise封装ajax请求
// fetch(url).then(res => {})



// // 我们自己约定，这个是get请求
// ajax(url).then(res => {})

// // 这种是post请求的方式
// ajax(url, params).then(res => {

// })

// 1. 明确，ajax()调用之后的返回值是一个promise对象 
// const ajax = (url, params) => {
//     return new Promise((resolve, reject) => {
//         // 发送ajax请求 
//         const xhr = new XMLHttpRequest()

//         // 2.1 我们自己约定，不传params，表示get请求
//         if (!params) {
//             xhr.open('GET', url)
//             xhr.send()
//             // 2.2 如果传了params，表示post请求
//         } else if (params) {
//             xhr.open('POST', url)
//             xhr.setRequestHeader('Content-type', 'application/json')
//             // params我们写参数的时候，是一个对象
//             xhr.send(JSON.stringify(params))
//         }
//         // 3. 监听状态
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState !== 4) return
//             if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
//                 //xhr.response
//                 // 当调用了resovle这个方法之后，可以执行 .then(res => {}) , res就是resolve传进去的值 
//                 resolve(JSON.parse(xhr.response))
//             } else {
//                 // .catch(err => {})  err ==> xhr.staus
//                 reject(xhr.status)
//             }
//         }
//         // 4.监听error
//         xhr.onerror = function () {
//             reject('你的网络开小差了')
//         }

//     })
// }