<template>
    <div class="container" style="height:300px;overflow-y: auto;" @scroll="onScroll">
        <div class="scroll" :style="{ height: arr.length * 30 + 'px' }">
            <div class="placeholder" :style="{ height: currentIndex * 30 + 'px' }"></div>
            <div class="item" v-for="(item, index) in displayArr" :key="item" :style="{ height: '30px' }">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    computed: {
        displayArr() {
            return this.arr.slice(this.currentIndex, this.currentIndex + 10)
        }
    },
    created() {
        // 初始化一个数组 arr，是 1-1000 的数字
        this.arr = Array.from({ length: 1000 }, (_, k) => k + 1)
    },
    methods: {
        onScroll(e) {
            const scrollTop = e.target.scrollTop
            this.currentIndex = Math.floor(scrollTop / 30)
        }
    }
}
</script>
