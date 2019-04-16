// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HsMenu from 'hs-menu'
import store from './store';
import { Button, Badge, Input, Select, Option, Form, FormItem, Table, TableColumn, Dialog,
  MessageBox, Message, Pagination, Row, Col, Alert, DatePicker, Upload} from 'element-ui'
import Axios from 'axios';


Vue.config.productionTip = false

Vue.use(HsMenu);

Vue.use(Button)
Vue.use(Badge)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Alert)
Vue.use(DatePicker)
Vue.use(Upload)

Vue.prototype.$alert = Message.alert;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

/* 添加路由跳转的路径 */
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.state.token) {
      next();
    } else if (localStorage.token) {
      store.commit('setToken', localStorage.token);
      next();
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
})
/* http request 拦截器 */
Axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
/* http response 拦截器 */
Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)
  }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
