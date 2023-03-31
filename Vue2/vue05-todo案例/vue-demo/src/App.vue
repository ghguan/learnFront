<template>
  <section class="todoapp">
    <!-- 头部部分 -->
    <HeadE @add="addList"></HeadE>

    <!-- 主体部分 -->
    <MaI :list="showList" @del="delList" @check="check" @changeCh="changeCh"></MaI>

    <!-- 底部部分 -->
    <!-- 无数据时不显示 -->
    <!-- <FootE v-show="this.list.length"></FootE> -->
    <!-- <FootE v-if="this.list.length" :list="list"></FootE> -->
    <FootE :list="list" @del="del" @filter="filter" :type="type"></FootE>
  </section>
</template>

<script>
import FootE from './components/FootEr'
import HeadE from './components/HeadEr'
import MaI from './components/MaIn'
export default {
  components: {
    FootE,
    HeadE,
    MaI,
  },
  data() {
    return {
      list: JSON.parse( localStorage.getItem('data')) || [
        { id: 1, name: '吃饭', isDone: false },
        { id: 2, name: '睡觉', isDone: false },
        { id: 3, name: '打豆豆', isDone: true }
      ],
      type: 'all',
    }
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        // console.log(newVal)
        localStorage.setItem('data',JSON.stringify(newVal))
      }
    }
  },
  computed: {
    showList() {
      if (this.type === 'active') {
        return this.list.filter(el => el.isDone === false)
      } else if (this.type === 'completed') {
        return this.list.filter(el => el.isDone === true)
      } else {
        return this.list
      }
    }
  },
  methods: {
    changeCh(val){
      this.list.forEach(el => el.isDone = val)
    },
    delList(id) {
      this.list = this.list.filter(function (el) {
        return el.id !== id
      })
    },
    addList(name) {
      this.list.unshift({
        id: Date.now(),
        name: name,
        isDone: false,
      })
    },
    check(id) {
      // 从数组list中，找到对应的id对象，修改状态
      // arr.find
      const obj = this.list.find(function (e) {
        return e.id === id
      })
      obj.isDone = !obj.isDone
    },
    del() {
      this.list = this.list.filter(el => el.isDone === false)
    },
    filter(val) {
      this.type = val
    }
  },

}
</script>

<style>

</style>
