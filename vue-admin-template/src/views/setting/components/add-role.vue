<template>
  <div>
    <el-dialog :visible="dialogVisible" v-bind="$attrs" :title="form.id?'编辑角色':'新增角色'" v-on="$listeners" @open="onOpen" @close="close">
      <el-form ref="FormRef" :model="form" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入角色名称" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="description">
          <el-input v-model="form.description" placeholder="请输入角色描述" clearable :style="{width: '100%'}">
          </el-input>
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
import { addRole, getRoleDetail, updateRole } from '@/api/setting'
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
        name: undefined,
        description: undefined
      },
      rules: {
        name: [{
          required: true,
          message: '请输入角色名称',
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
    async getRoleDetail(id) {
      this.form = await getRoleDetail(id)
    },
    onOpen() {},
    close() {
      this.form = {
        name: undefined,
        description: undefined
      }
      this.$refs['FormRef'].resetFields()
      this.$emit('update:dialogVisible', false)
    },
    handelConfirm() {
      this.$refs['FormRef'].validate(async valid => {
        if (!valid) return
        // 发请求
        // 判断编辑还是修改
        if (this.form.id) {
          await updateRole(this.form)
        } else {
          await addRole(this.form)
        }
        // 提示成功
        this.$message.success('添加成功')
        // 刷新列表
        this.$emit('success')
        // 关闭窗口
        this.close()
      })
    }
  }
}

</script>
<style>
</style>
