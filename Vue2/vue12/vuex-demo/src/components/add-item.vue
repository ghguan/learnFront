<template>
    <div class="box">
      <h2>子组件 add</h2>
      从vuex中获取的值:<label>{{ count }}</label>
      <br />
      <button @click="add">值+1</button>
      <button @click="addNum(2)">值+2</button>
      <button @click="waitToAdd">三秒后  值+6</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'AddItem',
  computed: {
    ...mapState(['count'])

  },
  methods: {
    add () {
      // 修改仓库中的数据，修改处理过的this.count无用
      // this.count++

      // this.$store.state.count++
      // 虽然可以改掉state中的数据，但是不遵循单向数据流的规范 父传子
      this.$store.commit('addCount')
    },
    addNum (n) {
      this.$store.commit('addNum', n)
    },
    ...mapActions(['waitAdd']),
    waitToAdd () {
    //   this.$store.dispatch('waitAdd', {
    //     num: 6
    //   })
      this.waitAdd({ num: 6 })
    }
  }
}
</script>

  <style lang="css" scoped>
  .box {
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
  }
  h2 {
    margin-top: 10px;
  }
  </style>
