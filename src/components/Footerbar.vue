<template>
  <div class="footer">
    <div class="content-in">
      <a-row>
        <a-col :span="12">
          <div class="left-info">
            地址：杭州市临安区青山湖街道杭电路1号 <br />
            邮编：311305<br />
            招生咨询：0571-58619116 <br />
            就业咨询：0571-58619118<br />
            学院办公室：0571-58619115 <br />
            学院邮箱：xxgcxy@hdu.edu.cn<br />
            浙ICP备12028388号-3
          </div>
        </a-col>
        <a-col :span="12">
          <div>
            分享到
            <a-icon type="weibo-circle" theme="filled" class="a-icon" />
            <a-icon type="wechat" theme="filled" class="a-icon" />
            <a-icon type="qq" class="a-icon" />
          </div>
          <div class="right">
            <div class="img-size">
              <img src="./../assets/weixin.png" alt="" class="ma" />官方微信
            </div>
            <div class="img-size">
              <img src="./../assets/weibo.png" alt="" class="ma" />官方微博
            </div>
            <div class="img-size">
              <img src="./../assets/hp0919.png" alt="" class="ma" />团委官微
            </div>
            <div class="img-size">
              <img src="./../assets/bkszs.jpg" alt="" class="ma" />本科生招生
            </div>
          </div>
        </a-col>
      </a-row>
      <a-divider />
      <div>
        <a-row>
          <a-col :span="12">
            <div class="left-info">
              Copyright © 2019 杭州电子科技大学信息工程学院版权所有
            </div>
          </a-col>
          <a-col :span="12">
            <a-select
              defaultValue="friend"
              style="width: 12em"
              @change="handleChange"
            >
              <a-select-option value="friend" disabled
                >友情链接</a-select-option
              >
              <a-select-option value="http://www.hdu.edu.cn/"
                >杭州电子科技大学</a-select-option
              >
              <a-select-option value="http://www.moe.gov.cn/"
                >教育部</a-select-option
              >
              <a-select-option value="http://www.zjedu.gov.cn/"
                >浙江省教育厅</a-select-option
              >
              <a-select-option value="http://www.zj.gov.cn/"
                >浙江省人民政府</a-select-option
              >
            </a-select>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Col, Row, Divider, Select, Icon } from "ant-design-vue";
export default {
  name: "footerbar",
  methods: {
    handleChange(url) {
      window.open(url);
    }
  },
  components: {
    ARow: Row,
    ACol: Col,
    ADivider: Divider,
    ASelect: Select,
    ASelectOption: Select.Option,
    AIcon: Icon
  }
};
</script>

<style scoped lang="less">
@import "../themes/base";
.footer {
  color: white;
  background: #051876ad;
  font-family: "Heiti TC";
  font-size: 1em;
}
.content-in {
  padding: 3em 4em 2em 4em;
  margin: 0 auto;
  width: @base-width;
}
.left-info {
  text-align: left;
}
.a-icon {
  margin-left: 0.5em;
  font-size: 1.5em;
}
.img-size {
  width: 74px;
  height: 94px;
  text-align: center;
  margin-top: 20px;
  float: left;
  margin-left: 1.3em;
}
.ma {
  width: 6em;
}
.right {
  padding-left: 10em;
}
</style>
