<script setup>
// 导入reactive和ref
import { reactive, ref } from 'vue'
// 定义一个reactive对象,空数组 命名为list
let data = reactive({ list: [] })
// 定义一个对象,命名form 默认属性id,title,date 都为空
let form = reactive({
    id: '',
    title: '',
    date: ''
})

const reset = () => {
    form = {
        id: '',
        title: '',
        date: ''
    }
}
let list = localStorage.getItem('list2')
data.list = list ? JSON.parse(list) : []

const submit = () => {
    if (form.id) {
        change(form.id)
    } else {

        // console.log(form.title)
        data.list.push({
            id: data.list.length ? data.list[data.list.length - 1].id + 1 : 1,
            title: form.title,
            date: form.date
        })
        // 将数据存储到本地缓存中
        localStorage.setItem('list2', JSON.stringify(data.list))
        // 重置表单
        reset()
    }
}
const change = (id) => {
    // 修改id对应的数据

    data.list = data.list.map(item => {
        if (item.id === id) {
            return form
        }
        return item
    })
    // 将数据存储到本地缓存中
    localStorage.setItem('list2', JSON.stringify(data.list))
    // 重置表单
    reset()
}
const onEdit = (item) => {
    // 编辑当前行,回显数据
    // form = item
    // 没实现数据回显解决方案
    form.id = item.id
    form.title = item.title
    form.date = item.date

}

const onDelete = (item) => {
    // 删除当前行
    data.list = data.list.filter(i => i.id !== item.id)
    // 将数据存储到本地缓存中
    localStorage.setItem('list2', JSON.stringify(data.list))
    // reactive数据修改后，页面不更新的解决方案

}
// handleDragStart两个参数，第一个是事件对象，第二个是当前拖拽元素的索引
// "text/plain"是拖拽数据的格式，index是拖拽数据的值
const handleDragStart = (event, index ) => {
    event.dataTransfer.setData("text/plain", index);
};
const handleDragOver = (event) => {
    event.preventDefault();
};
const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    // originIndex是拖拽元素的索引
    const originIndex = parseInt(event.dataTransfer.getData("text/plain"));
    // drop 时改变顺序
    const item = data.list.splice(originIndex, 1)[0];
    data.list.splice(targetIndex, 0, item);
};
</script>
<template>
    <h1>拖拉拽</h1>
    <h3>{{ form.id?"修改":"添加" }}</h3>
    <form @submit.prevent="submit">
        <input type="text" v-model="form.title" placeholder="请输入标题">
        <input type="date" v-model="form.date">
        <div>
            <button type="button" @click="change(form.id)">提交</button>
            <button type="submit">添加</button>
        </div>
    </form>
    <table>
        <thead>
            <tr>
                <th>标题</th>
                <th>日期</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index ) in data.list" :key="item.id" draggable="true"
                @dragstart="handleDragStart($event, index)" @dragover="handleDragOver" @drop="handleDrop($event, index)">
                <td>{{ item.title }}</td>
                <td>{{ item.date }}</td>
                <td>
                    <button @click="onEdit(item)">编辑</button>
                    <button @click="onDelete(item)">删除</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style>
/* 为表格添加边框 */
table {
    border: 1px solid #ccc;
    border-collapse: collapse;
}

/* 为表格中的td和th添加边框 */
td,
th {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>