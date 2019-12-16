<template>
  <div class="ct">
    <Descript />
  </div>
</template>

<script>
// @ is an alias to /src

import Descript from "../components/Descript";
export default {
  name: "index",
  components: { Descript }
};
</script>

<style lang="less" scoped>
@import "../themes/base";
</style>
