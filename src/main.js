import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'; // rem 配置（作用：手机自适应）
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import { Button } from 'vant';

Vue.use(Button);
import { Popup } from 'vant';

Vue.use(Popup);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
