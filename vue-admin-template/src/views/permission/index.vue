<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tool :show-before="false">
        <template #after>
          <el-button type="primary" size="default" @click="onAdd({type:1,pid:'0'})">添加权限</el-button>
        </template>
      </page-tool>
      <el-table :data="list" :border="true" row-key="id">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="标识" prop="code"></el-table-column>
        <el-table-column label="描述" prop="description"></el-table-column>
        <el-table-column label="操作">
          <template v-slot="{row}">
            <el-button type="text" @click="onAdd({type:2,pid:row.id})">添加</el-button>
            <el-button type="text" @click="onUpdate(row.id)">编辑</el-button>
            <el-button type="text" @click="onDel(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <add-perm v-if="showDialog" ref="addPermRef" :visible="showDialog" @close="showDialog = false"></add-perm>
  </div>
</template>

<script>
import PageTool from '@/components/PageTool/index.vue'
import AddPerm from './components/add-perm.vue'
import { delPermission, getPermissionDetail, getPermissionList } from '@/api/permission'
import { translateListToTree } from '@/utils'
export default {
  name: 'PermissionPage',
  components: {
    PageTool,
    AddPerm
  },
  data() {
    return {
      list: [],
      showDialog: false
    }
  },
  created() {
    this.getPermissionList()
  },
  mounted() {},
  methods: {
    async getPermissionList() {
      this.list = translateListToTree(await getPermissionList(), '0')
      console.log(this.list)
    },
    onAdd(item) {
      this.showDialog = true
      this.$nextTick(() => { Object.assign(this.$refs.addPermRef.form, item) })
    },
    async onUpdate(id) {
      this.$nextTick(async() => {
        this.$refs.addPermRef.form = await getPermissionDetail(id)
      })
      this.showDialog = true
    },
    async onDel(id) {
      try {
        await this.$confirm('确认删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await delPermission(id)
        this.getPermissionList()
        this.$message.success('删除成功')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
