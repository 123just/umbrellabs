 <template>
   <div class = "app-container">
     <div class = "left-content">
       <hs-menu v-if = "menuSource.length > 0"
              :source = "menuSource"
              :active-menu = "activeMenu"
              :select = "select"
              :is-active-parent-menu = "isActiveParentMenu"
              :before-select = "beforeSelect"></hs-menu>
     </div>
    <div class = "right-content">
      <div class = "right-top">
        <div class = "top-title">{{ title }}</div>
        <div class = "top-user">
          <div class="user-motto"></div>
          <div class="user-name">{{ userName }}</div>
        </div>
        <div class="top-infos" @click="goToInfos">
          <el-badge :value="infosValue" class="item">
            <i class="infoIcon el-icon-bell"></i>
          </el-badge>
        </div>
      </div>
      <div class="right-main">
        <router-view/>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data () {
    return {
      menuSource: [{
        "activeIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/fcbf529f9d15401b93bc24318aadec12.png",
        "hoverIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/fcbf529f9d15401b93bc24318aadec12.png",
        "normalIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/3064945158b54ce5a99058637fc92dc7.png",
        "menuCode": "umbrella",
        "menuName": "志愿伞管理",
        "menuId": 0,
        "targetPath": '/app-center/umbrella'
      },{
        "menuCode": "user",
        "menuId": 1,
        "menuName": "用户管理",
        "targetPath": '/app-center/user',
        "activeIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/abb75be0d5b24c98a3d4e4ef303693df.png",
        "hoverIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/abb75be0d5b24c98a3d4e4ef303693df.png",
        "normalIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/1dbe078cce984a28a1755c2020c66428.png",
      },{
        "menuCode": "base",
        "menuId": 2,
        "menuName": "项目经费管理",
        "targetPath": '/app-center/base',
        "activeIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/52e5187ce8514f28baa4ff5060c6b097.png",
        "normalIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/993ffbb90d694e27b88820c773c55e16.png",
        "hoverIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/52e5187ce8514f28baa4ff5060c6b097.png"
      },{
        "menuCode": "borrow",
        "menuId": 3,
        "menuName": "借还记录管理",
        "targetPath": '/app-center/borrow',
        "activeIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/7013b97cb8d24b7b9cbc6c5aa4c8a803.png",
        "hoverIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/7013b97cb8d24b7b9cbc6c5aa4c8a803.png",
        "normalIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/658426b614da484bafef302d9f9a71fc.png"
      },{
        "menuCode": "sign",
        "menuId": 4,
        "menuName": "志愿者值班信息",
        "targetPath": '/app-center/sign',
        "activeIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/ac11be938c83482cbd9da91d7d902655.png",
        "hoverIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/ac11be938c83482cbd9da91d7d902655.png",
        "normalIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/7460b75db3f84d429298eaff644bcda8.png",
      }],
      activeMenu: 'umbrella',
      isActiveParentMenu: false,
      title: '志愿伞管理', // top-title上的标题
      userName: 'Admin',
      infosValue: 0
    }
  },
  created() {
    // infosValue值的获取
    let index = this.$route.path.lastIndexOf("\/");  
    let str  = this.$route.path.substring(index + 1, this.$route.path.length);
    this.activeMenu = str;
    this.title = this.$route.meta.name;
  },
  methods: {
    select (data) {
      this.title = data.menu.menuName;
      this.$router.push({ path: data.menu.targetPath });
    },
    beforeSelect (currentMenu) {
      return new Promise(resolve => {
        resolve();
      });
    },
    goToInfos () {
      this.$router.push({ path: '/app-center/overtime' });
      this.title = this.$route.meta.name;
    },
    changePage () {
      this.title = this.$route.meta.name;
    }
  }
}
</script> 

<style>
  html,body {
    padding: 0;
    margin: 0;
    height: 100%
  }
  .app-container {
    display: flex;
    height: 100%;
  }
  .left-content {
    padding-top: 60px;
    background-color: #363f4e;
  }
  .right-content {
    flex-grow: 1;
    width: calc(100% - 180px);
    height: 100%;
    background-color: #EEEEEC;
  }
  .right-top {
    display: flex;
    width: 100%;
    height: 60px;
  }
  .top-title {
    flex: 1;
    padding-left: 20px;
    line-height: 60px;
    text-align: start;
    background-color: #ffffff;
    color: #333;
    font-size: 18px;
  }
  .top-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100px;
    margin: 0 4px;
    padding: 20px;
    background: #ffffff;
    color: #333;
    font-size: 17px;
    font-weight: bold;
  }
  .user-motto {
    width: 40px;
    height: 40px;
    border-radius: 20px; 
    background: url(../../assets/motto.jpg);
    background-size: 40px 40px;
  }
  .top-infos {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 60px;
    background: #ffffff;
  }
  .infoIcon {
    font-size: 23px;
  }
  .right-main {
    width: calc(100% - 56px);
    height: calc(100% - 116px);
    margin: 8px;
    padding: 20px;
    background-color: #ffffff;
  }
  /* 以下为通用样式 */
  .el-button {
    border-radius: 0;
  }
  .el-button--primary {
    color: #fff;
    background-color: #FF8040;
    border-color: #FF8040;
    min-width: 85px;
  }
  .el-button--primary:hover{
    color: #fff;
    background-color: #F6A67F;
    border-color: #F6A67F;
  }
  .el-button--primary:focus{
    color: #fff;
    background-color: #FF8040;
    border-color: #FF8040;
  }
  .reset-btn {
    background-color: #ffffff;
    border-color: #FF8040;
    color: #FF8040;
  }
  .reset-btn:hover {
    background-color: #FFFFCC;
    border-color: rgb(255, 93, 64);
    color: rgb(255, 93, 64);
  }
  .reset-btn:focus {
    background-color: #ffffff;
    border-color: #FF8040;
    color: #FF8040;
  }
</style>