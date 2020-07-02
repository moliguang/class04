<template>
  <div class="activity">
    this is activity page
    <div>
      <div class="my">{{myname}}</div>
      <img src="images/banner.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data () {
    return {
      myname:"konglingzhan"
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.activity {
  .my{
    width: 375px;
  }
}
</style>
