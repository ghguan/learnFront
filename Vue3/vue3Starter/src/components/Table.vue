<template>
    <h1>虚拟列表</h1>
    <h3>{{ form.id ? "修改" : "添加" }}</h3>
    <form @submit.prevent="submit" class="form">
        <input type="text" v-model="form.title" placeholder="请输入标题">
        <input type="date" v-model="form.date">
        <div>
            <button type="button" @click="change(form.id)">提交</button>
            <button type="submit">添加</button>
        </div>
    </form>
    <button @click="mock">添加数据</button>
    <table style=" display: flex;flex-direction: column;">
        <thead>
            <tr>
                <th>标题</th>
                <th>日期</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody style=" display:block;height: 509px;overflow-y: auto;" @scroll="onScroll">
            <!--  -->
            <div :style="{ height: list.length * 50 + 'px' }">
                <div :style="{ height: currentIndex * 50 + 'px' }"></div>
                <tr class="content" v-for="item in displayArr" :key="item.id" style="height:50px">
                    <td>{{ item.title }}</td>
                    <td>{{ item.date }}</td>
                    <td>
                        <button @click="onEdit(item)">编辑</button>
                        <button @click="onDelete(item)">删除</button>
                    </td>
                </tr>
            </div>
        </tbody>
    </table>
</template>

<script>

export default {
    name: 'Table',
    data() {
        const list = JSON.parse(localStorage.getItem('list') || '[]')
        return {
            form: {
                id: '',
                title: '',
                date: ''
            },
            list,
            currentIndex: 0,
        }
    },
    watch:{
        list:{
            handler(){
                this.save()
            },
            deep:true
        }
    },
    computed: {
        displayArr() {
            return this.list.slice(this.currentIndex, this.currentIndex + 10)
        }
    },
    methods: {
        reset() {
            this.form.id = '',
                this.form.title = '',
                this.form.date = ''
        },
        // 本地缓存
        save() {
            localStorage.setItem('list', JSON.stringify(this.list))
        },
        mock() {
            this.list = Array.from({ length: 1000 }, (v, k) => k + 1).map(item => {
                return {
                    id: item,
                    title: '标题' + item,
                    date: '2020-01-01'
                }
            })
        },
        submit() {
            this.list.push({
                id: this.list.length ? this.list[this.list.length - 1].id + 1 : 1,
                title: this.form.title,
                date: this.form.date
            })
            // 重置表单
            this.reset()
        },
        change(id) {
            // 修改id对应的数据,但不修改id
            const index = this.list.findIndex(item => item.id === id)
            this.list[index].title = this.form.title
            this.list[index].date = this.form.date

            // 重置表单
            this.reset()
        },
        onEdit(item) {
            // 编辑当前行,回显数据
            this.form = item
        },
        onDelete(item) {
            // 删除当前行
            this.list = this.list.filter(i => i.id !== item.id)
        },
        onScroll(e) {
            // 获取滚动条的高度
            const scrollTop = e.target.scrollTop
            console.log(scrollTop)
            // 计算当前的索引
            this.currentIndex = Math.floor(scrollTop / 50)
        }



    }
}

</script>

<style scoped>
.form {
    height: 50px;
}

/* 为表格添加边框 */
table {
    width: 600px;
    border: 1px solid #ccc;
    border-collapse: collapse;
}

/* 为表格中的td和th添加边框 */
td,
th {
    width: 200px;
    border: 1px solid #ccc;
    padding: 10px;
    height: 30px;
    text-align: center;
}

</style>