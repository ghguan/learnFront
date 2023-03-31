<script setup>
// 导入 reactive 和 ref
import { reactive, ref, watch, computed } from 'vue'
// 定义表单数据
let form = reactive({
    id: '',
    title: '',
    date: '',
})
// 定义渲染列表数据
let list = ref([])
// 定义当前索引
let currentIndex = ref(0)
// 定义截取后的数组
let arr = ref([])
// 从localStorage中获取list数据
list.value = JSON.parse(localStorage.getItem('list')) || []
// 深度监听数据 本地缓存
watch(list, (val) => {
    localStorage.setItem('list', JSON.stringify(val))    
}, {
    deep: true
})

// 数组截取
arr = computed(() => {
    return list.value.slice(currentIndex.value, currentIndex.value + 20)
})
// 提交
const add = () => {
    // 如果有id，说明是修改，不需要添加
    if (form.id) return
    // 添加数据
    list.value.push({
        id: Date.now(),
        title: form.title,
        date: form.date,
    })
    // 清空表单
    form.id = ''
    form.title = ''
    form.date = ''
}
// 提交修改
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
        // 如果不是当前id，返回原数据
        return item
    })
    // 清空表单
    form.title = ''
    form.date = ''
    form.id = ''
}
// 编辑
const edit = (item) => {
    // 找到当前id对应的数据，回显到表单
    form.id = item.id
    form.title = item.title
    form.date = item.date
}
// 删除
const del = (id) => {
    // 找到当前id对应的数据，修改后返回
    list.value = list.value.filter(el => el.id !== id)
}
// 滚动事件
const onScroll = (e) => {
    // 计算当前索引
    currentIndex.value = Math.floor(e.target.scrollTop / 50)
}

// list添加了数据，页面不更新，解决方案，代码如下
const mock = () => {
    for (let i = 0; i < 1000; i++) {
        list.value.push({
            id: Date.now() + i,
            title: '标题' + i,
            date: '2021-01-01'
        })
    }
}
</script>
<template>
    <h1>虚拟列表</h1>
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
        <!-- 布局重新研究，逻辑先实现 -->
        <!-- 展示区域 固定高度 添加滚动条 监听滚动事件-->
        <tbody style="display: block;height: 500px;overflow-y: auto;" @scroll="onScroll" v-if="list.length>0">
            <!-- 容纳列表所有数据的容器，列表长度×单个宽度 -->
            <div :style="{ height: list.length * 50 + 'px' }">
                <!-- 占位容器 当前显示索引×单个宽度 -->
                <div :style="{ height: currentIndex * 50 + 'px' }"></div>
                <!-- 循环渲染 列表数据 -->
                <tr v-for="(item, index) in arr" :key="item.id" style="height: 50px;display: block; " >
                    <td>{{ item.title }}</td>
                    <td>{{ item.date }}</td>
                    <td>
                        <button type="button" @click="edit(item)">编辑</button>
                        <button type="button" @click="del(item.id)">删除</button>
                    </td>
                </tr>
            </div>
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