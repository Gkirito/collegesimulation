<template>
  <div class="ct">
    <Descript />
    <Create />
    <Competition />
  </div>
</template>

<script>
// @ is an alias to /src

import Descript from "../components/Descript";
import Create from "../components/Create";
import Competition from "../components/Competition";
export default {
  name: "index",
  components: { Competition, Create, Descript }
};
</script>

<style lang="less" scoped>
@import "../themes/base";
</style>
