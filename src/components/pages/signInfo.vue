<template>
  <div class="main">
    <div class="main-search">
      <div class="search-title">
        <div class="title-point"></div>
        <div class="title-name">检索</div>
      </div>
      <div class="search-submain">
        <el-form :inline="true" :model="formInfo" class="form-inline">
          <el-form-item label="志愿者编号：">
            <el-input class="items-input" v-model="formInfo.volunteerCode" placeholder="请输入志愿者编号"></el-input>
          </el-form-item>
          <el-form-item label="志愿者姓名：">
            <el-input class="items-input" v-model="formInfo.volunteerName" placeholder="请输入志愿者姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="reset-btn" native-type="reset" @click="reset">复 原</el-button>
            <el-button type="primary" native-type="submit" @click="searchItems">搜 索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="main-btns">
      <el-button type="primary" @click="exportTable">导出总时数表格</el-button>
    </div>
    <div class="main-table">
      <el-table
        :data="tableData"
        border>
        <el-table-column
          prop="volunteerId"
          label="志愿者编号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="signInTime"
          label="签到时间">
        </el-table-column>
        <el-table-column
          prop="signBackTime"
          label="签退时间">
        </el-table-column>
        <el-table-column
          prop="time"
          label="值班时长">
          <template slot-scope="scope">
              <span>{{ changeTime(scope.row.time) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEditStatus(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="submitInfo.pageNum"
          :page-size="6"
          layout="total, prev, pager, next"
          :total="totalData"
          @current-change="changeTableData">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="修改值班记录" :visible.sync="dialogFormVisible" width="350px">
      <el-form>
        <el-form-item label="签到时间：">
          <el-date-picker
            v-model="dialogData.signInTime"
            type="datetime"
            placeholder="选择签到时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="签退时间：">
          <el-date-picker
            v-model="dialogData.signBackTime"
            type="datetime"
            placeholder="选择签退时间">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editData">修 改</el-button>
      </div>
  </el-dialog>
  </div>
</template>

<script>
import {getSignList, exportTimeTable, editSignInfo} from '../../api/apis'
import {formatTime} from '../../utils/index'

export default {
  data () {
    return {
      // 搜索form
      formInfo: {
        volunteerCode: '',
        volunteerName: ''
      },
      submitInfo: {
        pageNum: 1,
        pageSize: 6
      },
      // tableData
      tableData: [],
      dialogFormVisible: false,
      dialogData: {
        signBackTime: '',
        signInTime: '',
        id: 0
      },
      dataAddress: '',
      totalData: 0 // pagination的总条数
    }
  },
  created() {
    this.changeTableData();
  },
  methods: {
    // 导出时数表格
    exportTable() {
      window.open("http://139.199.88.87:9001/api/sign/manager/export");
    },
    // 更新表格数据
    changeTableData() {
      getSignList(this.submitInfo).then(res => {
        if(res.data.code !== 200) {
          console.log(res);
        } else {
          this.tableData = res.data.data.list;
          this.totalData = res.data.data.total;
        }
      })
    },
    // 更改时间类型 => 毫秒转min/h
    changeTime(ms) {
      let second = ms/1000;
      let min = 0;
      let hour = 0;
      let timeString = '';
      if (second >= 60) {
        min = parseInt(second / 60);
        second = second % 60;
        if (min >= 60) {
          hour = parseInt(min / 60);
          min = min % 60;
          timeString += hour + 'h';
          if (min !== 0) {timeString += min + 'min'}
          if (second !== 0) {timeString += second + 's'}
        } else {
          timeString += min + 'min';
          if (second !== 0) {timeString += second + 's'}
        }
      } else if (second) {
        timeString += second + 's'
      }
      return timeString;
    },
    handleEditStatus(row) {
      this.dialogFormVisible = true;
      this.dialogData.signBackTime = row.signBackTime;
      this.dialogData.signInTime = row.signInTime;
      this.dialogData.id = row.id;
    },
    editData() {
      if (this.dialogData.signBackTime instanceof Date) {
        this.dialogData.signBackTime = formatTime(this.dialogData.signBackTime); 
      }
      if (this.dialogData.signInTime instanceof Date) {
        this.dialogData.signInTime = formatTime(this.dialogData.signInTime); 
      }
      this.$confirm('确认修改本条数据？').then(() => {
        this.dialogFormVisible = false;
        // 修改数据
        editSignInfo(this.dialogData).then(res => {
          console.log(res);
          this.searchItems();
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        })
      }).catch(() => {});
    },
    // 重置按钮
    reset() {
      this.formInfo.volunteerCode = '';
      this.formInfo.volunteerName = '';
      this.searchItems();
    },
    searchItems() {
      // 搜索信息
      Object.assign(this.submitInfo, this.formInfo);
      this.submitInfo.pageNum = 1;
      this.changeTableData();
    }
  }
}
</script>
<style scoped>
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
  .items-input {
    width: 150px;
  }
  .main-btns {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .pagination {
    margin: 20px;
  }
  .el-date-editor {
    width: 200px;
    margin-left: 20px;
  }
</style>