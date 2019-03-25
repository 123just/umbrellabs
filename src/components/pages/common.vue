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
        <div class="top-infos">
          <el-badge :value="infosValue" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
        </div>
      </div>
      <router-view/>
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
        "menuId": 0
      },{
        "menuCode": "user",
        "menuId": 1,
        "menuName": "用户管理",
        "activeIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/abb75be0d5b24c98a3d4e4ef303693df.png",
        "hoverIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/abb75be0d5b24c98a3d4e4ef303693df.png",
        "normalIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/1dbe078cce984a28a1755c2020c66428.png"
      },{
        "menuCode": "baseInfo",
        "menuId": 2,
        "menuName": "基础信息管理",
        "activeIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/52e5187ce8514f28baa4ff5060c6b097.png",
        "normalIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/993ffbb90d694e27b88820c773c55e16.png",
        "hoverIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/52e5187ce8514f28baa4ff5060c6b097.png"
      },{
        "menuCode": "borrowInfo",
        "menuId": 3,
        "menuName": "借还记录管理",
        "activeIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/7013b97cb8d24b7b9cbc6c5aa4c8a803.png",
        "hoverIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/7013b97cb8d24b7b9cbc6c5aa4c8a803.png",
        "normalIcon": "http://wcdn.servyou.com.cn/update2/zxm/appCenter/img/658426b614da484bafef302d9f9a71fc.png"
      },{
        "menuCode": "signInfo",
        "menuId": 4,
        "menuName": "志愿者值班信息",
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
  },
  methods: {
    select (data) {
      this.title = data.menu.menuName
    },
    beforeSelect (currentMenu) {
      return new Promise(resolve => {
        resolve();
      });
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
    width: 60px;
    background: #ffffff;
  }
</style>