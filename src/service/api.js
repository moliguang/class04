/*
 * @Descripttion: 模拟炒股H5
 * @version: 1.0.0
 * @Author: konglingzhan
 * @Date: 2019-06-24 15:48:31
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-11-27 16:09:49
 */

import axios from '@/service/request.js'

/* 把对象转化为formData表单格式 */
const formUtil = (obj) => {
  const formData = new FormData()
  if (Object.keys(obj).length === 0) { return formData }
  for (const key in obj) {
    formData.append(key, obj[key])
  }
  return formData
}
// 获取首页练习场活动信息
export const F700108 = params => axios.post('/simulate/noauth/F700108', formUtil(params));
// 炒股大赛列表
export const F700105 = params => axios.post('/simulate/noauth/F700105', formUtil(params));
// 判断是否有综合榜单
export const F700125 = params => axios.post('/simulate/noauth/F700125', formUtil(params));

// 综合榜单
export const F700126 = params => axios.post('/simulate/noauth/F700126', formUtil(params));