import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import './styles/index.scss'

import { Button, Select } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})