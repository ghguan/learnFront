// 全部导入
// import * as 模块名 from '路径.js'
import * as myModule from './module/02按需导出模块.js'

// 所有导出的变量都放到这个对象上了
console.log(myModule)

// 1. 默认导出的属性名是==> default 
console.log(myModule.default)
// { hobbys: [ 'draw', 'run' ], msg: 'nihao' }

// 2. 默认导出的变量只能用default访问
// hobbys是默认导出
console.log(myModule.hobbys)
// undefined

// 3. 按需导出的变量用其变量名即可访问
console.log(myModule.music)
// hello