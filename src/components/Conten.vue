<template>
  <div class="conten">
    {{name}}
  </div>
</template>
<script>
export default {
  name: 'Conten',
  props: {
    name: {
      type: String,
      default: 'baba'
    }
  }
}

</script>
<style lang="scss">
.conten {
  color: red;
  font-size: 40px;
}
</style>


