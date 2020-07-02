<template>
  <div class="pub_header">
    <div class="pub_header_back">
      <img class="pub_header_back_img" src="images/back.png" alt />
    </div>
    <div class="pub_header_btn">
      <div @click="itemClick('1')" class="btn" :class="{btn_active:currentIndex === '1'}">发现</div>
      <div @click="itemClick('2')" class="btn" :class="{btn_active:currentIndex === '2'}">我的</div>
    </div>
    <div class="pub_header_share">
      <img class="pub_header_share_img" src="images/share_icon.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Pub",
  data () {
    return {
      currentIndex: "1"
    }
  },
  methods: {
    itemClick (currentIndex) {
      this.currentIndex = currentIndex;
      if (currentIndex === "1") {
        this.$router.push({
          name: "Find"
        });
      } else if (currentIndex === "2") {
        this.$router.push({
          name: "My"
        })
      }

    }
  }
}
</script>


<style lang="scss">
.pub_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #3b7be6;
  padding: 0px 15px 0 10px;
  height: 44px;
  color: #fff;
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