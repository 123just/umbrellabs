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
          prop="borrowVolunteerName"
          label="志愿者编号">
        </el-table-column>
        <el-table-column
          prop="send"
          label="志愿者姓名">
        </el-table-column>
        <el-table-column
          prop="dealLine"
          label="备注">
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="7"
          layout="total, prev, pager, next"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // tableData
      tableData: [],
      currentPage: 1, // pagination的当前页
      alertTitle: ''
    }
  },
  created() {
    let totalAmount = 0; // 接口获取
    this.alertTitle = "共有" + totalAmount + "把伞未及时归还，请提醒相应志愿者及时催伞！"
  },
  methods: {
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