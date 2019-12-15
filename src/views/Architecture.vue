<template>
  <div class="ct">
    <Content :data="listdata" />
  </div>
</template>

<script>
import Content from "@/components/Content";
import data from "../data/data";
export default {
  data() {
    return {
      listdata: data.architecture
    };
  },
  name: "architecture",
  components: {
    Content
  }
};
</script>

<style lang="less" scoped>
@import "./../themes/base";
</style>
