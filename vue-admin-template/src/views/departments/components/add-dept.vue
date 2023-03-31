<template>
  <el-dialog
    :title="form.id?'编辑部门':'新增部门'"
    :visible="dialogVisible"
    width="50%"
    @close="onClose"
  >
    <el-form ref="formRef" label-width="110px" :rules="rules" :model="form">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="form.name" placeholder="1-50个字符"></el-input>
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input v-model="form.code" placeholder="1-50个字符"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select v-model="form.manager" style="width:100%" placeholder="请选择">
          <el-option v-for="item in employeesList" :key="item.id" :label="item.username" :value="item.username"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input v-model="form.introduce" type="txtarea" placeholder="1-300个字符"></el-input>
      </el-form-item>
    </el-form>

    <el-row slot="footer" type="flex" justify="center">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </el-row>
  </el-dialog>
</template>

<script>
import { getEmployeesSimple } from '@/api/employees'
import { addDepartments, getDepartments, getDepartmentDetail, updateDepartment } from '@/api/departments'
export default {
  name: 'AddDept',
  components: {},
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    node: {
      type: Object,
      required: true
    }
  },
  data() {
    const validateName = async(rule, value, callback) => {
    //   console.log('this.node', this.node)
      const allDepartments = (await getDepartments()).depts
      let brothers
      // 根据form数据中是否有id，判断是编辑还是新增
      if (this.form.id) {
        // 编辑
        // 编辑排除当前部门的校验，还是需要根据当前部门的pid找兄弟校验
        brothers = allDepartments.filter(t => t.id !== this.form.id && t.pid === this.form.pid)
      } else {
        // 新增
        brothers = allDepartments.filter(t => t.pid === this.node.id)
      }
      // this.node.id 的this指向，这里要使用箭头函数定义
      //   console.log('brothers', brothers)
      if (brothers.some(t => t.name === value)) {
        // 校验失败
        callback(new Error('同级部门中禁止出现重复部门'))
      } else {
        // 校验成功
        callback()
      }
    }
    const validateCode = async(rule, value, callback) => {
      let allDepartments = (await getDepartments()).depts
      if (this.form.id) {
        allDepartments = allDepartments.filter(t => t.id !== this.form.id)
      }
      if (allDepartments.some(t => t.code === value)) {
        // 校验失败
        callback(new Error('部门编码在整个模块中都不允许重复'))
      } else {
        // 校验成功
        callback()
      }
    }
    return {
      // 绑定数据
      form: {
        name: '',
        code: '',
        manager: '',
        introduce: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 30 个字符', trigger: 'blur' },
          { validator: validateName, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入部门编码', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 30 个字符', trigger: 'blur' },
          { validator: validateCode, trigger: 'blur' }
        ],
        manager: [
          { required: true, message: '请选择部门负责人', trigger: 'change' }
        ],
        introduce: [
          { required: true, message: '请输入部门介绍', trigger: 'blur' },
          { min: 1, max: 300, message: '长度在 1 到 300 个字符', trigger: 'blur' }
        ]
      },
      employeesList: []
    }
  },
  async created() {
    this.employeesList = await getEmployeesSimple()
  },
  mounted() {
  },
  methods: {
    async getDepartmentDetail(id) {
      this.form = await getDepartmentDetail(id)
    },
    onClose() {
      //   this.$emit('changeDialogVisible')
      // 手动重置表单
      this.form = {
        name: '',
        code: '',
        manager: '',
        introdce: ''
      }
      // 重置表单有bug
      this.$refs.formRef.resetFields()
      // 关闭窗口
      this.$emit('update:dialogVisible', false)
    },
    async onSubmit() {
      try {
        // 校验成功后发请求
        await this.$refs.formRef.validate()
        if (this.form.id) {
          // 编辑
          // console.log('this.form', this.form)
          await updateDepartment(this.from)
        } else {
          // 新增
          await addDepartments({
            // 展开方便追加对象属性
            ...this.form,
            pid: this.node.id
          })
        }
        this.$message.success('操作成功')
        this.onClose()
        // 刷新列表
        this.$emit('success')
      } catch (error) {
        console.log(error)
      }
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
