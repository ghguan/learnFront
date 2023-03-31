<template>
  <div>
    <el-dialog v-bind="$attrs" :title="form.id?'编辑权限':'添加权限'" v-on="$listeners">
      <el-form ref="FormRef" :model="form" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="form.name" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="form.code" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" prop="description">
          <el-input v-model="form.description" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="开关" prop="enVisible">
          <el-switch v-model="form.enVisible" active-color="#409EFF" active-value="1" inactive-value="0">
          </el-switch>
        </el-form-item>
      </el-form>
      <el-row slot="footer" type="flex" justify="center">
        <el-button @click="$listeners.close()">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { addPermission, updatePermission } from '@/api/permission'
export default {
  components: {},
  inheritAttrs: false,
  props: [],
  data() {
    return {
      form: {
        name: undefined,
        code: undefined,
        description: undefined,
        enVisible: '0',
        type: undefined,
        pid: undefined
      },
      rules: {
        name: [{
          required: true,
          message: '',
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '',
          trigger: 'blur'
        }],
        description: []
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // onOpen() {},
    // close() {
    //   this.$refs['FormRef'].resetFields()
    //   this.$emit('update:visible', false)
    // },
    handelConfirm() {
      this.$refs['FormRef'].validate(async valid => {
        if (!valid) return
        if (this.form.id) {
          await updatePermission(this.form)
        } else {
          await addPermission(this.form)
        }
        this.$message.success('操作成功')
        // 调用父组件的方法
        this.$parent.getPermissionList()
        this.$listeners.close()
      })
    }

  }
}

</script>
<style>
</style>
