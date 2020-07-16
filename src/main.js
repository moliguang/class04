import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/index.js'
import store from './store/index'//vuex 数据共享 等同上面

import 'lib-flexible'; // rem 配置（作用：手机自适应）
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// register global filters
import vFilters from '@/filters/index.js'
for (const key in vFilters) {
  Vue.filter(key, vFilters[key])
}

import "@/permission.js"; // 引入全局前置路由、后置路由


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
