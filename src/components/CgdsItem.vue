<template>
  <div class="cgds_item">
        <!-- v-for="(item,index) in list" -->

    <div
        :class="{game_end:item.now_status === '2'}"
        class="cgds_item_cgds_content"
      >
        <div v-if="item.joinFlag === '0'" class="cgds_item_cgds_join">
          <img class="find_cgds_join_img" src="images/competition_join.png" alt />
        </div>
        <div class="left">
          <img class="left_img" :src="item.image_head_info + item.image" alt />
        </div>
        <div class="right">
          <div class="text1 right_t">{{item.act_name}}</div>
          <div class="text2 right_des">{{item.act_detail}}</div>
          <div class="text2 right_num">
            {{item.joinNumber}}人参赛
            <div class="clock">
              <div class="clock_box">
                <img class="clock_img" src="images/icon_clock.png" alt />
                <div>{{ item.enter_begin_date }}-{{ item.activity_end_date }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'CgdsItem',
  props:{
    item:{
      type:Object,
      default:() => {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
.cgds_item{
  &_cgds {
    margin-top: 15px;
    background-color: #fff;
    .right_num {
      position: relative;
    }
    .clock {
      position: absolute;
      top: 0;
      right: 0;
      &_box {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .clock_img {
        width: 13px;
        height: 13px;
        margin-right: 4px;
      }
    }
    &_content {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 0 15px;
      align-items: center;
      justify-content: space-between;
      height: 90px;
      .left {
        margin-right: 10px;
        &_img {
          width: 60px;
          height: 60px;
        }
      }
      .right {
        &_t {
          margin-bottom: 3px;
        }
        &_des {
          width: 275px;
          margin-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .text1 {
          font-size: 14px;
          font-weight: 500;
          color: rgba(34, 34, 34, 1);
          line-height: 20px;
        }
        .text2 {
          font-size: 12px;
          font-weight: 400;
          color: rgba(136, 136, 136, 1);
          line-height: 16px;
        }
      }
    }
    &_join {
      position: absolute;
      top: 0;
      right: 0;
      &_img {
        width: 54px;
        height: 48px;
      }
    }
  }
}
</style>