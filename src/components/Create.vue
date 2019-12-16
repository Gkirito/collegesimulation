<template>
  <div class="create-frame">
    <div class="create-title">
      <span>网络渗透</span>创新工场
      <a-divider class="divider"
        >◆ NETWORK PENETRATION INNOVATION WORKS ◆</a-divider
      >
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { Divider } from "ant-design-vue";
export default {
  name: "create",
  components: {
    ADivider: Divider
  }
};
</script>

<style scoped lang="less">
@import "../themes/base";
.create-frame {
}
span {
  color: coral;
}
.create-title {
  padding: 0 3em 0 3em;
  font-family: "Heiti SC";
  font-weight: bold;
  font-size: 3.5em;
  color: white;
}
.divider {
  color: white;
}
</style>
