import router from '@/router/index.js';
import store from '@/store/index.js';

// 全局前置路由
router.beforeEach(async (to, from, next) => {
  // debugger
  console.log("kkkk")
  next();
})

// 全局后置路由
router.afterEach(async (to, from) => {
  const { title } = to.meta;
  store.commit("SET_TITLE", title);
  //设置组合值
  console.log("beforeAfter")
})
//当你进入页面，首先会进入全局前置