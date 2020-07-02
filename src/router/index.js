import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
        path: '/activity',
        name: 'Activity',
        component: () => import('../views/Activity.vue')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my/index.vue')
      },
    ]
  }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/my',
  //   name: 'My',
  //   component: () => import('../views/My.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash', // hash history
  // base: process.env.BASE_URL,
  routes
})

export default router
