<template>
  <div class="my">
    <div class="my_head_box">
      <div class="my_head">
        <div class="my_head_left">
          <img src="images/man1.png" alt />
          <span>{{name}}</span>
        </div>
        <div class="my_head_right">
          <div>
            <span>{{book}}</span>
            <span>订阅</span>
          </div>
          <div>
            <span>{{fans}}</span>
            <span>粉丝</span>
          </div>
        </div>
      </div>
      <div class="my_head_tip">
        <img src="images/icon_lb.png" alt />
        累计收益率最高组合：{{money}}
      </div>
    </div>

    <div class="my_list">
      <van-grid :column-num="3">
        <van-grid-item v-for="(item,index) in list" :key="index">
          <div class="my_list_wrap">
            <van-image class="img" :src="item.url" />
            <div class="my_list_box_n">{{item.name}}</div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="my_comb">
      <panel-header title="我的组合"></panel-header>
      <Comb></Comb>
    </div>
  </div>
</template>
<script>
import PanelHeader from "@/components/PanelHeader.vue";
import Comb from "@/components/Comb.vue";
import { zztLoginByWebAccount, F700104, F700116 } from "@/service/api.js";
export default {
  name: "My",
  components: {
    PanelHeader,
    Comb
  },
  data() {
    return {
      book: 999,
      fans: 999,
      name: "爱喝啤酒的狐狸",
      money: "2323.00%",
      combList: [],
      list: [
        {
          name: "模拟买入",
          url: "images/analog-buy.png"
        },
        {
          name: "模拟卖出",
          url: "images/analog-buy.png"
        },
        {
          name: "模拟炒股",
          url: "images/analog-buy.png"
        },
        {
          name: "模拟炒股",
          url: "images/analog-buy.png"
        },
        {
          name: "模拟炒股",
          url: "images/analog-buy.png"
        },
        {
          name: "模拟炒股",
          url: "images/analog-buy.png"
        }
      ],
      userInfo: [
        {
          username: "13651076986",
          web_account: "100010255",
          acc_alias: "zzt_CSccCAIY"
        },
        {
          username: "18656559672",
          web_account: "100010253",
          acc_alias: "zzt_PYHQSPYO"
        },
        {
          username: "18238816998",
          web_account: "100010414",
          acc_alias: "zzt_UIhjAGAO"
        },
        {
          username: "15718850981",
          web_account: "100010267",
          acc_alias: "zzt_FCHJBXUF"
        },
        {
          username: "13976375432",
          web_account: "100008878",
          acc_alias: "zzt_TeLRGYdh"
        },
        {
          username: "18520832806",
          web_account: "100008562",
          acc_alias: "zzt_hVMgeeET"
        },
        {
          username: "13018665910",
          web_account: "100006290",
          acc_alias: "zzt_hiDXDfeH"
        },
        {
          username: "18520832845",
          web_account: "100009646",
          acc_alias: "zzt_EJiTiiFb"
        },
        {
          username: "18520832809",
          web_account: "100008572",
          acc_alias: "zzt_BlcfBcZA"
        },
        {
          username: "18880007777",
          web_account: "100009640",
          acc_alias: "zzt_BPgLMPZU"
        },
        {
          username: "15808544666",
          web_account: "100009638",
          acc_alias: "zzt_ceJBGKMK"
        },
        {
          username: "12223334445",
          web_account: "100009637",
          acc_alias: "zzt_QfYSeVDb"
        },
        {
          username: "19990001111",
          web_account: "100009635",
          acc_alias: "zzt_bKOHCjGf"
        },

        {
          username: "37300770", // 关联资金账号37300770 pwd 123444
          web_account: "100004940",
          acc_alias: "zzt_lXWKTCeB"
        },
        {
          username: "16995862580",
          web_account: "100009562",
          acc_alias: "zzt_dMTTeBes"
        },
        {
          //  有奖励数据
          username: "18520832088",
          web_account: "100009373",
          acc_alias: "zzt_VhDSjRQh"
        },

        {
          username: "64975813564",
          web_account: "100009452",
          acc_alias: "zzt_YaXCWUIa"
        },
        {
          username: "99876487248",
          web_account: "100009454",
          acc_alias: "zzt_SaBFCEhf"
        },
        {
          username: "13048679548",
          web_account: "100009455",
          acc_alias: "zzt_gTOlcTih"
        },
        {
          username: "18520832801",
          web_account: "100008549",
          acc_alias: "zzt_bJlSiCKj"
        },
        {
          username: "13018777777",
          web_account: "100009127",
          acc_alias: "zzt_gcCHcWHi"
        },
        {
          username: "18520832088",
          web_account: "100009373",
          acc_alias: "zzt_VhDSjRQh"
        },
        {
          username: "13044444444",
          web_account: "100009479",
          acc_alias: "zzt_GOVOTeAa"
        },
        {
          username: "13055555555",
          web_account: "100009481",
          acc_alias: "zzt_LcDCCTKG"
        },
        {
          username: "18520832809",
          web_account: "100008572",
          acc_alias: "zzt_BlcfBcZA"
        },
        {
          username: "18520832802",
          web_account: "100008549",
          acc_alias: "zzt_bJISiCKj"
        },
        {
          username: "18520832898",
          web_account: "100002952",
          acc_alias: "zzt_HVYUbGfL"
        },
        {
          username: "18520832880",
          web_account: "100006550",
          acc_alias: "zzt_CPIcRNQO"
        },
        {
          username: "18520832881",
          web_account: "100009615",
          acc_alias: "zzt_XYHWTCMU"
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      Promise.all([
        this.F700116()
      ])
        .then(result => {
          console.log("请求成功=", result);
        })
        .catch(e => {
          console.log("请求失败=", e);
        });
    },

    // 获取我的组合
    async F700116() {
      // 获取保存在sessionStorage里面的缓存数据web_account;
      const web_account = sessionStorage.getItem('web_account');
      const params = {
        channel_type: "2",
        web_account: web_account,
        page: 1,
        size: 3
      };
      let res = await F700116(params);
      // let res = await F700116({channel_type: "2",web_account: web_account,page: 1,size: 3}); // 这里的传参数的形式和上面的方式是一样的（上面之所以提取出去是因为这样写的话参数太多了不好看）
      if (res.data.code === 0) {
        this.combList = res.data.data.data;
        return res;
      } else if (res.data.code === 100016) {
        this.combList = [];
      }
    }
  }
};
</script>
<style lang="scss">
.my {
  &_head_box {
    padding: 10px 26px 18px 15px;
    background-color: #fff;
  }
  &_head {
    height: 56px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_left {
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &_right {
      width: 79px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
      }
    }
    img {
      width: 56px;
      height: 56px;
      margin-right: 10px;
      border-radius: 28px;
      border: none;
      outline: none;
    }
  }
  &_head_tip {
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 13px;
      height: 11px;
      margin-right: 3px;
    }
  }
  &_list {
    background-color: #ffffff;
    margin-top: 10px;
    padding: 18px 15px 25px;
    padding: &_wrap {
      width: 95%;
      height: 80px;
      box-shadow: 0px 0px 10px 0px red;
    }
    &_box {
      width: 100px;
      height: 80px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 10px 0px rgba(218, 226, 229, 0.5);
    }
    img {
      width: 26px;
      height: 26px;
      margin-bottom: 8px;
    }
    &_n {
      width: 48px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
      line-height: 17px;
    }
  }
  &_comb {
    background-color: #fff;
    margin-top: 10px;
  }
}
</style>


