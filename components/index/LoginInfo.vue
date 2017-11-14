<template>
  <div class="col-right">
      <div class="adv"></div>

      <!--登录信息-->
      <div id="login-info">
        <div class="photo"></div>

        <div class="user-wrap">
          <p class="user">Hi, 您好</p>
          <!--<p>欢迎来到 <i class="text-primay">聚贸钢铁</i></p>-->
          <p>聚诚通铂金会员将在 <i class="text-primay">30</i>天后过期，<a href="" class="text-primay">立即续费>></a></p>
        </div>
        <div class="actions">
          <!--<el-button class="quick-shop" type="warning" size="small">快捷开店</el-button>-->
          <el-button class="decoration-shop" plain type="primary" size="mini">装修店铺</el-button>
          <el-button class="plush-shop" type="primary" size="mini">发布商品</el-button>
        </div>
      </div>

      <!--消息-->
      <div class="notice">
        <div class="tabs">
          <header class="header">
            <div class="tab-title" :class="{'active': noticeType === 1}" @click="changeNoticeType(1)">最新商机</div>
            <div class="tab-title" :class="{'active': noticeType === 2}" @click="changeNoticeType(2)">钢厂调价</div>

            <div class="bar" :style="`left: ${(noticeType)*10 + (noticeType-1)*110}px`"></div>
          </header>

          <div class="content">
            <div class="business" v-show="noticeType === 1">

              <div class="no-login" style="display: none;">
                <div class="img-box"></div>
                <!--未登录-->
                <div>
                  <p>您有 <span class="text-primay">1</span> 条新商机待联系，</p>
                  <p>请 <a href="" class="text-primay">登录</a>后查看!</p>
                </div>

                <!--登录未开店-->
                <div style="display: none;">
                  <p>您有 <span class="text-primay">1</span> 条新商机待联系，</p>
                  <a href="" class="text-primay">立即开店</a>
                </div>
              </div>

              <!--登录已开店普通会员-->
              <div>
                <ul class="new-lists">
                  <li>
                    <a href="" class="text-overflow item"><span class="news-type">【采购】</span>钢厂不限/冷轧平板/304</a>
                  </li>
                </ul>

                <section class="open-member-box">
                  <header class="member-header text-center">
                    <h5 class="title-text">会员特权</h5>
                  </header>

                  <p class="member-advantage clearfix">
                    <span><i class="icon icon-target"></i>获取精准商机</span>
                    <span class="pull-right"><i class="icon icon-global"></i>全网流量推广</span>
                  </p>

                  <a class="open-member-link">立即开通聚诚通服务</a>
                </section>
              </div>

              <!--商机列表-->
              <div class="new-lists" style="display: none;">
                <ul>
                  <li v-for="i in 5" :key="i">
                    <a href="#" class="text-overflow item"><span class="news-type">【采购】</span>钢厂不限/冷轧平板/304</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="modify-price" v-show="noticeType === 2">
              <div class="new-lists">
                <ul>
                  <li v-for="i in 5" :key="i">
                    <a href="" class="item text-overflow">
                      <time class="news-type">7月5日</time>
                      雨花建筑钢材价格调整信息</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        noticeType: 1,
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../../element-variables";

  .adv {
    height: 60px;
    background-color: pink;
    margin: 5px 0;
  }

  // 开启会员
  .open-member-box {

    .member-header {
      position: relative;
      padding: 3px 0 5px;

      &:after,
      &:before {
        display: inline-block;
        content: " ";
        background: #dedede;
        height: 1px;
        left: 0;
        width: 48px;
        /*position: absolute;*/
        position: relative;
        vertical-align: super;

      }
    }

    .title-text {
      font-size: 18px;
      color: #6e6e6e;
      font-weight: normal;
      padding: 0 15px;
      display: inline-block;
      position: relative;
      z-index: 3;
    }
    .member-advantage {
      margin-bottom: 12px;
      color: #6e6e6e;

      .icon {
        vertical-align: text-bottom;
        margin-right: 5px;
      }
    }

    .open-member-link {
      line-height: 24px;
      color: #fff;
      background-color: $--color-primary;
      width: 100%;
      display: block;
      text-align: center;
      border-radius: 2px;
    }
  }

  // 商讯列表
  .new-lists {
    .item {
      display: block;
      font-size: 12px;
      line-height: 21px;
      color: #6e6e6e;

      &:hover {
        color: $--color-primary;
      }
    }
    .time, .news-type {
      padding-right: 8px;
    }
  }

  //登录
  #login-info {
    font-size: 12px;
    color: #6e6e6e;
    background: rgba(255, 255, 255, 0.90);
    padding: 20px;

    .photo {
      float: left;
      width: 56px;
      height: 56px;
      border-radius: 100%;
      background-color: pink;
      margin-right: 10px;
    }

    .user {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .actions {
      margin-top: 15px;
    }

    button {
      width: 90px;
    }

    .decoration-shop {
      width: 90px;
      background-color: #fff;
      color: $--color-primary;
      border-color: $--color-primary;

      &:hover, &:active, &:focus {
        background-color: #fff;
        color: $--color-primary;
        border-color: $--color-primary;
      }
    }
    .plush-shop {
      width: 90px;

      &:hover, &:active, &:focus {
        background-color: $--color-primary;
        color: #fff;
      }
    }
  }

  .notice {
    color: #6e6e6e;
    background: rgba(255, 255, 255, 0.90);
  }

  .tabs {
    overflow: hidden;
    border-top: 1px solid #ddd;
    .header {
      height: 44px;
      line-height: 44px;
      position: relative;
      &:after {
        content: "";
        background-color: #dedede;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
      }
    }

    .content {
      height: 130px;
      overflow: hidden;
      font-size: 12px;
      color: #3e3e3e;
      padding: 12px;
    }

    .bar {
      background-color: $--color-primary;
      position: absolute;
      bottom: 0;

      width: 100px;
      z-index: 5;
      height: 2px;
      transition: left .3s;
    }

    .tab-title {
      float: left;
      color: #3e3e3e;
      font-size: 14px;
      width: 50%;
      text-align: center;
      cursor: default;

      &.active {
        color: $--color-primary;
      }
    }

    .no-login {
      position: relative;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;

      line-height: 20px;
      .img-box {
        width: 42px;
        height: 42px;
        background-color: pink;
        float: left;
        margin-right: 10px;
      }
    }

    .business {
      height: 100%;
    }
  }
</style>
