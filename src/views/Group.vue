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
      listdata: data.group
    };
  },
  name: "group",
  components: {
    Content
  }
};
</script>

<style scoped lang="less">
@import "./../themes/base";
</style>
