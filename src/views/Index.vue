<template>
  <div class="ct">
    <Descript />
    <Create/>
  </div>
</template>

<script>
// @ is an alias to /src

import Descript from "../components/Descript";
import Create from "../components/Create";
export default {
  name: "index",
  components: {Create, Descript }
};
</script>

<style lang="less" scoped>
@import "../themes/base";
</style>
