<template>
  <div>
    <div class="base-apply">
      <div class="base-top">
        <div class="base-title">
          <div class="title-point"></div>
          <div class="title-name">项目资金使用申请</div>
        </div>
        <div class="top-amount">项目总金额：￥{{ fundAmount }}</div>
      </div>
      <div class="base-form">
        <el-form :inline="true" :model="formInfo" class="form-inline">
          <el-form-item label="使用金额： ￥" style="margin-right: 40px">
            <el-input v-model="formInfo.sum" placeholder="请输入金额"></el-input>
          </el-form-item>
          <el-form-item label="使用原因：" style="margin-right: 40px">
            <el-input v-model="formInfo.reason" placeholder="请输入原因" style="width:400px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchItems">确 认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="base-record">
      <div class="base-title">
        <div class="title-point"></div>
        <div class="title-name">项目资金使用记录</div>
      </div>
      <div class="record-table">
        <el-table
          :data="tableData"
          height="400"
          border>
          <el-table-column
          prop="useTime"
          label="使用时间">
          </el-table-column>
          <el-table-column
          prop="sum"
          label="金额"
          align="center">
          </el-table-column>
          <el-table-column
            prop="creatorName"
            label="经手人">
          </el-table-column>
          <el-table-column
            prop="reason"
            label="原因">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fundAmount: 0,
      formInfo: {
        sum: 0,
        reason: '',
      },
      tableData: [{
      "creatorName": '123',
      "reason": "伞坏了",
      "sum": 30,
      "useTime": "201511212-22:22"
      },{
        "creatorName": '123',
      "reason": "伞坏了",
      "sum": 30,
      "useTime": "201511212-22:22"
      },{
        "creatorName": '123',
      "reason": "伞坏了",
      "sum": 30,
      "useTime": "201511212-22:22"
      },{
        "creatorName": '123',
      "reason": "伞坏了",
      "sum": 30,
      "useTime": "201511212-22:22"
      },{
        "creatorName": '123',
      "reason": "伞坏了",
      "sum": 30,
      "useTime": "201511212-22:22"
      },{
        "creatorName": '123',
      "reason": "伞坏了",
      "sum": 30,
      "useTime": "201511212-22:22"
      },{
        "creatorName": '123',
      "reason": "伞坏了",
      "sum": 30,
      "useTime": "201511212-22:22"
      },{
        "creatorName": '123',
      "reason": "伞坏了",
      "sum": 30,
      "useTime": "201511212-22:22"
      }]
    }
  }
}
</script>
<style>
.base-apply {
  margin-bottom: 10px;
}
.base-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 15px;
}
.base-title {
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
}
.title-point {
  width: 4px;
  height: 18px;
  margin-right: 8px;
  background-color: #FF8040;
}
.base-form {
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
}
</style>