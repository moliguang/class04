import router from '@/router/index.js';
import store from '@/store/index.js';

// 全局前置路由
router.beforeEach(async (to,from,next) => {
  const { loginStatus } = store.getters;
  if(loginStatus === '0'){
    // 未登录
    if(to.meta.auth === true){
      // 该页面需要登录权限
      next("/login");
    } else {
      // 该页面不需要登录权限
      next();
    }
  } else {
    // 已登录
    next();
  }
})

// 全局后置路由
router.afterEach(async (to,from) => {
  const { title } = to.meta;
  store.commit("SET_TITLE",title);
  console.log("beforeAfter")
})