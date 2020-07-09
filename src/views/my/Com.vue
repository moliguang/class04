<template>
  <div class="com">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <template v-for="(item,index) in list">
        <cgds-item :key="index" :item="item"></cgds-item>
      </template>
    </van-list>
  </div>
</template>
<script>
import CgdsItem from "@/components/CgdsItem.vue";
import { F700105 } from "@/service/api.js";
export default {
  name: "Com",
  components: {
    Com
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 0,
      size: 2,
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    init () { },
    onLoad () {
      this.page++;
      this.F700105();
    },
    async F700105 () {
      let res = await F700105({
        channel_type: "2",
        act_type_subset: "15",
        act_type: "0"
      });
      if (res.data.code === 0) {
        this.list = res.data.data || [];
        return res;
      }
    },


  }
}
</script>


      