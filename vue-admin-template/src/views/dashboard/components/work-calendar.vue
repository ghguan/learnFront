<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- q:使用element-ui 的flex布局,靠右显示两个下拉框 -->
      <el-row type="flex" justify="end">
        <!-- q:第一个下拉框v-model绑定年,第二个下拉框v-model绑定月 -->
        <el-select v-model="currentYear" size="small" @change="onChange">
          <!-- 渲染年份下拉框 -->
          <el-option v-for="item in yearList" :key="item" :value="item">{{ item }}</el-option>
        </el-select>
        <el-select v-model="currentMonth" size="small" @change="onChange">
          <el-option v-for="item in 12 " :key="item" :value="item">{{ item }}</el-option>
        </el-select>
      </el-row>

      <!-- 使用element-ui的日历组件 -->
      <el-calendar v-model="currentDate" :first-day-of-week="1">
      </el-calendar>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkCalendar',
  components: {},
  data() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    const yearList = []
    for (let i = -5; i <= 5; i++) {
      yearList.push(currentYear + i)
    }
    return {
      currentDate,
      currentYear,
      currentMonth,
      yearList

    }
  },
  created() {},
  mounted() {},
  methods: {
    onChange() {
      this.currentDate = new Date(`${this.currentYear}-${this.currentMonth}-01`)
    }
  }
}

</script>

<style lang="scss" scoped>
// 不显示日历header的样式
::v-deep .el-calendar__header {
  display: none;
}
// 设置下拉框的样式：宽度100px，左外边距10px
::v-deep .el-select {
  width: 100px;
  margin-left: 10px;
}
</style>
