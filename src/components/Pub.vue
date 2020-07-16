<template>
  <div class="pub_header_container">
    <!-- <div style="height:100px;width:375px;background:red;" /> -->
    <div class="pub_header">
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft($event)" @click-right="onClickRight">
        <div v-if="needDefineTitle" slot="title" class="pub_header_title">
          <slot />
        </div>
        <div v-else-if="isHasTitleSlot" slot="title" class="pub_header_title">
          <van-button v-for="(item,index) in navList" :key="index" v-td="index === 0 ? {tdEventId:$tdEJson.HEm01001001.tdEventId,tdLabel:$tdEJson.HEm01001001.tdLabel} : {tdEventId:$tdEJson.HEm02001001.tdEventId,tdLabel:$tdEJson.HEm02001001.tdLabel}" :class="{is_active:currentIndex == index}" @click="tab(index)">{{ item.name }}</van-button>
        </div>
        <div v-if="isHasShare" slot="right" class="pub_header_right flex">
          <img class="pub_header_right_img" src="images/share_icon.png" alt />
        </div>
      </van-nav-bar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { jumpAppLogin1, jumpAppLogin3, Nl0002 } from "@/utils/zztUrl.js";
import { objChangeParam, changeCreateURL, p001 } from "@/utils/publicUtil";
// import { setSesStorage } from '@/utils/storageUtil'
let env = process.env.NODE_ENV; // 环境判断
export default {
  name: "pubHeader",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    isHasShare: {
      type: Boolean,
      default: true
    },
    isOnBack: {
      type: Boolean,
      default: false
    },
    isHasTitleSlot: {
      type: Boolean,
      default: false
    },
    needDefineTitle: {
      type: Boolean,
      default: false
    },
    leftArrow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      active: 0,
      navList: [
        {
          name: "发现"
        },
        {
          name: "我的"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["currentRouterPath", "currentIndex"])
  },
  methods: {
    tab (index) {
      // env === 'development'
      if (env === "development") {
        this.$store.commit("routerInfo/SET_CURRENT_INDEX", index);
        // 开发环境
        let appLoginStatus = this.$store.getters.appLoginStatus;
        if (
          (appLoginStatus === "0" || appLoginStatus === "3") &&
          this.$store.getters.currentIndex === "1"
        ) {
          this.$push("/login");
        } else {
          if (index === 0) {
            this.$replace({
              name: "mainHome"
            });
          } else if (index === 1) {
            this.$replace({
              name: "mainHome",
              query: {
                isOther: "1"
              }
            });
          }
        }
      } else {
        // 生产环境
        let appLoginStatus = this.$store.getters.appLoginStatus;
        if (appLoginStatus === "0" || appLoginStatus === "3") {
          // 未登陆
          this.$store.commit("user/SET_LOGIN_KEY", "1");
          if (this.$store.getters.getLocalType.type === "Android") {
            jumpAppLogin3();
          } else if (this.$store.getters.getLocalType.type === "ios") {
            jumpAppLogin1();
          }
        } else {
          // 已登陆
          this.$store.commit("routerInfo/SET_CURRENT_INDEX", index);
          if (index === 0) {
            this.$replace({
              name: "mainHome"
            });
          } else if (index === 1) {
            this.$replace({
              name: "mainHome",
              query: {
                isOther: "1"
              }
            });
          }
        }
      }
    },

    onClickLeft () {
      if (this.isOnBack === true) {
        this.$emit("leftClick");
      } else {
        let queryObj = p001();
        if (queryObj.enterInfo === "1") {
          // 从分享引导到掌中投
          this.$replace({
            name: "mainHome"
          });
        } else {
          this.$store.commit("routerInfo/SET_IS_BACK", true);
          if (this.$store.getters.getLocalType.type === "Android") {
            if (window.history.length === 1) {
              // 解决首次进入H5，随便进入一个子页面，点击H5返回无效
              Nl0002();
            } else {
              this.$router.back();
            }
          } else {
            this.$router.back();
          }
        }
      }
    },
    onClickRight () {
      this.shareEvent();
      this.tdEvent();
    },
    // 事件埋点
    tdEvent () {
      // this.$attrs;
      // debugger;
      this.$onTdEvent(this.$tdEJson.HEm05001001.tdEventId, this.$attrs.tdLabel);
    },
    shareEvent () {
      const pathQuery = this.$route.query; // 路径参数
      let param = {}; // 分享对象
      // share参数  代指是否在掌中投执行 0 是在qq或者微信状态下 1 是在浏览器上
      if (!pathQuery.hasOwnProperty("share")) {
        // 不是分享模式下
        param = {
          title: "民间高手，实力邀战！",
          message: "你的好友正在掌中投模拟大赛竞技，关注TA的动态",
          img_url: encodeURIComponent(
            `${process.env.VUE_APP_HTTP_LOGO}/logo.png`
          ),
          url: encodeURIComponent(changeCreateURL({ share: 0 }))
        };
        window.location.href = objChangeParam(
          param,
          "&&",
          "http://action:10055/"
        );
      }
    }
  }
};
</script>
<style lang="scss">
.pub_header_container {
  position: relative;
  height: 46px;
  .van-button:first-child {
    border-right-width: 0;
  }
  .van-button:last-child {
    border-left-width: 0;
  }
}
.pub_header {
  // overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding-right: constant(safe-area-inset-right);
  padding-left: constant(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-left: env(safe-area-inset-left);

  &_right {
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: flex-end;
    &_img {
      width: 24px;
      height: 24px;
    }
  }
  .van-button--default {
    width: 56px;
    height: 28px;
    line-height: 28px;
    background-color: transparent;
    color: #fff;
  }
  .van-button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .van-button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .is_active {
    background-color: #fff;
    color: #3b7be6;
  }
  .van-nav-bar__title {
    color: #fff;
    background: #3b7be6;
  }
  .van-dropdown-menu {
    background: transparent;
  }
  .van-nav-bar__arrow {
    font-size: 26px;
  }
}
</style>
