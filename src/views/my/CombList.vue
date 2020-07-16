<template>
  <div class="comb_list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <template v-for="(item,index) in list">
        <comb :item="item" :key="index"></comb>
      </template>
    </van-list>
  </div>
</template>
<script>
import Comb from "@/components/Comb.vue";
import { F700116 } from "@/service/api.js";
export default {
  name: "CombList",
  components: { Comb },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 0,
      size: 3,
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    init () { },
    onLoad () {
      this.page++;
      this.F700116();
    },
    // 获取我的组合
    async F700116 () {
      // 获取保存在sessionStorage里面的缓存数据web_account;
      // const web_account = sessionStorage.getItem("web_account");
      const { web_account } = this.$store.getters.getUserInfo;
      const params = {
        channel_type: "2",
        web_account: web_account,
        page: this.page,
        size: this.size
      };
      let res = await F700116(params);
      if (res.data.code === 0) {
        let list = res.data.data.data || [];
        this.list = this.list.concat(list);
        console.count("加载");
        console.log(this.list);
        // 数组合并，常常用于页面加载
        this.loading = false;
      } else if (res.data.code === 100016) {
        // 已全部加载完

        this.finished = true;
      }
    }
  }
};
</script>
<style lang="scss">
.comb_list {
}
</style>