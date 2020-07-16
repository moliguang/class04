import router from '@/router/index.js';
import store from '@/store/index.js';

// 全局前置路由
router.beforeEach(async (to,from,next) => {
  console.log("kkkk")
  next();
})

// 全局后置路由
router.afterEach(async (to,from) => {
  const { title } = to.meta;
  store.commit("SET_TITLE",title);
  console.log("beforeAfter")
})