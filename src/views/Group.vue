<template>
  <div class="ct">
    <Contentu :data="listdata" />
  </div>
</template>

<script>
import Contentu from "@/components/Contentu";
import data from "../data/data";

export default {
  data() {
    return {
      listdata: data.group
    };
  },
  name: "group",
  components: {
    Contentu
  }
};
</script>

<style scoped lang="less">
@import "./../themes/base";
</style>
