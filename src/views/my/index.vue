<template>
  <div class="my">

    <div class="my_head_box">
      <div class="my_head">
        <div class="my_head_left">
          <img :src="comlist.acc_image_path" />
          <span>{{comlist.acc_alias}}</span>
        </div>
        <div class="my_head_right">
          <div @click="subs">
            <span>{{comlist.subscr_num}}</span>
            <span>订阅</span>
          </div>
          <div @click="fan">
            <span>{{comlist.follower_num}}</span>
            <span>粉丝</span>
          </div>
        </div>
      </div>
      <div class="my_head_tip">
        <img src="images/icon_lb.png" alt />
        累计收益率最高组合：{{comlist.group_name}} {{comlist | vG001("profit_all")}}
      </div>
    </div>

    <div class="my_list">
      <div v-for="(item,index) in list" :key="index" class="my_list_box">
        <img :src="item.url">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="my_com">
      <panel-header title="我的组合" @rightClick="combMore"></panel-header>

      <template v-for="(item,index) in combList">
        <comb :key="index" :item="item" />
      </template>

    </div>
    <div class="my_index-invitation">
      <div v-for="(item, index) in data" :key="index" class="my_index-invitation_wrap" :style="{ background: item.bgcolor}" @click="jumpDetail(item)">
        <img :src="item.icon">
        <span class="my_index-invitation_wrap__label">{{ item.label }}</span>
        <span class="my_index-invitation_wrap__desc">{{ item.desc }}</span>
      </div>
    </div>

  </div>
</template>
<script>
import { zztLoginByWebAccount, F700104, F700116, F700113, } from "@/service/api.js";
import PanelHeader from "@/components/PanelHeader.vue";
import Comb from "@/components/Comb.vue";
import Conten from "@/components/Conten.vue";
export default {
  name: "My",
  components: {
    PanelHeader,
    Comb,
    Conten,
  },
  data () {
    return {
      data: [{
        label: '邀请好友',
        value: 'invitation',
        desc: '邀请好友获大礼',
        icon: 'images/invitation.png',
        bgcolor: '#FFF5EE'
      }, {
        label: '我的奖励',
        value: 'reward',
        desc: '活动奖品记录',
        icon: 'images/reward.png',
        bgcolor: '#EDF3FE'
      }, {
        label: '我的积分',
        value: 'integral',
        desc: '查看获取积分',
        icon: 'images/integral.png',
        bgcolor: '#FCF1F9'
      }],

      book: 999,
      fans: 999,
      name: "爱喝啤酒的狐狸",
      money: "2323.00%",
      combList: [],
      comlist: [],
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



  mounted () {
    this.init();
  },
  methods: {
    subs () {
      this.$router.push({
        name: "Subs"
      })
    },
    fan () {
      this.$router.push({
        name: "Fans"
      })
    },

    combMore () {
      this.$router.push({
        name: "CombList"
      })
    },

    init () {
      let a = [1, 2];
      let b = [3, 4];
      a = a.concat(b);
      console.log(a)

      Promise.all([
        this.F700116(), this.F700113(),
      ])
        .then(result => {
          console.log("请求成功=", result);
        })
        .catch(e => {
          console.log("请求失败=", e);
        });
    },
    // 获取我的组合
    async F700113 () {
      // const web_account = sessionStorage.getItem('web_account');
      const { web_account } = this.$store.getters.getUserInfo;
      const params = {
        channel_type: "2",
        target_web_account: web_account,
      };
      let res = await F700113(params);
      if (res.data.code === 0) {
        this.comlist = res.data.data;
      }
    },
    async F700116 () {
      //获取保存在sessionStorage里面缓存的数据web_account;
      // const web_account = sessionStorage.getItem('web_account');
      const { web_account } = this.$store.getters.getUserInfo;
      const params = {
        channel_type: "2",
        web_account: web_account,
        page: 1,
        size: 3,
      };
      let res = await F700116(params);
      // let res = await F700116({channel_type: "2",web_account: web_account,page: 1,size: 3}); // 这里的传参
      if (res.data.code === 0) {
        this.combList = res.data.data.data;
        return res;
      } else if (res.data.code === 100016) {
        this.combList = [];
      }
    },
    //账户信息
    async ztLoginByWebAccount () {
      let res = await ztLoginByWebAccount({
        channel_type: "2",
        web_account: "",
        target_web_account: "",
        acc_alias: "",
      });
      if (res.data.code === 0) {
        this.list = res.data.data || [];
        return res;
      }
    },
  }
}

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
    width: 100%;
    height: 218px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-top: 10px;
    &_box {
      display: flex;
      width: calc(33.33% - 11.5px);
      height: 80px;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 10px 0px rgba(218, 226, 229, 0.5);
      img {
        width: 26px;
        height: 26px;
      }
      span {
        padding-top: 9px;
        font-size: 12px;
        color: #222;
      }
    }
  }
  &_com {
    background-color: #fff;
    margin-top: 10px;
  }
  &_index-invitation {
    width: 100%;
    background: #fff;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
    &_wrap {
      display: flex;
      flex-direction: column;
      width: 100px;
      height: 110px;
      align-items: center;
      justify-content: center;
      img {
        width: 47px;
        height: 41px;
      }
      span {
        font-family: PingFangSC-Regular;
      }
      &__label {
        font-size: 16px;
        color: #f1710a;
        padding-top: 9px;
      }
      &__desc {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>


