<!--
 * @Descripttion: 模拟炒股H5
 * @version: 1.0.0
 * @Author: konglingzhan
 * @Date: 2019-07-08 17:59:17
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-16 14:13:05
 -->
<template>
  <div class="login">
    <div class="login_top">
      <img src="images/home_practice.png" />
    </div>
    <van-cell-group>
      <van-field v-model="formData.username" label="手机号" placeholder="请输入手机号" clearable />
    </van-cell-group>
    <div class="login_btn">
      <van-button type="primary" class="login_btn__login" @click="login">互联网账号登录</van-button>
    </div>
  </div>
</template>

<script>
import { zztLoginByWebAccount, F700104, signOut } from "@/service/api.js";
export default {
  name: "Login",
  data () {
    return {
      test: {},
      list: [
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
      ],

      formData: {
        username: "13651076986",
        web_account: "100010255",
        acc_alias: "zzt_CSccCAIY"
      }
    };
  },
  methods: {
    // 互联网账号登录
    async login () {
      let result = await signOut({});
      if (result.data.code === 0) {
        const params = {
          mobile_tel: "13651076986",
          web_account: "100010255",
          acc_alias: "zzt_CSccCAIY",
          acc_sex: "男",
          channel_type: "2"
        };
        // 互联网账号登录
        let res = await zztLoginByWebAccount(params);
        if (res.data.code === 0) {
          this.$store.commit("SET_LOGIN_STATUS", "1"); // 设置登录状态
          let res = await this.$store.dispatch("getUserInfo", {
            channel_type: "2"
          }); // 获取个人信息并保存到vuex
          if (res.data.code === 0) {
            // 登录成功之后跳转到我的页面
            this.$router.push({
              name: "My"
            });
          }
        }
      }
    }
  }
};
</script>
<style lang="scss">
.login {
  &_top {
    display: flex;
    justify-content: center;
    padding: 50px 0px;
    img {
      width: 80px;
      height: 80px;
    }
  }
  &_btn {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    &__login {
      width: 260px;
    }
  }
}
</style>

