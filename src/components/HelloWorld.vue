<template>
  <div class="main">
    <div class="login-bg">
      <div class="login-project-name">
        <div class="project-logo"></div>
        <div class="project-name">校园爱心伞管理系统</div>
      </div>
      <div class="login-main">
        <div class="login-title">登 录</div>
        <div class="login-form">
          <el-form :model="formInfo" @submit.prevent="onSubmit">
            <el-form-item label="账号：" label-width="60px">
              <el-input placeholder="手机号" v-model="formInfo.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码：" label-width="60px">
              <el-input type="password" v-model="formInfo.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" native-type="submit" @click="onSubmit">登  录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="copyright">Copyright © 2018-2019 杭州师范大学校园爱心伞管理系统</div>
    </div>
  </div>
</template>

<script>
import {login} from '../api/apis'
export default {
  data () {
    return {
      formInfo: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      login(this.formInfo).then(res => {
        if (res.data.code !== 200) {
          this.$message.error(''+res.data.msg);
        } else {
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.$store.commit('setToken', res.data.data.token);
          this.$router.push({ path: '/app-center' });
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background:url('../assets/loginBg.png');
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.login-bg {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4)
}
.login-project-name {
  display: flex;
  margin: 10px 0 0 20px;
  text-align: start;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}
.project-logo {
  width: 34px;
  height: 34px;
  margin-right: 5px;
  transform:rotate(17deg);
  background: url('https://justdj-umbrella.oss-cn-hangzhou.aliyuncs.com/umbrella_active.png');
  background-size: 34px 34px;
}
.login-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  margin: auto;
  background-color: #fff;
}
.login-title {
  height: 80px;
  font-size: 20px;
  line-height: 80px;
}
.login-form {
  width: 80%;
  margin-right: 10px;
}
.el-input__inner {
  width: 100%;
}
.el-button {
  width: 100%;
}
.copyright {
  margin-bottom: 5px;
  font-size: 13px;
  color: #eeeeee;
}
</style>
