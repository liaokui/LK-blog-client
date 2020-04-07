import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import './assets/icon/iconfont.css'

import { Message, Button, Select, Row, Col, Menu, MenuItem, Image, Tag, Backtop, Scrollbar, Card, Loading, Input, Form, FormItem } from 'element-ui';
import 'normalize.css'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Image)
Vue.use(Tag)
Vue.use(Backtop)
Vue.use(Scrollbar)
Vue.use(Card)
Vue.use(Loading)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)


Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})