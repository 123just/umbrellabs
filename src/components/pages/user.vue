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
            <el-select class="items-input" v-model="formInfo.role" placeholder="请选择">
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
            <el-button class="reset-btn" native-type="reset" @click="reset">复 原</el-button>
            <el-button type="primary" class="search-btn" native-type="submit" @click="searchData">搜 索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="main-btns">
      <el-button type="primary" @click="downloadFile">获取导入模板</el-button>
      <el-upload
        class="upload-demo"
        :show-file-list=false
        :on-success="addVolunteer"
        action="http://139.199.88.87:9001/api/user/manager/volunteer">
        <el-button type="primary">新增志愿者</el-button>
      </el-upload>
      <el-button type="danger" @click="deleteVolunteer">清空志愿者</el-button>
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
        align="center" :show-overflow-tooltip="true">
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
            <el-button size="mini" @click="handleEditStatus(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)" style="width:70px">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="submitInfo.pageNum"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="totalData"
          @current-change="changeTableData">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserList, clearVolunteer, deleteUser} from '../../api/apis'

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
        phone: '',
        role: '',
        type: '',
        volunteerCode: ''
      },
      // 接口内的filter数据
      submitInfo: {
        pageNum: 1,
        pageSize: 5,
      },
      // tableData
      tableData: [],
      totalData: 0,
      dialogFormVisible: false,
      dialogStatus: 0,
    }
  },
  created() {
    this.changeTableData();
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
    // 改变table数据
    changeTableData() {
      getUserList(this.submitInfo).then(res => {
        this.tableData = res.data.data.list;
        this.totalData = res.data.data.total;
      }).catch(res => {console.log(res)})
    },
    handleEditStatus(row) {
      this.$router.push({ path: '/app-center/user-edit', query: {userInfo: row} });
    },
    handleDelete(row) {
      // delete data接口
      this.$confirm('确认删除该用户？').then(() => {
        deleteUser(row.id).then(res => {
          this.$message({
            message: '删除用户成功',
            type: 'success'
          });
          this.changeTableData();
        }).catch(res => {
          console.log(res);
        })
      }).catch(() => {});
    },
    reset() {
      this.formInfo.className = '';
      this.formInfo.code = '';
      this.formInfo.name = '';
      this.formInfo.phone = '';
      this.formInfo.role = '';
      this.formInfo.type = '';
      this.formInfo.volunteerCode = '';
      Object.assign(this.submitInfo, this.formInfo);
      this.submitInfo.role = -1;
      this.submitInfo.type = -1;
      this.submitInfo.pageNum = 1;
      this.changeTableData();
    },
    searchData () {
      Object.assign(this.submitInfo, this.formInfo);
      if (this.submitInfo.type !== 0 && !this.submitInfo.type) {
        this.submitInfo.type = -1;
      } 
      if (!this.submitInfo.role) {
        this.submitInfo.role = -1;
      }
      this.submitInfo.pageNum = 1;
      this.changeTableData();
    },
    // 获取导入模板
    downloadFile() {
      window.open('https://justdj-umbrella.oss-cn-hangzhou.aliyuncs.com/%E5%BF%97%E6%84%BF%E8%80%85%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx');
    },
    addVolunteer(response, file, fileList) {
      this.changeTableData();
      this.$message({
        message: '删除用户成功',
        type: 'success'
      });
    },
    deleteVolunteer() {
      this.$confirm('确认删除所有志愿者？').then(() => {
        clearVolunteer().then(res => {
          this.$message({
            message: '新增志愿者成功',
            type: 'success'
          });
          this.submitInfo.pageNum = 1;
          this.changeTableData();
        }).catch(res => {
          console.log(res);
        })
      }).catch(() => {});
      // 重新刷新table
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
    justify-content: start;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
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
    width: 160px;
  }
  .main-btns {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .upload-demo {
    margin: 0 15px;
  }
  .pagination {
    margin: 20px;
  }
  .el-form-item {
    margin-bottom: 15px;
    margin-right: 30px;
  }
</style>