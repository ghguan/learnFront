<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <tree-node :data="companyInfo">
          <el-dropdown-item @click.native="onAdd(companyInfo)">新增子部门</el-dropdown-item>
        </tree-node>
        <el-tree :data="list" :props="{label:'name'}" default-expand-all>
          <!-- 这是el-tree 的插槽使用，v-slot接收的数据 是element-ui内部封装的 固定使用语法v-slot="{data}" -->
          <template v-slot="{ data }">
            <tree-node :data="data">
              <el-dropdown-item @click.native="onAdd(data)">新增子部门</el-dropdown-item>
              <el-dropdown-item @click.native="onUpdate(data.id)">编辑部门</el-dropdown-item>
              <el-dropdown-item @click.native="onDel(data.id)">删除部门</el-dropdown-item>
            </tree-node>
          </template>
        </el-tree>
      </el-card>
    </div>
    <!-- <add-dept :dialog-visible="dialogVisible" @changeDialogVisible="dialogVisible=false"> -->
    <add-dept ref="addDetail" :dialog-visible.sync="dialogVisible" :node="currentNode" @success="getDepartments">
    </add-dept>
  </div>
</template>

<script>
import treeNode from './components/tree-node.vue'
import { delDepartment, getDepartments } from '@/api/departments.js'
import { translateListToTree } from '@/utils'
import AddDept from './components/add-dept.vue'
export default {
  components: { treeNode, AddDept },

  data() {
    return {
      companyInfo: {
        name: '传智教育',
        manager: '负责人',
        id: ''
      },
      list: [],
      dialogVisible: false,
      currentNode: {}
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    onAdd(node) {
      this.dialogVisible = true
      //   console.log('node', node)
      this.currentNode = node
    },
    async onUpdate(id) {
      // 防止title闪烁修改，await
      await this.$refs.addDetail.getDepartmentDetail(id)
      this.dialogVisible = true
    },
    onDel(id) {
      // MessageBox弹框的全局使用 - 确认消息
      // 确认删除,通过代码 片段elmecon
      this.$confirm('确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async action => {
        // 调用接口
        // console.log(1)
        await delDepartment(id)
        // 提示成功
        this.$message.success('删除成功')
        // 刷新
        this.getDepartments()
      }).catch(() => {
      })
    },
    async getDepartments() {
      const { companyName, depts } = await getDepartments()
      this.companyInfo.name = companyName
      this.list = translateListToTree(depts, '')
      // console.log(depts)
    }
  }
}

</script>

<style lang="scss" scoped>
.tree-card{
    padding: 30px 140px;
    font-size: 14px;
}
</style>
