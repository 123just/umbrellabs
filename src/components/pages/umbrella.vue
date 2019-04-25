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
            <el-button type="primary" native-type="submit" class="search-btn" @click="searchItems">搜 索</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="main-btns">
      <el-button type="primary" @click="addVisible = true">新 增</el-button>
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
    <el-dialog title="修改状态" :visible.sync="editVisible" width="350px">
      <el-form>
          <el-form-item label="状态：" label-width="70px" style="margin-bottom: 5px">
            <el-select v-model="editInfo.status" placeholder="请选择">
            <el-option
              v-for="item in statuses"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
      </el-form>
      <div class="dialog-txt">{{ editDialogText }}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editData">修 改</el-button>
      </div>
  </el-dialog>
  <el-dialog title="新增伞" :visible.sync="addVisible" width="350px">
      <el-form @submit.prevent="addUmbrellas">
          <el-form-item label="伞编号：" label-width="80px" style="margin-bottom: 5px">
            <el-input v-model="addInfo.code" placeholder="请输入伞编号"></el-input>
          </el-form-item>
      </el-form>
      <div class="dialog-txt">* {{ addDialogText }}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" native-type="submit" @click="addUmbrellas" :disabled="!addInfo.code">新 增</el-button>
      </div>
  </el-dialog>
  </div>
</template>

<script>
import {getUmbrellaList, addUmbrella, editUmbrella} from '../../api/apis'

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
        value: -1,
        label: '请选择'
      },{
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
        status: -1,
        code: ''
      },
      addInfo: {
        code: '',
        umbrellaStats: 1
      },
      editInfo: {
        status: 1,
        umbrellaId: ''
      },
      submitInfo: {  // 提交时的数据
        position: '',
        status: -1,
        code: '',
        pageNum: 1,
        pageSize: 6
      },
      // tableData
      tableData: [],
      editVisible: false,
      addVisible: false,
      currentPage: 1, // pagination的当前页
      totalData: 0, // pagination总条数
      addDialogText: '编号格式： T/S/J + 三位数字',
      editDialogText: '',
    }
  },
  created() {
    this.changeTableData();
  },
  methods: {
    // 修改pagination的当前页面 && 修改tableData的接口
    changeTableData () {
      getUmbrellaList(this.submitInfo).then(res => {
        this.tableData = res.data.data.list;
        this.totalData = res.data.data.total;
      }).catch(res => {
        console.log(res);
      })
    },
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
      this.editVisible = true;
      this.editInfo.umbrellaId = row.id;
      this.editInfo.status = row.umbrellaStats;
    },
    addUmbrellas () {
      if (new RegExp('^[JST][0-9]{3}$').test(this.addInfo.code)) {
        this.addDialogText = '编号格式： T/S/J + 三位数字';
        this.$confirm('确认新增' + this.addInfo.code + '伞？').then(() => {
          // 新增数据
          addUmbrella(this.addInfo).then(res => {
            if (res.data.code !== 200) {
              this.addDialogText = res.data.msg;
            } else {
              this.$message({
                message: '成功添加'+ this.addInfo.code +'伞',
                type: 'success'
              });
              this.addVisible = false;
              // 更新table数据
              this.submitInfo.pageNum = 1;
              this.changeTableData();
            }
          }).catch(res => {
            this.addDialogText = res.data.msg;
            this.editVisible = false;
          })
        }).catch(() => {
        });
      } else {
        this.addDialogText = '格式错误，正确格式为 T/S/J + 三位数字';
      }
    },
    editData() {
      if (this.editInfo.status === -1) {
        this.editDialogText = '* 请选择状态';
      } else {
        this.editDialogText = '';
        this.$confirm('确认修改状态为 ' + this.getStatusString(this.editInfo.status) + ' ？').then(() => {
          // 修改数据
          editUmbrella(this.editInfo).then(res => {
            if (res.data.code !== 200) {
              this.editDialogText = '* ' + res.data.msg;
            } else {
              this.$message({
                message: '成功修改',
                type: 'success'
              });
              this.editVisible = false;
              // 更新table数据
              this.submitInfo.pageNum = 1;
              this.changeTableData();
            }
          }).catch(res => {
            this.editDialogText = '* ' + res.data.msg;
            console.log(res);
          })
        }).catch(() => {});
      }
    },
    // 重置按钮
    reset() {
      this.formInfo.position = '';
      this.formInfo.status = -1;
      this.formInfo.code = '';
      Object.assign(this.submitInfo, this.formInfo);
      this.submitInfo.pageNum = 1;
      this.changeTableData();
    },
    searchItems() {
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
  .dialog-txt {
    font-size: 12px;
    margin-left: 80px;
    text-align: start;
  }
</style>