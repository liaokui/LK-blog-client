import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import './assets/icon/iconfont.css'

import { Button, Select, Row, Col, Menu, MenuItem, Image, Tag, Backtop, Scrollbar, Card } from 'element-ui';
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



Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})