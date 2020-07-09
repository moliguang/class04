<template>
  <div class="comb">
    <div class="comb_a">{{item.group_name}}</div>
    <div class="comb_b">{{item.act_name}}</div>
    <div class="comb_c">
      <div>
        <span>今日收益率</span>
        <span>{{item | vG001("profit_near_day")}}</span>

      </div>
      <div class="comb_c_l">
        <span>累计收益率</span>
        <span>{{item | vG001("profit_all")}}</span>
      </div>
      <div class="comb_c_b"></div>
      <div>
        <span class="comb_c_p">累计收益排名</span>
        <div v-if="item.rank === 0 && item.total === 0" class="size-14">--</div>
        <div v-else class="size-14">{{ item.rank === 0 ? '-' : item.rank }}/{{ item.total }}</div>
      </div>
    </div>
    <div v-show="item.activity_end_flag === '2'" class="comb_d">
      <img src="images/game-end.png">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Comb',
  props: {
    // ming: {
    //   type: String,
    //   default: '科技券商',
    // },
    item: {
      type: Object,
      default: () => {
        return {
          // act_id: 111,
          // act_name: "1-0-1练习赛",
          // act_a: "10%",
          // act_b: "200%",
          // act_c: 2,
        }
      }
    },
  },

}
</script>
<style lang="scss">
.comb {
  position: relative;
  margin: 15px;
  margin-top: 0px;
  width: 345px;
  height: 125px;
  background: rgba(247, 248, 250, 1);
  border-radius: 3px;
  &_a {
    padding-left: 10px;
    padding-top: 15px;
    display: flex;
    width: 70px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
    padding-bottom: 10px;
  }
  &_b {
    padding-left: 10px;
    display: flex;

    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: red;
    line-height: 17px;
    padding-bottom: 15px;
  }
  &_c {
    height: 46px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    &_l {
      margin-left: 40px;
    }
    &_b {
      position: absolute;
      right: 100px;
      background-color: #d5d9e0;
      height: 30px;
      width: 1px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      span {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(34, 34, 34, 1);
        line-height: 17px;
      }
    }
  }
  &_d {
    position: absolute;
    left: 216px;
    top: 10px;
  }
}
</style>


