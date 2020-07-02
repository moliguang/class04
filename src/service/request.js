
/*
 * @Descripttion: http 请求工具axios封装
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-07-10 09:03:03
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-05 09:08:14
 */
import axios from 'axios'
import router from '@/router/index.js'
import store from '@/store/index.js'
const service = axios.create({
  baseURL: '',
  timeout: 10000
  // withCredentials: true
})

// request interceptor
service.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
})

// response interceptor
service.interceptors.response.use(async (response) => {
  /**
   * 0       success
   * -3       登录态失效
   * 100016  用户未报名参加任何比赛
   * 100022  字段含有敏感词
   * 100023  组合名称重复
   * 10003   暂无数据
   * 100026  比赛无综合榜
   * 100027  用户订阅组合不能超过15组
   */
  let { code } = response.data;
  let condition = [0, 100016, 100022, 100023, 10003, 100026, 100027];
  let isPass = condition.findIndex(item => item === code)
  if (isPass !== -1) {
    return response;
  } else {
    alert(response.data.msg)
  }
}, function (error) {
  // service error : 404,400,500 handler
  switch (error.response.status) {
    case 404:
      router.push('/404');
      break;
    case 401:
      router.push('/login');
      break;
    case 500:
    case 501:
      router.push('/50X');
      break;
    default:
      break;
  }
  return Promise.reject(error);
})

export default service

