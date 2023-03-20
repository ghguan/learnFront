# JS 复习

## Javascript 本质

Js 是由 布兰登·艾奇（Brendan Eich）在 1995 年 5 月 23 日设计出来的，最初的名字叫做 Mocha，后来改名为 LiveScript，最后改名为 JavaScript，然后由 Netscape 公司发布 1996 年 11 月 4 日

## Javascript 与 ECMAScript

ECMAScript 是 JavaScript 的标准，JavaScript 是 ECMAScript 的实现

JS 就是 ES

## Javascript 是杂交语言

1. 借鉴 c 语言的**过程式**（基本语法）
2. 借鉴 java 的基本数据类型
3. 借鉴 scheme 的**函数式**（函数是第一类对象 first class object）
4. 借鉴 Self 的**面向对象**（原型式继承）

因为 JS 支持多范式，所以难度较高，但是灵活性也很高

是主流开发语言中，唯一的**全产品链**开发语言

- web 页面 （vue react angular）
- 小程序 (uniapp, taro)
- android/ios (ionic, react native)
- 桌面应用 (electron)
- 嵌入式开发 (nodejs)
- 服务器开发 (nodejs，jsonserver，fastify)

rust，go，c，java 学习的跳板

## 数据类型（java） -> 代码块（c） -> 函数（scheme） -> 对象（self）

## 数据类型

- 基本数据类型

  - number
  - string
  - boolean
  - null
  - undefined
  - symbol
  - bigint

- 引用数据类型(object)
  - array
  - function
  - date
  - regexp
  - error

## 值 和 引用

在 js 中，**等号左边，冒号左边，函数形参** 都是**引用**，**等号右边，冒号右边，函数实参** 都会取**值**

```javascript
let a = 1;
let b = a;

const data = { value: 0 };
const data = { value2: data.value };

const test = (val) => {};
const test2 = test(a);
```

当变量出现在等号右边时

取值如果是值本身 - 基本数据类型

如果取值是引用地址 - 引用数据类型
