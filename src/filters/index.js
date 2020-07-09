/*
 * @Descripttion: 全局filter  --  过滤器
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-08-30 19:58:49
 * @LastEditors  : konglingzhan
 * @LastEditTime : 2019-12-24 10:46:34
 */
let vFilter = {
  /**
   * 日期转化
   * ps：20190516 --> 2019-05-16
   * @param {String} val
   * @param {String} char
   */
  vG002: function (val, char = '-') {
    // console.log(val)
    // console.log(char)
    let time = ''
    if (val === undefined) {
      return false;
    }
    time = typeof (val) === 'string' ? val : val.toString()
    // time = val
    const y = time.substring(0, 4)
    const m = time.substring(4, 6)
    const d = time.substring(6, 8)
    return y + char + m + char + d
  },
  /**
   * 时间转化
   * ps：171436 --> 17:14:36
   * @param {String} val
   * @param {String} char
   */
  vG003: function (val, char = ':') {
    let time = ''
    if (val === undefined) {
      return false;
    }
    time = typeof (val) === 'string' ? val : val.toString();
    // time = val
    const h = time.substring(0, 2);
    const m = time.substring(2, 4);
    const s = time.substring(4, 6);
    return h + char + m + char + s;
  },
  /**
   * 过滤累计收益率，日收益率  0.9845 => +98.46%  -0.9845 => -98.46%
   * @param {Object} item
   * @param {String} field_eng_name
   * @return {String} text
   */
  vG001: function (item, field_eng_name) {
    let text;
    switch (field_eng_name) {
      case 'profit_all':
        text = vFixedTwoB(item.total_yield);
        break;
      case 'profit_near_month':
        text = vFixedTwoB(item.month_yield);
        break;
      case 'profit_near_week':
        text = vFixedTwoB(item.week_yield);
        break;
      case 'profit_near_day':
        text = vFixedTwoB(item.day_yield);
        break;
      case 'popularity_rank':
        text = item.be_sub_num;
        break;
      case 'deficit_rank':
        text = vFixedTwoB(item.total_yield);
        break;
      default:
        break;
    }
    return text;
  },

}
function vFixedTwoB (value) { // 保留两位小数
  if (!value) { value = 0 }
  // if (!value) { return '--' }
  value = Number(value) * 100
  if (value === 0) { return "0.00%" }
  return value > 0 ? "+" + parseFloat(value).toFixed(2) + "%" : parseFloat(value).toFixed(2) + "%"
}
export default vFilter
