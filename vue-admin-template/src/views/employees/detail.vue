<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <el-tab-pane label="登录账号设置">
            <el-form
              ref="FormRef"
              :model="form"
              :rules="rules"
              size="medium"
              label-width="120px"
              style="margin-left: 120px; margin-top:30px"
            >
              <el-form-item label="姓名" prop="username">
                <el-input v-model="form.username" placeholder="请输入姓名" clearable style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入新密码" clearable style="width:300px"></el-input>
              </el-form-item>
              <el-form-item size="large">
                <el-button type="primary" @click="submitForm">更新</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="个人信息">
            <user-info></user-info>
          </el-tab-pane>
          <el-tab-pane label="岗位信息">
            <job-info></job-info>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>

  </div>
</template>

<script>
import { getEmployeeInfo, updateEmployeeInfo } from '@/api/employees'
import UserInfo from './components/user-info.vue'
import JobInfo from './components/job-info.vue'
export default {
  name: 'EmployeeDetail',
  components: {
    UserInfo,
    JobInfo
  },
  data() {
    return {
      form: {
        username: undefined,
        password: undefined
      },
      rules: {
        username: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入新密码',
          trigger: 'blur'
        }]
      }
    }
  },
  async created() {
    const form = await getEmployeeInfo(this.$route.params.id)
    form.password = ''
    this.form = form
  },
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['FormRef'].validate(async valid => {
        if (!valid) return
        // TODO 提交表单
        await updateEmployeeInfo(this.form)
        this.$message.success('操作成功')
      })
    },
    resetForm() {
      this.$refs['FormRef'].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
