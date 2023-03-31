<template>
  <div class="dashboard-container">
    <div class="app-container">
      <page-tool>
        <template #before>
          <span>共21条记录</span>
        </template>
        <template #after>
          <el-button type="danger" size="small" @click="onExport">员工导出</el-button>
          <el-button type="success" size="small" @click="$router.push('/import')">员工导入</el-button>
          <el-button type="primary" size="small" @click="addEmpDialogVisible=true">新增员工</el-button>
        </template>
      </page-tool>
      <el-card>
        <el-table :data="list">
          <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column label="姓名" prop="username" :sortable="true"></el-table-column>
          <el-table-column label="头像">
            <template v-slot="{row}">
              <img
                v-imgerror="require('@/assets/common/head.jpg')"
                :src="row.staffPhoto"
                style="width: 80px;height: 80px;"
                @click="onOpenQrcodeDialog(row.staffPhoto || require('@/assets/common/head.jpg'))"
              >
            </template>
          </el-table-column>
          <el-table-column label="手机号" prop="mobile" :sortable="true"></el-table-column>
          <el-table-column label="工号" prop="workNumber" :sortable="true"></el-table-column>
          <el-table-column label="聘用形式" prop="formOfEmployment" :sortable="true">
            <template v-slot="{row}">
              {{ row.formOfEmployment | formatHireType }}
            </template>
          </el-table-column>
          <el-table-column label="部门" prop="departmentName" :sortable="true"></el-table-column>
          <el-table-column label="入职时间" prop="timeOfEntry" :sortable="true">
            <template v-slot="{row}">
              {{ row.timeOfEntry|formatTime }}
            </template>
          </el-table-column>
          <el-table-column label="帐号状态" prop="enableState" :sortable="true">
            <template v-slot="{row}">
              <el-switch
                v-model="row.enableState"
                disabled
                active-value="1"
                inactive-value="0"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" prop="" :sortable="true" width="260px">
            <template v-slot="{row}">
              <el-button type="text" @click="$router.push('/employees/detail/'+row.id)">查看</el-button>
              <el-button type="text">转正</el-button>
              <el-button type="text">调岗</el-button>
              <el-button type="text">离职</el-button>
              <el-button type="text" @click="addAssignRole(row.id)">角色</el-button>
              <el-button type="text" @click="onDel(row.id)">删除</el-button>

            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="center">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="page.total"
            :page-size="page.size"
            @current-change="onChangePage"
          >
          </el-pagination>
        </el-row>
      </el-card>
    </div>
    <el-dialog
      title="扫码预览"
      :visible.sync="qrcodeDialogVisible"
      width="50%"
    >
      <el-row type="flex" justify="center">
        <qrcode-vue :value="staffPhoto" :size="200" level="H"></qrcode-vue>
      </el-row>
    </el-dialog>
    <!-- 新增员工 -->
    <add-emp :dialog-visible.sync="addEmpDialogVisible" @success="getEmployeesList"></add-emp>
    <!-- 分配角色 -->
    <el-dialog
      title="分配角色"
      :visible.sync="assignRoleDialogVisible"
      width="50%"
    >
      <el-checkbox-group v-model="roleIds">
        <el-checkbox v-for="item in roleList" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
      </el-checkbox-group>
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="onAssignRole">确认</el-button>
        <el-button @click="assignRoleDialogVisible=false">取消</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { pick } from 'lodash'
import { assignRoles, delEmployee, getEmployeeInfo, getEmployeesList } from '@/api/employees'
import QrcodeVue from 'qrcode.vue'
import AddEmp from './components/add-emp.vue'
import { formatHireType } from '@/filter'
import { formatTime } from '@/utils'
import { getRoles } from '@/api/setting'
export default {
  name: 'EmployeesPage',
  components: {
    'qrcode-vue': QrcodeVue,
    'add-emp': AddEmp
  },
  data() {
    return {
      list: [],
      page: {
        page: 1,
        size: 2,
        total: 0
      },
      qrcodeDialogVisible: false,
      staffPhoto: undefined,
      addEmpDialogVisible: false,
      assignRoleDialogVisible: false,
      roleIds: [],
      roleList: [],
      currentId: undefined
    }
  },
  async created() {
    this.getEmployeesList()
    this.roleList = (await getRoles({ page: 1, pagesize: 999 })).rows
    // console.log(await getRoles({ page: 1, pagesize: 999 }))
  },
  methods: {
    async addAssignRole(id) {
      const { roleIds } = await getEmployeeInfo(id)
      this.currentId = id
      if (roleIds) {
        this.roleIds = roleIds
      }
      this.assignRoleDialogVisible = true
    },
    async onAssignRole() {
      await assignRoles({
        id: this.currentId,
        roleIds: this.roleIds
      })
      this.$message.success('操作成功')
      this.assignRoleDialogVisible = false
    },
    onOpenQrcodeDialog(staffPhoto) {
      this.qrcodeDialogVisible = true
      this.staffPhoto = staffPhoto
    },
    async onDel(id) {
      try {
        await this.$confirm('您确定删除该员工吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await delEmployee(id)
        this.getEmployeesList()
        this.$message.success('删除员工成功')
      } catch (error) {
        console.log(error)
      }
    },
    async getEmployeesList() {
      const { rows, total } = await getEmployeesList(this.page)
      console.log(rows)
      this.page.total = total
      this.list = rows
    },
    onChangePage(page) {
      this.page.page = page
      this.getEmployeesList()
    },
    async onExport() {
      import('@/vendor/Export2Excel').then(async excel => {
        // 请求接口，获取数据
        const { rows } = await getEmployeesList({ page: 1, size: this.page.total })
        console.log(rows)
        const data = rows.map(el => {
          el.formOfEmployment = formatHireType(el.formOfEmployment)
          // todo
          el.correctionTime = formatTime(el.correctionTime, 'YYYY-MM-DD')
          el.timeOfEntry = formatTime(el.timeOfEntry, 'YYYY-MM-DD')
          if (!el.mobile) el.mobile = ''
          return Object.values(pick(el, ['username', 'mobile', 'timeOfEntry', 'formOfEmployment', 'correctionTime', 'workNumber', ' departmentName ']))
        })
        const multiHeader = [['姓名', '主要信息', '', '', '', '', '部门']]
        const merges = ['A1:A2', 'B1:F1', 'G1:G2']
        excel.export_json_to_excel({
          multiHeader,
          header: ['姓名', '手机', '入职日期', '聘用形式', '转正日期', '工号', '部门'], // 表头 必填
          merges,
          data, // 具体数据 必填
          filename: 'excel-list', // 非必填
          autoWidth: true, // 非必填
          bookType: 'xlsx' // 非必填

        })
      })
    }
  }
}
</script>

<style lang="scss">

</style>
