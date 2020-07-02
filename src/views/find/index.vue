<template>
  <div class="find">
    <!-- 新手练习场 -->
    <div class="find_practice">
      <panel-header title="新手练习场" :need-right-btn="false"></panel-header>
      <div class="find_practice_content">
        <div class="left">
          <img class="left_img" :src="practiceInfo.imgUrl" alt />
        </div>
        <div class="right">
          <div class="text1 right_t">{{practiceInfo.act_name}}</div>
          <div class="text2 right_des">在模拟练习体验真实操盘交易，提升您的炒股在模拟练习体验真实操盘交易，提升您的炒股在模拟练习体验真实操盘交易，提升您的炒股在模拟练习体验真实操盘</div>
          <div class="text2 right_num">{{practiceInfo.joinNumber}}人参赛</div>
        </div>
      </div>
    </div>

    <!-- 炒股大赛 -->
    <div class="find_cgds">
      <panel-header title="炒股大赛" @rightClick="cgdsMore"></panel-header>
      <template v-for="(item,index) in list">
        <cgds-item :key="index" :item="item"></cgds-item>
      </template>
      <div :class="{game_end:item.now_status === '2'}" class="find_cgds_content" v-for="(item,index) in list" :key="index">
        <div v-if="item.joinFlag === '0'" class="find_cgds_join">
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

    <!-- 模拟交易榜单 -->
    <div class="find_rank">
      <panel-header title="模拟交易榜单" @rightClick="mnjyMore"></panel-header>
      <template v-for="(item,index) in rankList">
        <rank-item :key="index" :index="index" :item="item" :field-eng-name="field_eng_name" @allClick="goCombinationDetail" />
      </template>
    </div>

    <!-- ad -->
    <div class="find_ad flex">
      <img class="find_ad_img" src="images/home_ad_left.png" alt @click="adClick(1)" />
      <img class="find_ad_img" src="images/home_ad_right.png" alt @click="adClick(2)" />
    </div>

    <!-- 热门分析 -->
    <div class="find_hot">
      <panel-header title="热门分析" :need-right-btn="hotList.length >= 5" @rightClick="hotMore" />
    </div>

  </div>

</template>

<script>
import { F700108, F700105, F700125, F700126 } from "@/service/api.js";
import PanelHeader from "@/components/PanelHeader.vue";
import RankItem from "@/components/RankItem.vue";
import CgdsItem from "@/components/CgdsItem.vue";
export default {
  name: "Find",
  components: {
    PanelHeader,
    RankItem,
    CgdsItem,
  },
  data () {
    return {
      hotList: [],
      field_eng_name: "profit_all", // 累计收益率
      rankIsEmpty: true,
      rankList: [],
      items: [
        {
          message: "bar",
          height: 123
        },
        {
          message: "fooo",
          height: 145
        }
      ],
      list: [
        // {
        //   imgUrl: "images/home_practice.png",
        //   act_name: "kkkkk",
        //   act_detail: "kkkkk",
        //   joinNumber: 1000,
        //   joinFlag: 1 // 0-参赛 1-未参赛
        // },
        // {
        //   imgUrl: "images/home_practice.png",
        //   act_name: "kkkkk",
        //   act_detail: "kkkkk",
        //   joinNumber: 1000,
        //   joinFlag: 0 // 0-参赛 1-未参赛
        // },
        // {
        //   imgUrl: "images/home_practice.png",
        //   act_name: "kkkkk",
        //   act_detail: "kkkkk",
        //   joinNumber: 1000,
        //   joinFlag: 1 // 0-参赛 1-未参赛
        // }
      ],
      practiceInfo: {}
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    hotMore () { },
    adClick (index) { },
    goCombinationDetail () {
      alert("kkk");
    },
    mnjyMore () {
      console.log("kkk");
    },
    cgdsMore (params) {
      console.log(params);
      // this.$router.push({
      //   name:'My'
      // })
    },
    init () {
      Promise.all([this.F700108(), this.F700105(), this.getRankList()])
        .then(result => {
          console.log("请求成功=", result);
        })
        .catch(e => {
          console.log("请求失败=", e);
        });
    },
    // 获取练习场信息
    async F700108 () {
      let res = await F700108({
        channel_type: "2",
        act_type_subset: "15",
        act_type: "0"
      });
      if (res.data.code === 0) {
        let practiceInfo = res.data.data[0];

        let { image_head_info, image } = practiceInfo;
        practiceInfo.imgUrl = image_head_info + image;

        this.practiceInfo = practiceInfo;
        return res;
      }
    },
    // 获取炒股大赛数据
    async F700105 () {
      let res = await F700105({
        channel_type: "2",
        act_type_subset: "15",
        act_type: "0"
      });
      if (res.data.code === 0) {
        this.list = res.data.data || [];
        return res;
      }
    },
    // 模拟交易榜单
    async getRankList () {
      const res = await F700125({ activity_no: "all", channel_type: "2" });
      if (res.data.code === 0) {
        let rule_no = this.filterIndexList(res.data.data.ruleSets, "profit_all")
          .rule_no;
        let index_no = this.filterIndexList(
          res.data.data.ruleSets,
          "profit_all"
        ).index_no;
        let act_together = res.data.data.totalBoardSet.act_together;
        const params = {
          page: "1",
          size: 6,
          rule_no: rule_no,
          index_no: index_no,
          act_together: act_together,
          channel_type: "2"
        };
        const resData = await F700126(params);
        if (resData.data.code === 0) {
          this.rankList = resData.data.data.data;
          return resData;
        } else if (resData.data.code === 10003) {
          this.rankIsEmpty = true;
        }
      } else if (res.data.code === 100026) {
        this.rankIsEmpty = true;
      }
    },
    // 筛选指标 return object
    filterIndexList (indexList, field_eng_name) {
      return indexList.filter(
        item => item.field_eng_name === field_eng_name
      )[0];
    }
  }
};
</script>

<style lang="scss">
.find {
  &_practice {
    background-color: #fff;
    &_content {
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
  }
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
  &_rank {
    margin-top: 15px;
    background-color: #fff;
  }
  &_ad {
    display: flex;
    height: 90px;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    &_img {
      width: 172px;
      height: 70px;
    }
  }
  &_hot {
    background-color: #fff;
    &_follow {
      padding: 25px 20px 30px;
      &_tips {
        font-size: 14px;
        color: #222;
      }
      &_btns {
        margin-top: 20px;
        font-size: 15px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        .van-button {
          padding: 0 10px;
          border: none !important;
        }
        &_left {
          background-color: #ff831f !important;
        }
      }
    }
    &_top {
      height: 44px;
      background-color: #fbfbfb;
      align-items: center;
      font-size: 12px;
      color: #888;
      padding: 0 15px;
      span {
        flex: 1;
      }
      span:nth-child(1) {
        flex: 1.3;
      }
      span:nth-child(2) {
        text-align: center;
      }
      span:nth-child(3) {
        text-align: center;
      }
      span:nth-child(4) {
        text-align: right;
      }
    }
  }
  .game_end {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    // ios 解决-webkit-filter:grayscale(100%)在retina下的模糊问题
  }
}
</style>

