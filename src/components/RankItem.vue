<!--
 * @Descripttion: 模拟炒股H5
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-06-27 17:40:20
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-09-18 14:56:16
 -->
<template>
  <!-- 炒股榜单Item -->
  <div class="rank_item" @click="itemClick(item)">
    <div class="rank_item_left">
      <img v-if="index == 0" key="0" class="rank_item_left_img" src="images/first.png" width="20" height="25" alt />
      <img v-else-if="index == 1" key="1" class="rank_item_left_img" src="images/second.png" width="20" height="25" alt />
      <img v-else-if="index == 2" key="2" class="rank_item_left_img" src="images/thirdly.png" width="20" height="25" alt />
      <div v-else class="item-left-num">{{ index + 1 }}</div>
    </div>
    <div class="rank_item_right">
      <div class="rank_item_right_combination_per">
        <div class="rank_item_right_combination">{{ item.group_name }}00</div>
        <div v-if="fieldEngName === 'popularity_rank'" class="pur pa">
          <div class="rank_man">{{ item.be_sub_num }}</div>
          <div class="rank_state">{{ item.field_detail || '被订阅' }}01</div>
        </div>
        <div v-else class="rank_item_right_per">{{ item | vG001(fieldEngName) }}02</div>
      </div>
      <div class="rank_item_right_competition">{{ item.act_name }}03</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rankItem",
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    },
    fieldEngName: {
      type: String
    }
  },
  filters: {
    /**
     *
     * @param {Object} item
     * @param {Array} tabList
     * @return {String}
     */
    vG001: function (item, field_eng_name) {

      function vFixedTwoB (value) {
        if (!value) {
          value = 0;
        }
        value = Number(value) * 100;
        if (value === 0) {
          return "0.00%";
        }
        return value > 0 ? "+" + parseFloat(value).toFixed(2) + "%" : parseFloat(value).toFixed(2) + "%";
      }
      let text;
      switch (field_eng_name) {
        case "profit_all":
          text = vFixedTwoB(item.total_yield);
          break;
        case "profit_near_month":
          text = vFixedTwoB(item.month_yield);
          break;
        case "profit_near_week":
          text = vFixedTwoB(item.week_yield);
          break;
        case "profit_near_day":
          text = vFixedTwoB(item.day_yield);
          break;
        case "popularity_rank":
          text = item.be_sub_num;
          break;
        case "deficit_rank":
          text = vFixedTwoB(item.total_yield);
          break;
        default:
          break;
      }
      return text;
    }
  },
  methods: {
    G001 (item, field_eng_name) {
      let text;
      switch (field_eng_name) {
        case "profit_all":
          text = item.total_yield;
          break;
        case "profit_near_month":
          text = item.month_yield;
          break;
        case "profit_near_week":
          text = item.week_yield;
          break;
        case "profit_near_day":
          text = item.day_yield;
          break;
        case "popularity_rank":
          text = item.be_sub_num;
          break;
        case "deficit_rank":
          text = item.total_yield;
          break;
        default:
          break;
      }
      return text;
    },
    itemClick (item) {
      this.$emit("allClick", item);
    }
  }
};
</script>
<style lang="scss">
.rank_item {
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #fff;
  height: 70px;
  align-items: center;
  padding: 0 15px;
  &_left {
    width: 20px;
    height: 25px;
    margin-right: 10px;
    font-size: 14px;
    color: #888;
    text-align: center;
  }
  &_right {
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 42px;
    flex-direction: column;
    justify-content: space-between;
    &_combination_per {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &_combination {
      font-size: 14px;
      color: #222;
    }
    &_per {
      // color: #FD4D5A;
      font-size: 16px;
    }
    &_competition {
      color: #888;
      font-size: 12px;
    }
  }
  .rank_man {
    font-size: 16px;
    color: #222;
    text-align: right;
    font-weight: 500;
  }
  .rank_state {
    font-size: 12px;
    color: #888;
    margin-top: 2px;
  }
  .pur {
    top: 0;
    right: 0;
  }
}
.rank_item:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #f0f0f0;
  transform: scale(1, 0.5);
}
</style>

