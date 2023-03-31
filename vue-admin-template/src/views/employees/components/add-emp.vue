<template>
  <div>
    <el-dialog :visible="dialogVisible" v-bind="$attrs" title="新增员工" width="500px" v-on="$listeners" @open="onOpen" @close="onClose">
      <el-form
        ref="FormRef"
        :model="form"
        :rules="rules"
        size="medium"
        label-width="100px"
        label-position="left"
      >
        <el-form-item label="姓名：" prop="username">
          <el-input v-model="form.username" placeholder="1-30个字符" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="手机：" prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="入职时间：" prop="timeOfEntry">
          <el-date-picker
            v-model="form.timeOfEntry"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :style="{width: '100%'}"
            placeholder="选择日期"
            clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="聘用形式：" prop="formOfEmployment">
          <el-select v-model="form.formOfEmployment" placeholder="请选择" clearable :style="{width: '100%'}">
            <el-option
              v-for="(item, index) in formOfEmploymentOptions"
              :key="index"
              :label="item.value"
              :value="item.id"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工号：" prop="workNumber">
          <el-input v-model="form.workNumber" placeholder="1-20个字符" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="部门：" prop="departmentName">

          <el-popover
            v-model="selectDeptsVisble"
            placement="bottom"
            width="356"
            trigger="manual"
          >
            <el-tree
              :data="deptList"
              :props="{label:'name'}"
              default-expand-all
              @node-click="handleNodeClick"
            ></el-tree>
            <el-input
              slot="reference"
              v-model="form.departmentName"
              placeholder="请输入部门"
              clearable
              :style="{width: '100%'}"
              @focus="selectDeptsVisble = true"
              @blur="selectDeptsVisble = false"
            >
            </el-input>
          </el-popover>
        </el-form-item>
        <el-form-item label="转正时间" prop="correctionTime">
          <el-date-picker
            v-model="form.correctionTime"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :style="{width: '100%'}"
            placeholder="选择日期"
            clearable
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import employeeEnum from '@/api/constant/employees'
import { getDepartments } from '@/api/departments'
import { translateListToTree } from '@/utils'
import { addEmployee } from '@/api/employees'
export default {
  components: {},
  inheritAttrs: false,
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      form: {
        username: undefined,
        mobile: undefined,
        timeOfEntry: null,
        formOfEmployment: undefined,
        workNumber: undefined,
        departmentName: undefined,
        correctionTime: null
      },
      rules: {
        username: [],
        mobile: [],
        timeOfEntry: [],
        formOfEmployment: [],
        workNumber: [],
        departmentName: [],
        correctionTime: []
      },
      formOfEmploymentOptions: employeeEnum.hireType,
      deptList: [],
      selectDeptsVisble: false
    }
  },
  computed: {},
  watch: {},
  async created() {
    this.deptList = translateListToTree((await getDepartments()).depts, '')
  },
  mounted() {
    // console.log('this.options', this.$options)
  },
  methods: {
    onOpen() {},
    onClose() {
      // 还需手动重置
      this.form = this.$options.data().form
      // 重置不彻底
      this.$refs['FormRef'].resetFields()
      this.$emit('update:dialogVisible', false)
    },
    close() {
      this.$emit('update:dialogVisible', false)
    },
    handelConfirm() {
      this.$refs['FormRef'].validate(async valid => {
        if (!valid) return
        // 发请求
        await addEmployee(this.form)
        // 提示成功
        this.$message.success('新增成功')
        // 刷新列表
        this.$emit('success')
        this.close()
      })
    },
    handleNodeClick(data) {
      // console.log(data)
      this.form.departmentName = data.name
      this.selectDeptsVisble = false
    }
  }
}

</script>
<style lang="scss" scoped>
::v-deep .el-tree-node__expand-icon.expanded,
::v-deep .el-tree-node__expand-icon{
  display:none !important;
}
</style>
