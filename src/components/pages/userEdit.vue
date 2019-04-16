<template>
  <div class="main">
    <div class="search-title">
      <div class="title-point"></div>
      <div class="title-name">修改信息</div>
    </div>
    <el-form :model="formInfo" label-width="100px" :inline="true" style="margin-right:20px;">
      <el-form-item label="学号：">
        <el-input v-model="formInfo.code"></el-input>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="formInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式：">
        <el-input v-model="formInfo.phone"></el-input>
      </el-form-item>
      <el-form-item label="学院：">
        <el-select v-model="academyInfo" placeholder="请选择" @change="changeClassList">
          <el-option
            v-for="item in academyList"
            :key="item.id"
            :value="item.id"
            :label="item.academyName">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班级：">
        <el-select v-model="formInfo.classId" placeholder="请选择">
          <el-option
            v-for="item in classList"
            :key="item.id"
            :value="item.id"
            :label="item.className">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色：">
        <el-select v-model="formInfo.roleId" multiple placeholder="请选择">
          <el-option
            v-for="item in roles"
            :key="item.value"
            :value="item.value"
            :label="item.label">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="main-buttons">
      <el-button type="danger" v-if="isShowPWD" @click="resetPWD">重置密码</el-button>
      <el-button type="primary" @click="editUser">确认修改</el-button>
    </div>
  </div>
</template>

<script>
import {getAcademyList, getClassList, editUserInfos, resetPassword} from '../../api/apis'
export default {
  data () {
    return {
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
        classId: 1,
        code: '',
        id: '',
        name: '',
        phone: '',
        roleId: ''
      },
      academyList: [],
      classList: [],
      academyInfo: 1,
      userInfo: this.$route.query.userInfo,
      isShowPWD: false // 是否为管理员或负责人
    }
  },
  created() {
    this.formInfo.code = this.userInfo.code;
    this.formInfo.name = this.userInfo.name;
    this.formInfo.phone = this.userInfo.phone;
    this.formInfo.id = this.userInfo.id;
    this.formInfo.roleId = this.userInfo.roleList;
    // 判断是否为负责人或管理人 从而判断是否显示button
    if (this.userInfo.roleList.indexOf(1) > -1 || this.userInfo.roleList.indexOf(4) > -1) {
      this.isShowPWD = true;
    }
    getAcademyList().then(res => {
      this.academyList = res.data.data;
    })
    this.changeClassList()
  },
  methods: {
    // 根据academyId选择classList
    changeClassList() {
      getClassList(this.academyInfo).then(res => {
        this.classList = res.data.data;
      }).catch(res => {
        console.log(res);
      })
    },
    editUser() {
      if (!this.formInfo.classId || !this.formInfo.code || !this.formInfo.name
        || !this.formInfo.phone || !this.formInfo.roleId) {
        this.$message.error('请完善用户信息后提交');
      } else if (!new RegExp('^[0-9]{13}$').test(this.formInfo.code)){
        this.$message.error('学号为13位数字');
      } else if (!new RegExp('^(13[0-9]|15[012356789]|17[0135678]|18[0-9]|14[579]|19[89]|166)[0-9]{8}$').test(this.formInfo.phone)){
        this.$message.error('手机号格式不正确');
      } else {
        this.$confirm('确认修改？').then(() => {
          editUserInfos(this.formInfo).then(res => {
            if (res.data.code !== 200) {
              this.$message.error(res.data.msg);
            } else {
              this.$message('修改成功');
              this.$router.push({ path: '/app-center/user' });
            }
          })
        }).catch(() => {});
      }
    },
    resetPWD() {
      this.$confirm('确认重置密码').then(() => {
        resetPassword(this.userInfo.id).then(res => {
          if (res.data.code !== 200) {
            this.$message.error(res.data.msg);
          } else {
            this.$message('重置密码成功');
            this.$router.push({ path: '/app-center/user' });
          }
        })
      }).catch(() => {});
    }
  }
}
</script>
<style scoped>
  .main-buttons {
    display: flex;
    justify-content: flex-end;
  }
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
    margin: 10px 0 20px 0;
  }
  .title-point {
    width: 4px;
    height: 18px;
    margin-right: 8px;
    background-color: #FF8040;
  }
</style>