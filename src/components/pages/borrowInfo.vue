<template>
  <div class="main">
    <div class="main-search">
      <div class="search-title">
        <div class="title-point"></div>
        <div class="title-name">检索</div>
      </div>
      <div class="search-submain">
        <el-form :inline="true" :model="formInfo" class="form-inline">
          <el-form-item label="伞编号：">
            <el-input class="borrow-items-input" v-model="formInfo.umbrellaCode" placeholder="请输入伞编号"/>
          </el-form-item>
          <el-form-item label="借伞人：">
            <el-input class="borrow-items-input" v-model="formInfo.userName" placeholder="请输入借伞人"></el-input>
          </el-form-item>
          <el-form-item label="伞位置：">
            <el-select class="borrow-items-input" v-model="formInfo.position" placeholder="请选择">
              <el-option
              v-for="item in positions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="经手志愿者：">
            <el-input class="borrow-items-input" v-model="formInfo.code" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="reset-btn" @click="reset">复 原</el-button>
            <el-button type="primary" class="search-btn" @click="searchItems">搜 索</el-button>
          </el-form-item>
        </el-form>
      </div>
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
          label="借伞志愿者">
        </el-table-column>
        <el-table-column
          prop="send"
          label="是否还伞">
          <template slot-scope="scope">
            <span>{{ scope.row.send ? '是' : '否' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="dealLine"
          label="应还伞时间">
        </el-table-column>
        <el-table-column
          prop="sendVolunteerName"
          label="还伞时间">
        </el-table-column>
        <el-table-column
          prop="sendVolunteerName"
          label="还伞志愿者">
        </el-table-column>
        <el-table-column
          prop="lastRepairTime"
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
      positions: [{
        value: 'T',
        label: 'T（图书馆）'
      },{
        value: 'S',
        label: 'S（食堂）'
      },{
        value: 'J',
        label: 'J（教室）'
      }],
      // 搜索form
      formInfo: {
        position: '',
        umbrellaCode: '',
        userName: '',
        pageNum: 1,
        pageSize: 7
      },
      // tableData
      tableData: [],
      currentPage: 1 // pagination的当前页
    }
  },
  methods: {
    // 重置按钮
    reset() {
      this.formInfo.position = '';
      this.formInfo.umbrellaCode = '';
      this.formInfo.userName = '';
      this.formInfo.pageNum = 1;
    },
    searchItems() {
      // 搜索信息
    }
  }
}
</script>
<style>
  .main-search {
   display: flex;
   align-items: flex-start; 
  }
  .search-title {
    display: flex;
    width: 80px;
    margin-top: 10px;
    justify-content: start;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
  }
  .search-submain {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title-point {
    width: 4px;
    height: 18px;
    margin-right: 8px;
    background-color: #FF8040;
  }
  .borrow-items-input {
    width: 120px;
  }
  .main-btns {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .pagination {
    margin: 20px;
  }
</style>