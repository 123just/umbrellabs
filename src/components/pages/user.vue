<template>
  <div class="main">
    <div class="main-search">
      <div class="search-title">
        <div class="title-point"></div>
        <div class="title-name">检索</div>
      </div>
      <div class="search-submain">
        <el-form :inline="true" :model="formInfo" class="form-inline">
          <el-form-item label="学号：">
            <el-input class="items-input" v-model="formInfo.code" placeholder="请输入学号"/>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input class="items-input" v-model="formInfo.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="班级：">
            <el-input class="items-input" v-model="formInfo.className" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input class="items-input" v-model="formInfo.phone" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="信用等级：">
            <el-select class="items-input" v-model="formInfo.type" placeholder="请选择">
              <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色：">
            <el-select class="items-input" v-model="formInfo.role" multiple placeholder="请选择">
              <el-option
              v-for="item in roles"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="志愿者编号：">
            <el-input class="items-input" v-model="formInfo.volunteerCode" placeholder="请输入志愿者编号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="reset-btn">复 原</el-button>
            <el-button type="primary" class="search-btn">搜 索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="main-btns">
      <el-button type="primary">新增志愿者</el-button>
      <el-button type="danger">清空志愿者</el-button>
    </div>
    <div class="main-table">
      <el-table
        :data="tableData"
        border>
        <el-table-column
        prop="code"
        label="学号/工号">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名">
        </el-table-column>
        <el-table-column
        prop="className"
        label="班级名称">
        </el-table-column>
        <el-table-column
        prop="phone"
        label="联系方式">
        </el-table-column>
        <el-table-column
          prop="creditRating"
          label="信用等级">
        </el-table-column>
        <el-table-column
        prop="roleList"
        label="角色"
        align="center" :show-overflow-tooltip=true>
          <template slot-scope="scope">
            <span>{{ getRoleString(scope.row.roleList) }}</span>
          </template>
        </el-table-column>
        <el-table-column
        prop="volunteerId"
        label="志愿者编号"
        align="center">
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="200px">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEditStatus(scope.row)">修改状态</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)" style="width:70px">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="5"
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
      types: [{
        value: 0,
        label: '小于6'
      },{
        value: 1,
        label: '等于6'
      },{
        value: 2,
        label: '大于6'
      }],
      roles: [{
        value: 1,
        label: '管理员'
      },{
        value: 2,
        label: '志愿者'
      },{
        value: 3,
        label: '借伞人'
      },{
        value: 4,
        label: '负责人'
      }],
      // 搜索form
      formInfo: {
        className: '',
        code: '',
        name: '',
        pageNum: 1,
        pageSize: 5,
        phone: '',
        role: [],
        type: '',
        volunteerCode: ''
      },
      // tableData
      tableData: [
        {
        "className": "软工152",
        "code": 2015210405049,
        "creditRating": 0,
        "id": 0,
        "name": "justdj",
        "phone": 135882228,
        "roleList": [
          2
        ],
        "volunteerId": "001"
      },{
        "className": "软工152",
        "code": 2015210405049,
        "creditRating": 0,
        "id": 0,
        "name": "justdj",
        "phone": 135882228,
        "roleList": [
          1,2,3
        ],
        "volunteerId": "002"
      },{
        "className": "软工152",
        "code": 2015210405049,
        "creditRating": 0,
        "id": 0,
        "name": "justdj",
        "phone": 135882228,
        "roleList": [
          1
        ],
        "volunteerId": "002"
      },{
        "className": "软工152",
        "code": 2015210405049,
        "creditRating": 0,
        "id": 0,
        "name": "justdj",
        "phone": 135882228,
        "roleList": [
          4
        ],
        "volunteerId": "002"
      },{
        "className": "软工152",
        "code": 2015210405049,
        "creditRating": 0,
        "id": 0,
        "name": "justdj",
        "phone": 135882228,
        "roleList": [
          0
        ],
        "volunteerId": "002"
      }],
      dialogFormVisible: false,
      dialogStatus: 0,
      currentPage: 1 // pagination的当前页
    }
  },
  methods: {
    // 更改状态为String类型
    getRoleString(roleList) {
      let roleString = '';
      roleList.forEach(e => {
        switch (e) {
        case 1:
          roleString += '管理员 ';
          break;
        case 2:
          roleString += '志愿者 ';
          break;
        case 3:
          roleString += '借伞人 ';
          break;
        case 4:
          roleString += '负责人 ';
          break;
        }
      });
      return roleString;
    },
    handleEditStatus(row) {
      this.dialogFormVisible = true;
    },
    handleDelete(row) {
      // delete data接口
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
  .el-form-item {
    margin-bottom: 15px;
  }
</style>