<template>
  <div class="main">
    <el-form :model="fromInfo" label-width="100px" :inline="true" style="margin-right:20px;">
      <el-form-item label="学号：">
        <el-input v-model="formInfo.code"></el-input>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="formInfo.code"></el-input>
      </el-form-item>
      <el-form-item label="联系方式：">
        <el-input v-model="formInfo.code"></el-input>
      </el-form-item>
      <el-form-item label="学院：">
        <el-input v-model="formInfo.code"></el-input>
      </el-form-item>
      <el-form-item label="班级：">
        <el-input v-model="formInfo.code"></el-input>
      </el-form-item>
      <el-form-item label="角色：">
        <el-input v-model="formInfo.code"></el-input>
      </el-form-item>
    </el-form>
    <div class="main-buttons">
      <el-button>重置密码</el-button>
      <el-button>确认修改</el-button>
    </div>
  </div>
</template>

<script>
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
        classId: '',
        code: '',
        name: '',
        id: '',
        phone: '',
        roleId: ''
      }
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
  .main-buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>