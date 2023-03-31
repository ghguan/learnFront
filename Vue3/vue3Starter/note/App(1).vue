<template>
    <h3>{{ selected === -1 ? '添加' : '编辑' }}</h3>
    <form>
        <div>
            <label for="title">标题：</label>
            <input type="text" id="title" v-model="form.title">
        </div>
        <div>
            <label for="date">日期：</label>
            <input type="date" id="date" v-model="form.date">
        </div>
    </form>
    <button @click="onSubmit">提交</button>
    <button @click="selected = -1; form.title = ''; form.date = ''">开始添加</button>
    <button @click="mock">添加模拟数据</button>
    <table>
        <thead>
            <tr>
                <th>标题</th>
                <th>日期</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody style="display:block;height: 300px;overflow-y: auto;" @scroll="onScroll">
            <div :style="{ height: arr.length * 30 + 'px' }">
                <div :style="{ height: currentIndex * 30 + 'px' }"></div>
                <tr v-for="(item, index) in displayArr" :key="item.id" style="height:30px">
                    <td>{{ item.title }}</td>
                    <td>{{ item.date }}</td>
                    <td>
                        <button @click="onEdit(index, item.title, item.date)">修改</button>
                        <button>删除</button>
                    </td>
                </tr>
            </div>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        const arr = JSON.parse(localStorage.getItem('arr') || '[]')
        return {
            // 响应式数据，是时间上的数组
            // !!!!!!!!!!!!!!!! 数据驱动
            form: {
                title: '',
                date: ''
            },
            arr,
            selected: -1, // -1 添加 0-n 修改
            currentIndex: 0
        }
    },
    watch: {
        arr: {
            handler() {
                localStorage.setItem('arr', JSON.stringify(this.arr))
            },
            deep: true
        }
    },
    computed: {
        displayArr() {
            return this.arr.slice(this.currentIndex, this.currentIndex + 10)
        }
    },
    methods: {
        mock() {
            for (let i = 0; i < 500; i++) {
                this.arr.push({
                    title: i + '',
                    date: '2020-01-01',
                    id: i + ''
                })
            }
        },
        onScroll(e) {
            const scrollTop = e.target.scrollTop
            this.currentIndex = Math.floor(scrollTop / 30)
        },
        onSubmit() {
            if (this.selected === -1) {
                // 添加
                // q:下面的 id 为什么要这样配置?
                // a:因为 id 是唯一的，如果不这样配置，那么就会出现 id 重复的情况
                this.arr.push({ ...this.form, id: Date.now() + Math.floor(Math.random() * 1000) })
            } else {
                // 修改
                this.arr[this.selected] = { ...this.arr[this.selected], ...this.form }
            }
            this.form = {
                title: '',
                date: ''
            }
            this.selected = -1
        },
        onEdit(key, title, date) {
            this.selected = key
            this.form.title = title
            this.form.date = date
        }
    }
}
</script>