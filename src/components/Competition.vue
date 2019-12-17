<template>
  <div class="competition-frame">
    <div class="create-title">
      <span>CTF</span>荣誉墙
      <a-divider class="divider">◆ CTF HONOR WALL ◆</a-divider>
    </div>
    <div class="competition-content">
      <a-row>
        <a-col :span="12">
          <div class="left-background">
            <a-carousel arrows autoplay>
              <div
                slot="prevArrow"
                class="custom-slick-arrow"
                style="left: 10px;zIndex: 1"
              >
                <a-icon type="left-circle" theme="outlined" />
              </div>
              <div
                slot="nextArrow"
                class="custom-slick-arrow"
                style="right: 10px"
              >
                <a-icon type="right-circle" theme="outlined" />
              </div>
              <div><img src="../assets/1.jpg" alt="" /></div>
              <div><img src="../assets/2.jpg" alt="" /></div>
              <div><img src="../assets/3.jpg" alt="" /></div>
              <div><img src="../assets/4.jpg" alt="" /></div>
            </a-carousel>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="right-background">
            <div class="title-top">
              获奖情况
              <span class="little-title">AWARDS</span>
            </div>
            <div>
              <div class="content-text">
                <a-icon type="like" />
                资料1
              </div>
              <a-divider dashed class="dotted-line" />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { Divider, Row, Col, Carousel, Icon } from "ant-design-vue";
export default {
  name: "competition",
  components: {
    ADivider: Divider,
    ARow: Row,
    ACol: Col,
    ACarousel: Carousel,
    AIcon: Icon
  }
};
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 266px;
  line-height: 160px;
  /*background: #364d79;*/
  overflow: hidden;
  border-radius: 1em;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>

<style scoped lang="less">
@import "../themes/base";
.competition-frame {
  width: @base-width;
  height: 300px;
  margin-top: 2em;
}
.competition-content {
  width: @base-width;
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
span {
  color: coral;
}
.left-background {
  padding: 1.2em;
  height: 300px;
  border-radius: 1.2em;
  background-color: rgba(4, 8, 13, 0.89);
  margin: 0 1em 0 0;
  color: white;
  border: 1px white solid;
}
img {
  display: table-cell;
  vertical-align: middle;
  margin: 0 auto;
  width: 100%;
  height: 266px;
}
.right-background {
  padding: 1.2em;
  height: 300px;
  border-radius: 1.2em;
  background-color: rgba(4, 8, 13, 0.89);
  margin: 0 0 0 1em;
  color: white;
  border: 1px white solid;
}
.little-title {
  font-size: 0.4em;
  color: #ffffff;
  font-weight: lighter;
}
.title-top {
  padding-left: 0.7em;
  line-height: 1.3em;
  border-left: 4px solid #ffa200;
  font-family: "Songti SC";
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 1em;
  text-align: left;
}
.dotted-line {
  margin: 10px 0;
}
.content-text {
  text-align: left;
}
</style>
