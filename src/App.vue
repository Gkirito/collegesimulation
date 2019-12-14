<template>
  <div id="app">
    <div id="components-layout-demo-basic">
      <a-layout>
        <a-layout-header><Topbar /></a-layout-header>
        <a-layout-content><router-view /></a-layout-content>
        <a-layout-footer><Footerbar /></a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<style lang="less">
@import "./themes/base.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
}
#components-layout-demo-basic .ant-layout-header {
  height: auto;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: rgb(255, 255, 255);
  /*color: #fff;*/
}
</style>

<script>
import Topbar from "./components/TopBar";
import { Layout } from "ant-design-vue";

export default {
  components: {
    Topbar,
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    ALayoutFooter: Layout.Footer
  }
};
</script>
