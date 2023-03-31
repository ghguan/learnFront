<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <el-tab-pane label="角色管理">
            <el-row>
              <el-button type="primary" size="small" @click="dialogVisible = true">
                新增角色
              </el-button>
            </el-row>
            <el-table
              :data="list"
              style="width: 100%;margin-top:15px"
              border
            >
              <el-table-column
                type="index"
                label="序号"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="名称"
              >
              </el-table-column>
              <el-table-column
                prop="description"
                label="描述"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作"
              >
                <template v-slot="{row}">
                  <el-button type="success" size="small" @click="addAssignPerm(row.id)">分配权限</el-button>
                  <el-button type="primary" size="small" @click="onUpdate(row.id)">编辑</el-button>
                  <el-button type="danger" size="small" @click="onDel(row.id)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-row type="flex" justify="center">
              <el-pagination
                layout="prev, pager, next"
                :total="page.total"
                :page-size="page.pagesize"
                @current-change="onChangePage"
              >
              </el-pagination>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="公司信息">
            公司信息
            <el-alert
              title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
              type="info"
              show-icon
            >
            </el-alert>
            <el-form label-width="180px" style="width:500px;margin-top:15px">
              <el-form-item label="公司名称">
                <el-input v-model="form.name" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="公司地址">
                <el-input v-model="form.companyAddress" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="form.mailbox" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="form.remarks" :disabled="true"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    <add-role ref="addRoleRef" :dialog-visible.sync="dialogVisible" @success="getRoles"></add-role>
    <!-- 分配权限 -->
    <el-dialog
      title="分配权限"
      :visible.sync="assignPermDialogVisible"
      width="50%"
    >
      <el-tree ref="permRef" :data="permList" :props="{label:'name'}" default-expand-all node-key="id" show-checkbox check-strictly>
      </el-tree>
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="onAssignPerm">确认</el-button>
        <el-button @click="assignPermDialogVisible=false">取消</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { getPermissionList } from '@/api/permission'
import { assignPerm, delRole, getCompanyInfo, getRoleDetail, getRoles } from '@/api/setting'
import { translateListToTree } from '@/utils'
import AddRole from './components/add-role.vue'
export default {
  name: 'SettingPage',
  components: { AddRole },
  data() {
    return {
      form: {},
      list: [],
      page: {
        page: 1, // 页码
        pagesize: 2, // 每页多少条数
        total: 0 // 总共多少页
      },
      dialogVisible: false,
      assignPermDialogVisible: false,
      permIds: [],
      permList: [],
      currentId: undefined
    }
  },
  async created() {
    const id = this.$store.state.user.userInfo.companyId
    this.form = await getCompanyInfo(id)
    this.getRoles()
    this.permList = translateListToTree(await getPermissionList(), '0')
  },
  mounted() {},
  methods: {
    async addAssignPerm(id) {
      this.assignPermDialogVisible = true
      const { permIds } = await getRoleDetail(id)
      this.currentId = id
      await this.$nextTick()
      this.$refs.permRef.setCheckedKeys(permIds)
    },
    async onAssignPerm() {
      this.permIds = this.$refs.permRef.getCheckedKeys()
      // console.log(this.permIds)
      await assignPerm({
        id: this.currentId,
        permIds: this.permIds
      })
      this.$message.success('操作成功')
      this.assignPermDialogVisible = false
    },
    async getRoles() {
      const { rows, total } = await getRoles(this.page)
      // console.log('res', res)
      this.list = rows
      // console.log(this.list)
      this.page.total = total
    },
    onUpdate(id) {
      this.$refs.addRoleRef.getRoleDetail(id)
      this.dialogVisible = true
    },
    onDel(id) {
      // 确认删除
      this.$confirm('确认删除', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async action => {
        // 发请求
        await delRole(id)
        // 提示
        this.$message.success('删除成功')
        // 刷新列表
        this.getRoles()
      }).catch(() => {

      })
    },
    onChangePage(page) {
      this.page.page = page
      this.getRoles()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
