<template>
  <div class="descri">
    <a-row>
      <a-col :span="20">
        <div class="cont">
          <a-tabs defaultActiveKey="1">
            <a-tab-pane :tab="data.tab" key="1" class="txt">
              <div v-for="(val, key, index) in data.cont" v-bind:key="index">
                <div v-if="key === 'imname'" class="title na">
                  {{ val }}
                </div>
                <div v-else-if="key.indexOf('img') === 0" class="imgout">
                  <img :src="val" alt="pic1" />
                </div>
                <div v-else-if="key.indexOf('table') === 0" class="table">
                  <a-table
                    :columns="val.columns"
                    :dataSource="val.data"
                    :pagination="false"
                    size="small"
                    bordered
                  >
                  </a-table>
                </div>
                <div
                  v-else-if="key.indexOf('content') < 0"
                  :id="key"
                  class="title"
                >
                  {{ val }}
                </div>

                <div
                  v-else-if="key.indexOf('content') === 0"
                  v-html="val"
                ></div>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-col>
      <a-col :span="4">
        <a-anchor :affix="true" :showInkInFixed="true" :offsetTop="35">
          <a-anchor-link
            v-for="(val, her, index) in data.link"
            v-bind:key="index"
            :href="her"
            :title="val"
          />
        </a-anchor>
        <div>
          <a-back-top />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Tabs, Row, Col, Anchor, BackTop, Table } from "ant-design-vue";
import "core-js";

export default {
  props: ["data"],
  name: "content",
  components: {
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
    ARow: Row,
    ACol: Col,
    AAnchor: Anchor,
    AAnchorLink: Anchor.Link,
    ABackTop: BackTop,
    ATable: Table
  }
};
</script>

<style scoped lang="less">
@import "./../themes/base.less";
.descri {
  background: white;
  border-radius: 5px;
  padding: 3em;
}
.cont {
  text-align: left;
  margin-right: 2em;
}
.txt {
  font-family: "Songti SC";
}
.txt div {
  margin-bottom: 1em;
}
.title {
  font-weight: bold;
  font-size: 1.7em;
  text-align: center;
}
.na {
  font-size: 1.4em;
}
.imgout {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
img {
  margin: 0 auto;
  width: 50%;
  height: 50%;
}
</style>
