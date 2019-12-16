<template>
  <div class="top-tool-bar">
    <div class="logo">
      <img
        src="./../assets/logo.png"
        alt="college logo"
        width="550em"
        height="100em"
      />
    </div>
    <div class="router">
      <div class="route">
        <router-link to="/">网站首页</router-link>
        <router-link to="/description">实验教学项目描述</router-link>
        <router-link to="/group">实验项目教学服务团队</router-link>
        <router-link to="/requirements">网络相关要求</router-link>
        <router-link to="/architecture">项目架构及研发技术</router-link>
        <router-link to="/features">实验教学项目特色</router-link>
        <router-link to="/plan">持续建设服务计划</router-link>
      </div>
    </div>
    <div class="title">
      基于云平台的网络渗透虚拟仿真实验
    </div>
  </div>
</template>

<script>
// import { Row, Col } from "ant-design-vue";

export default {
  name: "topbar",
  components: {
    // AButton: Button,
    // ARow: Row,
    // ACol: Col
  }
};
</script>

<style scoped lang="less">
@import "./../themes/base.less";
.top-tool-bar {
  margin: 0 auto;
  max-width: @base-width;
  min-width: @base-width;
}
.logo {
  text-align: left;
  margin-top: 1em;
}
.title {
  font-family: "Songti SC";
  font-weight: bold;
  margin: 10% 0 10% 0;
  font-size: 4.8em;
  color: white;
}
.router {
  margin-top: 1em;
  height: 50px;
  overflow: hidden;
  display: block;
  background: url("../assets/nav.png") no-repeat;
  text-align: center;
}
.route {
  margin-top: -0.5%;
  height: 50px;
}
.router a {
  padding-left: 1.1em;
  color: #ffffff;
  font-size: 1.3em;
}
</style>
