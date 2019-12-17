<template>
  <div class="create-frame">
    <div class="create-title">
      <span>网络渗透</span>创新工场
      <a-divider class="divider"
        >◆ NETWORK PENETRATION INNOVATION WORKS ◆</a-divider
      >
    </div>
    <div class="outside-third">
      <div class="outside-second">
        <div class="outside-first">
          <a-row>
            <a-col :span="10">
              <div>
                <a-row>
                  <a-col :span="18">
                    <div class="title-top">
                      实验课件资料
                      <span class="little-title">COURSEWARE DATA</span>
                    </div>
                  </a-col>
                  <a-col :span="6">
                    <div class="title-right">
                      查看更多
                      <a-icon type="plus-circle" />
                    </div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="18">
                    <div class="content-text-left">
                      <a-icon type="folder-open" />
                      资料1
                    </div>
                  </a-col>
                  <a-col :span="6">
                    <div class="content-text-right">
                      <a-icon type="download" />
                      资料下载
                    </div>
                  </a-col>
                </a-row>
                <a-divider dashed class="dotted-line" />
                <a-row>
                  <a-col :span="18">
                    <div class="content-text-left">
                      <a-icon type="folder-open" />
                      资料1
                    </div>
                  </a-col>
                  <a-col :span="6">
                    <div class="content-text-right">
                      <a-icon type="download" />
                      资料下载
                    </div>
                  </a-col>
                </a-row>
                <a-divider dashed class="dotted-line" />
                <a-row>
                  <a-col :span="18">
                    <div class="content-text-left">
                      <a-icon type="folder-open" />
                      资料1
                    </div>
                  </a-col>
                  <a-col :span="6">
                    <div class="content-text-right">
                      <a-icon type="download" />
                      资料下载
                    </div>
                  </a-col>
                </a-row>
                <a-divider dashed class="dotted-line" />
                <a-row>
                  <a-col :span="18">
                    <div class="content-text-left">
                      <a-icon type="folder-open" />
                      资料1
                    </div>
                  </a-col>
                  <a-col :span="6">
                    <div class="content-text-right">
                      <a-icon type="download" />
                      资料下载
                    </div>
                  </a-col>
                </a-row>
                <a-divider dashed class="dotted-line" />
                <a-row>
                  <a-col :span="18">
                    <div class="content-text-left">
                      <a-icon type="folder-open" />
                      资料1
                    </div>
                  </a-col>
                  <a-col :span="6">
                    <div class="content-text-right">
                      <a-icon type="download" />
                      资料下载
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
            <a-col :span="2">
              <a-divider type="vertical" class="center-divider" />
            </a-col>
            <a-col :span="10">
              <div>
                <a-row>
                  <a-col :span="18">
                    <div class="title-top">
                      通知公告
                      <span class="little-title">ANNOUNCEMENTS</span>
                    </div>
                  </a-col>
                  <a-col :span="6">
                    <div class="title-right">
                      查看更多
                      <a-icon type="plus-circle" />
                    </div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="16">
                    <div class="content-text-left">
                      <a-icon type="notification" />
                      通知1
                    </div>
                  </a-col>
                  <a-col :span="8">
                    <div class="content-text-right">
                      更新时间：2019-12-10
                    </div>
                  </a-col>
                </a-row>
                <a-divider dashed class="dotted-line" />
                <a-row>
                  <a-col :span="16">
                    <div class="content-text-left">
                      <a-icon type="notification" />
                      通知2
                    </div>
                  </a-col>
                  <a-col :span="8">
                    <div class="content-text-right">
                      更新时间：2019-12-10
                    </div>
                  </a-col>
                </a-row>
                <a-divider dashed class="dotted-line" />
                <a-row>
                  <a-col :span="16">
                    <div class="content-text-left">
                      <a-icon type="notification" />
                      通知3
                    </div>
                  </a-col>
                  <a-col :span="8">
                    <div class="content-text-right">
                      更新时间：2019-12-10
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Divider, Col, Row, Icon } from "ant-design-vue";
export default {
  name: "create",
  components: {
    ADivider: Divider,
    ACol: Col,
    ARow: Row,
    AIcon: Icon
  }
};
</script>

<style scoped lang="less">
@import "../themes/base";
.create-frame {
  margin-top: 2em;
  width: @base-width;
}
.little-title {
  font-size: 0.4em;
  color: black;
  font-weight: lighter;
}
span {
  color: coral;
}
.outside-third {
  margin-top: 4em;
  margin-left: 40px;
  width: 1120px;
  background-color: #ffa200;
  box-shadow: 0 -27px 0px rgba(28, 67, 108, 0.98);
  border-radius: 1em;
  height: 400px;
}
.outside-second {
  margin-left: -20px;
  width: 1160px;
  background-color: #ffa200;
  height: 400px;
  box-shadow: 0 -15px 0px rgba(24, 58, 93, 0.78);
  border-radius: 1em;
}

.outside-first {
  padding: 2.5em 2em 2.5em 2em;
  border-radius: 0.3em;
  text-align: center;
  width: @base-width;
  height: 400px;
  margin-left: -20px;
  background-color: white;
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
.title-top {
  padding-left: 0.7em;
  line-height: 1.3em;
  border-left: 4px solid #ffa200;
  font-family: "Songti SC";
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 1.5em;
  text-align: left;
}
.title-right {
  text-align: right;
  font-size: 0.9em;
}
.content-text-left {
  text-align: left;
}
.content-text-right {
  font-size: 1em;
  text-align: right;
  color: blue;
}
.dotted-line {
  margin: 10px 0;
}
.center-divider {
  height: 330px;
}
</style>
