import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'//vuex 数据共享 等同上面
console.log(store)
console.log(typeof store)
import 'lib-flexible'; // rem 配置（作用：手机自适应）
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import { Button } from 'vant';

Vue.use(Button);
import { Popup } from 'vant';

// register global filters
import vFilters from '@/filters/index.js'
for (const key in vFilters) {
  Vue.filter(key, vFilters[key])
}

Vue.use(Popup);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
