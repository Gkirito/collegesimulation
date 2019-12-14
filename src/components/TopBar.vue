<template>
    <div class="top-tool-bar">
        <a-row>
            <a-col :span="8">
                <div class="logo-pic">
                    <img src="./../assets/logo4.png" alt="">
                </div>
            </a-col>
            <a-col :span="8">
                <div class="router">
                    <router-link to="/index/home">网站首页</router-link> |
                    <router-link to="/index/library">库存设备</router-link> |
                    <router-link to="/index/about">公司简介</router-link> |
                    <router-link to="/index/contact">联系我们</router-link>
                </div>
            </a-col>
            <a-col :span="8">
                <div class="search">
                    <input type="text" class="input-search" placeholder="请输入关键字" >
                    <button class="btn-search">
                        <a-button type="primary" shape="circle" icon="search" class="icon-search"></a-button>
                    </button>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import { Button, Row, Col } from 'ant-design-vue'

    export default {
        name: "topbar",
        components:{
            AButton:Button,
            ARow:Row,
            ACol:Col
        }
    }
</script>

<style scoped lang="sass">
    @import "./../themes/base.sass"
    .top-tool-bar
        position: relative

    .logo-pic
        text-align: left
        margin-left: 10%

    .router
        outline: none
        text-align: center
        transform: translateY(40%)
        border: none
        font-size: 1.2em

    .search
        margin-left: 50%
        outline: none
        text-align: right
        transform: translateY(40%)
        border: none
        width: 200px

    .input-search
        outline: none
        width: 80%
        height: $round-search-bar-height
        border-radius: $round-search-bar-border-radius
        border: solid 1px $color-border-gray
        padding: 16px
        box-sizing: border-box
        font-size: 1.2em

    .btn-search
        outline: none
        height: 63px
        position: absolute
        right: 0
        top: 50%
        transform: translateY(-50%)
        background: none
        border: none

    .icon-search
        height: 20px
        width: 20px
        border: none
</style>
