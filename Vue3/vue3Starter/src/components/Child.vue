<template>
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
            <tr v-for="item in list" :key="item.id">
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
<script>
export default {
    name: 'Child',
    data() {
        return {
            form: {
                id: '',
                title: '',
                date: ''
            },
            list: [],
        }
    },
    created() {
        // 本地缓存
        const data = localStorage.getItem('list')
        this.list = data ? JSON.parse(data) : this.list
    },
    methods: {
        submit() {
            this.list.push({
                id: this.list.length ? this.list[this.list.length - 1].id + 1 : 1,
                title: this.form.title,
                date: this.form.date
            })
            // 将数据存储到本地缓存中
            localStorage.setItem('list', JSON.stringify(this.list))
            // 重置表单
            this.form = ''
        },
        change(id) {
            // 修改id对应的数据
            this.list = this.list.map(item => {
                if (item.id === id) {
                    return this.form
                }
                return item
            })
            // 将数据存储到本地缓存中
            localStorage.setItem('list', JSON.stringify(this.list))
            // 重置表单
            this.form = ''
        },
        onEdit(item) {
            // 编辑当前行,回显数据
            this.form = item
        },
        onDelete(item) {
            // 删除当前行
            this.list = this.list.filter(i => i.id !== item.id)
            // 将数据存储到本地缓存中
            localStorage.setItem('list', JSON.stringify(this.list))
        }
    }
}

</script>
<style scoped>
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