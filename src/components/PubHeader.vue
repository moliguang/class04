<template>
  <div class="pub_header">
    <div class="pub_header_back" @click="back">
      <img class="pub_header_back_img" src="images/back.png" alt />
    </div>
    <div class="pub_header_btn" v-if="currentPath === '/find' || currentPath === '/my' ">
      <div @click="itemClick('/find')" class="btn" :class="{btn_active:currentPath === '/find'}">发现</div>
      <div @click="itemClick('/my')" class="btn" :class="{btn_active:currentPath === '/my'}">我的</div>
    </div>
    <div class="title" v-else>
      {{ title }}
    </div>
    <div class="pub_header_share">
      <img class="pub_header_share_img" src="images/share_icon.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "PubHeader",
  data () {
    return {
      path: "/find"
    };
  },
  computed: {
    currentPath () {
      return this.$route.path;
    },
    title () {
      return this.$store.getters.title;
    }
  },
  methods: {
    back () {
      this.$router.back();
    },
    itemClick (toPath) {

      const { path } = this.$route;
      if (path === toPath) {
        // debugger;
        return false;
      } else {
        // debugger;
        if (toPath === '/my') {
          const { loginStatus } = this.$store.getters;
          if (loginStatus === '0') {
            // 未登录
            this.$router.push({
              name: "Login"
            })
          } else {
            this.$router.push({
              name: "My"
            })
          }
        } else if (toPath === '/find') {
          this.$router.push({
            name: "Find"
          });
        }
      }
    }
  }
};
</script>

<style lang="scss">
.pub_header {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #3b7be6;
  padding: 0px 15px 0 10px;
  height: 44px;
  color: #fff;
  .title{
    color: #fff;
    font-size: 18px;
  }
  &_back {
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &_img {
      width: 16px;
      height: 24px;
    }
  }
  &_btn {
    display: flex;
    flex-direction: row;
    justify-self: center;
    .btn {
      width: 56px;
      height: 28px;
      text-align: center;
      border: 1px solid #fff;
      border-right: none;
      box-sizing: border-box;
      line-height: 28px;
    }
    .btn:nth-of-type(2) {
      border-left: none;
      border-right: 1px solid #fff;
    }
    .btn_active {
      background-color: #fff;
      color: #3b7be6;
    }
  }
  &_share {
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &_img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>