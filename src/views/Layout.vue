<template>
  <div class="layout">
    <!-- <pub-header></pub-header> -->
    <pubHeader></pubHeader>
    <router-view />
  </div>
</template>

<script>
import PubHeader from '@/components/PubHeader.vue';
// import PubHeader from '@/components/Pubh.vue';
export default {
  name: "Layout",
  components: {
    PubHeader,
    // Pub
  },
  methods: {
    // goFind () {
    //   this.$router.push({
    //     name: 'Find'
    //   })
    // },
    // goActivity () {
    //   this.$router.push({
    //     name: 'Activity'
    //   })
    // },
    // goMy () {
    //   this.$router.push({
    //     name: "My"
    //   })
    // }
  }
}
</script>

<style lang="scss">
.layout {
  padding-top: 44px;
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    line-height: 88px;
    border-top: 1px solid #000;
  }
}
</style>
