<template>
  <div class="subs">
    <div class="subs_list">
      当前共订阅&nbsp;<span class="subs_list_number">{{total}}</span>&nbsp;个组合
    </div>
  </div>
</template>
<script>
export default {
  name: 'subs',
  components: {

  },
  data () {
    return {
      total: 3,
    }
  }
}
</script>
<style lang="scss">
.subs {
  width: 100%;
  &_list {
    height: 44px;
    font-size: 12px;
    display: flex;
    align-items: center;
    background: #fbfbfb;
    &_number {
      font-size: 16px;
      color: #fd4d5a;
    }
  }
}
</style>





