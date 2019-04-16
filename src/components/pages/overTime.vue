<template>
  <div class="main">
    <div>
      <el-alert
        class="main-alert"
        :title= alertTitle
        type="warning"
        show-icon>
      </el-alert>
    </div>
    <div class="main-table">
      <el-table
        :data="tableData"
        border>
        <el-table-column
        prop="umbrellaCode"
        label="伞编号">
        </el-table-column>
        <el-table-column
        prop="userName"
        label="借伞人"
        align="center">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="borrowTime"
          label="借伞时间">
        </el-table-column>
        <el-table-column
          prop="volunteerCode"
          label="志愿者编号">
        </el-table-column>
        <el-table-column
          prop="borrowVolunteerName"
          label="志愿者姓名">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="submitInfo.pageNum"
          :page-size="7"
          layout="total, prev, pager, next"
          :total="totalAmount"
          @current-change="changeTableData">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {unsendCount, overdueList} from '../../api/apis'
export default {
  data () {
    return {
      submitInfo: {
        pageNum: 1,
        pageSize: 7
      },
      tableData: [],
      alertTitle: '',
      totalAmount: 0
    }
  },
  created() {
    this.changeTableData();
  },
  methods: {
    changeTableData() {
      overdueList(this.submitInfo).then(res => {
        this.tableData = res.data.data.list;
        this.totalAmount = res.data.data.total;
        this.alertTitle = "共有" + this.totalAmount + "把伞未及时归还，请提醒相应志愿者及时催伞！"
      })
    }
  }
}
</script>
<style scoped>
  .main-alert {
    margin-bottom: 10px;
  }
  .el-alert__title {
    font-size: 15px;
  }
  .pagination {
    margin: 20px;
  }
</style>