<template>
  <div id="app">

    <router-view/>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />

  </div>
</template>

<script>

export default {
  data () {
    return {
      date: '',
      show: false
    }
  },
  methods: {
    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm (date) {
      this.show = false
      this.date = this.formatDate(date)
    }
  }
}
</script>

<style lang="less">

</style>
