<template>
  <div>
    <upload-excel :on-success="onSuccess"></upload-excel>
  </div>
</template>

<script>
import { addBatchEmployee } from '@/api/employees'
export default {
  name: 'ImportPage',
  components: {},
  data() {
    return {

    }
  },
  created() {},
  mounted() {},
  methods: {
    async onSuccess({ header, results }) {
      console.log(header, results)
      const map = {
        '手机号': 'mobile',
        '姓名': 'username',
        '入职日期': 'timeofEntry',
        '转正日期': 'correctionTime',
        '工号': 'workNumber'
      }
      const data = results.map(el => {
        const item = {}
        for (const key in el) {
          const newKey = map[key]
          console.log(newKey)
          item[newKey] = el[key]
        }
        console.log(item)
        return item
      })
      await addBatchEmployee(data)
      this.$message.success('操作成功')
      this.$router.push('/employees')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
