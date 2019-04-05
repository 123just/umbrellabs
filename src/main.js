// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HsMenu from 'hs-menu'
import { Button, Badge, Input, Select, Option, Form, FormItem, Table, TableColumn, Dialog,
  MessageBox, Message, Pagination, Row, Col, Alert} from 'element-ui'


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

Vue.prototype.$alert = Message.alert;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
