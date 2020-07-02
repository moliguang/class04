<template>
  <div class="pannel_header">
    <div class="title">{{title}}</div>
    <div v-if="needRightBtn" @click="rightClick" class="more">{{rightText}}</div>
  </div>
</template>
<script>
export default {
  name: 'PannelHeader',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    rightText: {
      type: String,
      default: '更多'
    },
    needRightBtn: {
      type: Boolean,
      default: () => {
        return true;
      }
    }
  },
  methods: {
    rightClick () {
      let params = {
        name: 'ggggg'
      }

      this.$emit('rightClick', params)
    }
  }
}
</script>
<style lang="scss">
.pannel_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 15px;
  .title {
    height: 22px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
  }
  .more {
    width: 28px;
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(59, 123, 230, 1);
  }
}
</style>