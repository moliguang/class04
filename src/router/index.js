import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    redirect: 'find',
    children: [
      {
        path: 'find',
        name: 'Find',
        component: () => import('../views/find/index.vue')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my/index.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/my/login.vue')
      },
      {
        path: '/my/comb-list',
        name: 'CombList',
        component: () => import('../views/my/CombList.vue'),
        meta:{
          title:'我的组合'
        }
      },
      {
        path: '/my/com',
        name: 'Com',
        component: () => import('../views/my/Com.vue')
      },
      {
        path: '/my/Subs',
        name: 'Subs',
        component: () => import('../views/my/Subs.vue'),
        meta:{
          title:'我的订阅'
        }
      },
      {
        path: '/my/Fans',
        name: 'Fans',
        component: () => import('../views/my/Fans.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash', // hash history
  // base: process.env.BASE_URL,
  routes
})

export default router
