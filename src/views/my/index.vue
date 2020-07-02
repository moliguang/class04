<template>
  <div class="my">
    <div>123</div>
    <div class="bg">{{count}}</div>
    <div>
      {{(count + 1)*10}}
      {{co - 1}}

    </div>
    <div v-html="template">
      {{template}}
    </div>
    <div>

      <div>
        <a :href="url">百度</a>
      </div>
      <a :href="url1">慕课</a>
      <button type="button" v-on:click="submit">+1</button>
      <button type="button" @click="st">-1</button>
    </div>
    <van-button type="danger">危险</van-button>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">请勿退出页面</van-popup>
    <van-button loading type="info" loading-text="加载中..." />
  </div>

</template>
<script>
export default {
  name: 'My',
  data () {
    return {
      show: false,
      co: 10,
      count: 0,
      template: '<div>do not quit</div>',
      url: 'http://www.baidu.com',
      url1: 'http://imooc.com'
    }
  },
  methods: {
    st: function () {
      this.co
    },
    submit: function () {
      this.count++
    },
    showPopup () {
      this.show = true;
    },

  }

}
</script>
<style>
.my {
  color: red;
}
</style>


