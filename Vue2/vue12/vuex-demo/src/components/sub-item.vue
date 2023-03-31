<template>
    <div class="box">
      <h2>子组件 sub</h2>
      从vuex中获取的值: <label>{{ count }}</label>
      <br>
      <button @click="sub">值-1</button>
    </div>
  </template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SubItem',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    sub () {
      this.$store.commit('subCount')
    }
  }
}
</script>

  <style lang="css" scoped>
  .box{
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
  }
  h2 {
    margin-top: 10px;
  }
  </style>
