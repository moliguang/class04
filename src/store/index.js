import Vue from 'vue'
import Vuex from 'vuex'
import { zztLoginByWebAccount, F700104 } from '@/service/api.js'

Vue.use(Vuex) // 注册vuex 插件 到vue框架里

export default new Vuex.Store({
  state: {
    userInfo: {}, // 用户信息
    loginStatus: '0', // 0-游客 1-互联网账号登录
  },
  mutations: {
    SET_LOGIN_STATUS (state, loginStatus) { // 切换登录状态
      state.loginStatus = loginStatus;
      sessionStorage.setItem("LOGIN_STATUS", loginStatus);
    },
    SET_USER_INFO (state, userInfo) { // 保存个人信息
      state.userInfo = userInfo;
      // JOSN.stringfigy(userInfo) : 将Object对象转化为json字符串；
      sessionStorage.setItem("USER_INFO", JSON.stringify(userInfo));
    }
  },
  actions: {
    getUserInfo ({ commit }, params = {}) {
      return new Promise((resolve, reject) => {
        F700104(params).then(res => {
          if (res.data.code === 0) {
            resolve(res);
            commit("SET_USER_INFO", res.data.data);
          }
        })
      })
    }
  },
  getters: {
    loginStatus: (state) => { // 获取登录状态
      let loginStatus = sessionStorage.getItem("LOGIN_STATUS");
      if (loginStatus) {
        state.loginStatus = loginStatus;
      }
      return state.loginStatus;
    },
    getUserInfo: (state) => { // 获取个人信息
      // JOSN.parse(userInfo) : 将json字符串转化为Object 对象；
      let userInfo = sessionStorage.getItem("USER_INFO");
      if (userInfo) {
        userInfo = JSON.parse(userInfo)
        state.userInfo = userInfo;
      }
      return state.userInfo;
    }
  }
})


