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
#components-layout-demo-basic .ant-layout-content,
#components-layout-demo-basic .ant-layout-footer {
  background: url("./assets/back.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  /*color: #fff;*/
}
#components-layout-demo-basic {
  a {
    text-decoration: none;
    font-weight: bold;
    &.router-link-exact-active {
      color: rgba(235, 250, 16, 0.97);
    }
  }
}
.ant-layout-footer {
  width: 100%;
  padding: 1em 0 0 0;
}
</style>

<script>
import Topbar from "./components/TopBar";
import Footerbar from "./components/Footerbar";
import { Layout } from "ant-design-vue";

export default {
  components: {
    Footerbar,
    Topbar,
    ALayout: Layout,
    ALayoutHeader: Layout.Header,
    ALayoutContent: Layout.Content,
    ALayoutFooter: Layout.Footer
  }
};
</script>
