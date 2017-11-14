<template>
  <div class="product">
    <div class="img-box">
      <img src="" width="100%" alt="">

      <div class="mark">
        <span class="price">$7100.00</span>
        <span class="weight"> >120吨 </span>
      </div>
    </div>

    <!--正常显示-->
    <div class="nomarl-show">
      <p class="price text-primay">$7100.00/吨</p>

      <h4 class="title text-overflow">不锈钢带410 宝钢不锈钢拉丝不锈钢软管</h4>
      <p class="desc">燕子坊源头厂家</p>

      <div class="address clearfix">
        <address class="pull-left location ">
          <i class="icon icon-location"></i>
          <span class="address-txt text-overflow">黑龙江哈尔滨黑龙江哈尔滨黑龙江哈尔滨黑龙江哈尔滨</span>
        </address>

        <span class="pull-right">工贸一体</span>
      </div>

      <p class="tags">
        <i class="icon"></i>
        <i class="icon icon-auth"></i>
      </p>
    </div>

    <!--鼠标划过显示-->
    <ul class="buy-info">
      <li>
        <span class="key">交货地</span>
        <span class="value text-overflow">吉林宝钢</span>
      </li>
      <li>
        <span class="key">交货方式</span>
        <span class="value text-overflow">买家自提</span>
      </li>
      <li>
        <span class="key">供货时间</span>
        <span class="value text-overflow">2017/07/</span>
      </li>
      <li>
        <span class="key">产地</span>
        <span class="value text-overflow">吉利宝钢</span>
      </li>
      <li>
        <span class="key">供应总量</span>
        <span class="value text-overflow">2000千克</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";

  .product {
    padding: 10px;
    border: 1px solid #dedede;
    font-size: 12px;
    width: 225px;
    background-color: #fff;
    height: 366px;
    overflow: hidden;

    &:hover {
      .nomarl-show {
        display: none;
      }

      .buy-info {
        display: block;
      }

      .mark {
        bottom: 0;
      }
    }
  }

  .img-box {
    text-align: center;
    height: 206px;
    vertical-align: middle;
    background-color: pink;
    position: relative;
    overflow: hidden;

    .mark {
      position: absolute;
      height: 34px;
      line-height: 34px;
      bottom: -34px;
      left: 0;
      width: 100%;
      background-color: rgba(221, 35, 21, .7);
      padding: 0 10px;
      text-align: left;
      color: #fff;
      transition: bottom .3s;

      .price {
        font-size: 16px;
      }

      .weight {
        float: right;
      }
    }
  }

  .nomarl-show {
    .price {
      font-size: 18px;
      margin-top: 10px;
    }

    .title {
      line-height: 20px;
      color: #3e3e3e;
      font-size: 14px;
      font-weight: normal;
      /*padding: 5px 0 10px;*/
    }

    .desc{
      color: #6e6e6e;
    }

    .address{
      padding: 7px 0 10px;
      font-size: 12px;
    }

    .address-txt{
      padding: 0 7px;
      display: inline-block;
      vertical-align: middle;
      width: 120px;
    }
    .location{
      color: #6e6e6e;
      font-weight: normal;
      font-style: normal;
    }

    .tags {
      border-top: 1px solid #dedede;
      padding-top: 8px;
    }
    .icon {
      background-color: pink;

      & + .icon {
        margin-left: 10px;
      }
    }
  }

  .buy-info {
    display: none;
    padding-top: 6px;
    li {
      line-height: 26px;
      color: #6e6e6e;
    }

    .key {
      width: 72px;
      float: left;
      color: #3e3e3e;
    }

    .value {
      float: left;
      width: 100px;
    }
  }
</style>
