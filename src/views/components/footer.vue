
<template>
  <!-- 建立组件思维，把layout.vue里面的footer组件抽离出来 -->
  <div class="pub_footer">
    <div @click="itemClick(item.id)" v-for="(item,index) in list" :key="index">
      {{item.name}}
    </div>
    <!-- <div>发现</div>
    <div>活动</div>
    <div>我的</div> -->
  </div>
</template>
<script>
export default {
  name: "PubFooter",
  data () {
    return {
      list: [
        {
          name: '发现',
          id: 1
        },
        {
          name: '活动',
          id: 2
        },
        {
          name: '我的',
          id: 3
        }
      ]
    }
  },
  methods: {
    itemClick (id) {
      if (id === 1) {
        this.$router.push({
          name: 'Find'
        })
      } else if (id === 2) {
        this.$router.push({
          name: 'Activity'
        })
      } else if (id === 3) {
        this.$router.push({
          name: 'My'
        })
      }
    }
  }
};
</script>
<style lang="scss">
.pub_footer {
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  line-height: 88px;
  bottom: 0;
  left: 0;
  border-top: 1px solid #000;
}
</style>