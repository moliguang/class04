<template>
  <div class="empty flex">
    <img class="empty_img" src="images/nodata.png" alt="">
    <span v-if="!needDefineText" class="empty_text">{{ emptyText }}</span>
    <div class="empty_slot_wrap">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Empty',
  props: {
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    needDefineText: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.empty {
  display: flex;
  background-color: #fff;
  height: 278px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &_slot_wrap {
    margin-top: 40px;
  }
  &_img {
    width: 128px;
    height: 78px;
  }
  &_text {
    margin-top: 40px;
    font-size: 14px;
    color: #888;
  }
}
</style>