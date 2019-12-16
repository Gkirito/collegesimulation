<template>
  <div class="frame">
    <a-row>
      <a-col :span="12">
        <div class="description-right">
          <iframe
            src="//player.bilibili.com/player.html?aid=69783568&cid=120927380&page=1"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
            width="530em"
            height="360em"
          >
          </iframe>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="description-left">
          <div class="title-top">基于云平台的网络渗透虚拟仿真实验</div>
          <div class="description-content">
            所属分类：网络安全
          </div>
          <div class="description-content">
            <a-row>
              <a-col :span="12">
                实验学时：3<br />
                实验项目负责人：张海平
              </a-col>
              <a-col :span="12">
                实验操作步数：12<br />
                联系电话：0571-58619115
              </a-col>
            </a-row>
          </div>
          <div class="description-content">
            实验简介：渗透测试是指渗透人员在不同的位置（比如从内网、从外网等位置）利用各种手段对某个特定网络进行测试，以期发现和挖掘系统中存在的漏洞，然后输出渗透测试报告，并提交给网络所有者。
          </div>
          <div class="button-index">
            <a-button type="primary">操作手册</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Col, Row, Button } from "ant-design-vue";

export default {
  name: "descript",
  components: {
    ARow: Row,
    ACol: Col,
    AButton: Button
  }
};
</script>

<style scoped lang="less">
@import "../themes/base";
.frame {
  padding: 2em;
  background-color: rgba(15, 14, 15, 0.91);
  border: #8c8c8c 1px solid;
  border-radius: 10px;
}
.description-right {
  text-align: left;
  padding-right: 1em;
}
.description-left {
  text-align: left;
  padding-left: 1em;
  color: white;
}
.title-top {
  padding-left: 0.7em;
  line-height: 1.2em;
  border-left: 4px solid #ffa200;
  font-family: "Songti SC";
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 1.5em;
}
.description-content {
  font-weight: bold;
  margin-top: 1em;
  font-size: 1.2em;
  font-family: "Songti SC";
}
    .button-index {
        padding-top: 2.5em;
        font-size: 1em;
    }
</style>
