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
                <div
                  v-else-if="key.indexOf('special-table') === 0"
                  class="table"
                >
                  <a-table
                    :columns="columns"
                    :dataSource="val.data"
                    :pagination="false"
                    size="small"
                    bordered
                  >
                    <!--                  <img slot="image" slot-scope="text" src="{{text}}" >-->
                  </a-table>
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
// const show = da => {
//   return
// };
export default {
  data() {
    const columns = [
      {
        title: "指标",
        dataIndex: "target",
        colSpan: 2,
        width: 80,
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {}
          };
          if (index === 0) {
            obj.attrs.colSpan = 2;
          }
          if (index === 1) {
            obj.attrs.rowSpan = 4;
            obj.attrs.width = 80;
          }
          if (index === 2) {
            obj.attrs.rowSpan = 0;
          }
          if (index === 3) {
            obj.attrs.rowSpan = 0;
          }
          if (index === 4) {
            obj.attrs.rowSpan = 0;
          }
          return obj;
        }
      },
      {
        title: "target",
        colSpan: 0,
        dataIndex: "target0",
        width: 80,
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {}
          };
          if (index === 0) {
            obj.attrs.colSpan = 0;
          }
          return obj;
        }
      },
      {
        title: "内容",
        dataIndex: "contents",
        colSpan: 1,
        customRender: (value, row, index) => {
          if (index === 0) {
            return (
              <div>
                {value.data} <img src={value.image}></img>
              </div>
            );
          }
          return {
            children: value,
            attrs: {}
          };
        }
      }
    ];
    return {
      columns
    };
  },
  props: ["data"],
  name: "contentu",
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
.table {
  width: 40em;
  margin: 0 auto;
}
img {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  margin: 0 auto;
  width: 50%;
  height: 50%;
}
</style>
