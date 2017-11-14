<template>
  <section id="finance" class="clearfix">
    <div class="desc">
      <h3 class="title">我要融资</h3>

      <ul class="desc-content">
        <li><i class="icon icon-hook"></i>供应链金融全流程解决方案</li>
        <li><i class="icon icon-hook"></i>银行和权威金融机构直接提供</li>
        <li><i class="icon icon-hook"></i>审核状态事实查看，放贷速度快</li>
        <li><i class="icon icon-hook"></i>融资成本低，申请手续简单</li>
        <li><i class="icon icon-hook"></i>产品品种齐全，信息充分透明</li>
      </ul>

      <p class="slogan">体验更优质 融资更快捷</p>
    </div>

    <div class="finance-content">
      <div class="finance-type clearfix">
        <div class="finance-item">
          <p class="title">采购融资</p>
          <a :href="`${platform.CONSTANT_JUMORE_RONG_URL}/product?bizType=1`" target="_blank" class="more">查看详情</a>
        </div>
        <div class="finance-item">
          <p class="title">存货融资</p>
          <a :href="`${platform.CONSTANT_JUMORE_RONG_URL}/product?bizType=2`" target="_blank" class="more">查看详情</a>
        </div>
        <div class="finance-item">
          <p class="title">销售融资</p>
          <a :href="`${platform.CONSTANT_JUMORE_RONG_URL}/product?bizType=3`" target="_blank" class="more">查看详情</a>
        </div>
      </div>

      <div class="banks clearfix">
        <ul>
          <li v-for="item in data" :key="item.adId">
            <a :href="item.path" target="_blank" :title="item.name">
              <img v-lazyload.cdn="item.picturePath" :alt="item.name" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import platform from '~/config/platform'

  export default {
    props: {
      data: {
        type: Array,
        require: true
      }
    },
    data () {
      return {
        platform
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  #finance {

  }

  .desc {
    width: 280px;
    border: 1px solid #dedede;
    background-color: #f5f5f5; //rgba(255,255,255,.5);
    float: left;
    padding: 100px 22px 0;
    position: relative;

    .title {
      position: absolute;
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      color: #fff;
      width: 152px;
      font-weight: normal;
      top: 33px;
      left: -1px;
      text-align: center;
      background-color: #dd2315;
    }
  }

  .slogan {
    font-size: 20px;
    padding-bottom: 28px;
  }

  .desc-content {
    color: #4a4a4a;
    margin-bottom: 22px;
    li {
      line-height: 32px;
    }

    .icon-hook {
      margin-right: 12px;
    }
  }

  .finance-content {
    float: right;
    width: 880px;
  }

  .finance-type {
    margin-left: -2px;
  }

  .finance-item {
    width: 292px;
    height: 250px;
    float: left;
    margin-left: 2px;
    padding: 70px 80px 0;
    text-align: center;

    .title {
      font-size: 24px;
      color: #fff;
      margin-bottom: 20px;
    }

    .more {
      border: 1px solid #fff;
      background-color: transparent;
      width: 124px;
      height: 32px;
      line-height: 32px;
      color: #fff;
      text-align: center;
      border-radius: 2px;
      display: block;
    }
  }

  .banks {
    margin-top: 11px;
    li {
      float: left;

    }


    a {
      display: block;
      width: 175px;
      height: 78px;
      margin-right: 1px;
      background-color: pink;
      text-align: center;
      line-height: 78px;

      &:hover {
        box-shadow: 0 2px 4px 0 #dedede;
      }
    }

    img{
      max-height: 78px;
      max-width: 175px;
    }
  }

  @for $i from 1 to 4 {
    .finance-item:nth-child(#{$i}) {
      background: url("~assets/img/finance-#{$i}.png");
    }
  }

</style>
