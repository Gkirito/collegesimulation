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
      listdata: data.architecture
    };
  },
  name: "architecture",
  components: {
    Contentu
  }
};
</script>

<style lang="less" scoped>
@import "./../themes/base";
</style>
