<template>
  <div class="main">
    <div class="main-search">
      <div class="search-title">
        <div class="title-point"></div>
        <div class="title-name">检索</div>
      </div>
      <div class="search-submain">
        <el-form :inline="true" :model="formInfo" class="form-inline">
          <el-form-item label="位置：">
            <el-select class="items-input" v-model="formInfo.position" placeholder="请选择">
              <el-option
                v-for="item in positions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="编号：">
            <el-input class="items-input" v-model="formInfo.code" placeholder="请输入伞编号"></el-input>
          </el-form-item>
          <el-form-item label="状态：">
            <el-select class="items-input" v-model="formInfo.status" placeholder="请选择">
              <el-option
              v-for="item in statuses"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button class="reset-btn" @click="reset">复 原</el-button>
            <el-button type="primary" class="search-btn" @click="searchItems">搜 索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="main-btns">
      <el-button type="primary">新 增</el-button>
    </div>
    <div class="main-table">
      <el-table
        :data="tableData"
        border>
        <el-table-column
        prop="code"
        label="编号">
        </el-table-column>
        <el-table-column
        prop="umbrellaStats"
        label="状态"
        align="center">
        <template slot-scope="scope">
          <span>{{ getStatusString(scope.row.umbrellaStats) }}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="lastRepairTime"
          label="上次维修记录">
          <template slot-scope="scope">
            <span>{{scope.row.lastRepairTime ? scope.row.lastRepairTime + ' 维修' : '无维修记录' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEditStatus(scope.row)">修改状态</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="6"
          layout="total, prev, pager, next"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="修改状态" :visible.sync="dialogFormVisible" width="350px">
      <el-form>
          <el-form-item label="状态：" label-width="70px">
            <el-select class="items-input" v-model="dialogStatus" placeholder="请选择">
            <el-option
              v-for="item in statuses"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
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
      statuses: [{
        value: 0,
        label: '停用'
      },{
        value: 1,
        label: '正常'
      },{
        value: 2,
        label: '已借出'
      },{
        value: 3,
        label: '正在维修'
      }],
      // 搜索form
      formInfo: {
        position: '',
        status: '',
        code: '',
        pageNum: 1,
        pageSize: 6
      },
      // tableData
      tableData: [
        {
        "code": "T001",
        "count": 0,
        "createTime": "2019-02-17 09:42:09",
        "id": 1,
        "lastRepairTime": "2019-02-23 03:34:09",
        "umbrellaStats": 1,
        "updateTime": "2019-02-23 03:34:09"
      },{
        "code": "T001",
        "count": 0,
        "createTime": "2019-02-17 09:42:09",
        "id": 1,
        "lastRepairTime": "2019-02-23 03:34:09",
        "umbrellaStats": 1,
        "updateTime": "2019-02-23 03:34:09"
      },{
        "code": "T001",
        "count": 0,
        "createTime": "2019-02-17 09:42:09",
        "id": 1,
        "lastRepairTime": "2019-02-23 03:34:09",
        "umbrellaStats": 1,
        "updateTime": "2019-02-23 03:34:09"
      },{
        "code": "T001",
        "count": 0,
        "createTime": "2019-02-17 09:42:09",
        "id": 1,
        "lastRepairTime": "2019-02-23 03:34:09",
        "umbrellaStats": 1,
        "updateTime": "2019-02-23 03:34:09"
      },{
        "code": "T001",
        "count": 0,
        "createTime": "2019-02-17 09:42:09",
        "id": 1,
        "lastRepairTime": "2019-02-23 03:34:09",
        "umbrellaStats": 1,
        "updateTime": "2019-02-23 03:34:09"
      },{
        "code": "T001",
        "count": 0,
        "createTime": "2019-02-17 09:42:09",
        "id": 1,
        "lastRepairTime": "2019-02-23 03:34:09",
        "umbrellaStats": 1,
        "updateTime": "2019-02-23 03:34:09"
      }],
      dialogFormVisible: false,
      dialogStatus: 0,
      currentPage: 1 // pagination的当前页
    }
  },
  methods: {
    // 更改状态为String类型
    getStatusString(status) {
      switch (status) {
        case 0:
          return '停用';
          break;
        case 1:
          return '正常';
          break;
        case 2:
          return '已借出';
          break;
        case 3:
          return '正在维修';
          break;
        default:
          return '无效';
      }
    },
    handleEditStatus(row) {
      this.dialogFormVisible = true;
    },
    handleDelete(row) {
      // delete data接口
    },
    editData() {
      this.$confirm('确认修改状态为 ' + this.getStatusString(this.dialogStatus) + ' ？').then(() => {
        this.dialogFormVisible = false;
        console.log('editData');
        // 修改数据
      }).catch(() => {});
    },
    // 重置按钮
    reset() {
      this.formInfo.position = '';
      this.formInfo.status = '';
      this.formInfo.code = '';
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
  .items-input {
    width: 140px;
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