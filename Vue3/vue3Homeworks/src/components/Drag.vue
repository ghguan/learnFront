<script setup>
import { reactive, ref, watch, computed } from 'vue'
let form = reactive({
    id: '',
    title: '',
    date: '',
})
let list = ref([])
// 从localStorage中获取list数据
list.value = JSON.parse(localStorage.getItem('list2')) || []

// 监听数据 本地缓存
watch(list, (val) => {
    localStorage.setItem('list2', JSON.stringify(val))
}, {
    deep: true
})

// 提交
const add = () => {
    if (form.id) return
    list.value.push({
        id: Date.now(),
        title: form.title,
        date: form.date,
    })
    form.id = ''
    form.title = ''
    form.date = ''
}
// 修改
const update = () => {
    // 找到当前id对应的数据，修改后返回
    list.value = list.value.map(item => {
        if (item.id === form.id) {
            return {
                id: item.id,
                title: form.title,
                date: form.date
            }
        }
        return item
    })
    form.title = ''
    form.date = ''
    form.id = ''
}
// 编辑
const edit = (item) => {
    // 找到当前id对应的数据，修改后返回
    form.id = item.id
    form.title = item.title
    form.date = item.date
}
// 删除
const del = (id) => {
    // 找到当前id对应的数据，修改后返回
    list.value = list.value.filter(item => item.id !== id)
}



// 拖拽函数
// 拖动开始
const handleDragStart = (event, index) => {
    event.dataTransfer.setData("text/plain", index);
};
// 拖动结束
const handleDragOver = (event) => {
    event.preventDefault();
};
// 放置
const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    // 获取拖动的索引
    const originIndex = parseInt(event.dataTransfer.getData("text/plain"));
    // 放置时改变顺序
    // 1. 先删除原来的
    // 2. 再插入到新的位置
    // splice怎么用？
    // splice(起始索引, 删除几个, 插入的元素)
    // splice返回的是删除的元素
    // splice(0, 1) 删除第一个元素
    // splice(0, 1, 'a') 删除第一个元素，插入'a'
    // splice(0, 0, 'a') 不删除，插入'a'
    // list.value.splice(originIndex, 1)[0];什么意思
    // 先删除原来的，返回删除的元素
    // 
    const item = list.value.splice(originIndex, 1)[0];
    list.value.splice(targetIndex, 0, item);
};
</script>
<template>
    <h1>拖拉拽</h1>
    <h3>{{ form.id ? "修改" : "添加" }}</h3>
    <form>
        <div>
            <label for="title">标题</label>
            <input type="text" id="title" v-model="form.title" />
        </div>
        <div>
            <label for="date">日期</label>
            <input type="date" id="date" v-model="form.date" />
        </div>
        <div>
            <button type="button" @click="add">添加</button>
            <button type="button" @click="update">修改</button>
        </div>
    </form>
    <button @click="mock">模拟数据</button>
    <table>
        <thead>
            <tr>
                <th>标题</th>
                <th>日期</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <!-- 遍历list 渲染列表 绑定拖拽放置事件，行包括标题日期和操作 编辑删除 -->
            <tr v-for="(item, index) in list" :key="item.id" draggable="true" @dragstart="handleDragStart($event, index)"
                @dragover="handleDragOver($event)" @drop="handleDrop($event, index)">
                <td>{{ item.title }}</td>
                <td>{{ item.date }}</td>
                <td>
                    <button @click="edit(item)">编辑</button>
                    <button @click="del(item.id)">删除</button>
                </td>
            </tr>


        </tbody>
    </table>
</template>
<style>
table {
    width: 600px;
    border: 1px solid #ccc;
    border-collapse: collapse;
    display: flex;
    flex-direction: column;
}

/* 为表格中的td和th添加边框 */
td,
th {
    width: 200px;
    /* border: 1px solid #ccc; */
    /* padding: 10px; */
    /* text-align: center; */
}
</style>