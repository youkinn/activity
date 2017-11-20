<template>
  <div class="content">
    <div class="banner" @click.prevent="showLogin">
      <!-- <a @click.prevent="showLogin">
        <img src="~assets/img/merchants/banner.jpg" alt="">
      </a> -->
    </div>
    <div class="navbar">
      <ul class="list clearfix">
        <li class="item pull-left">
          <a href="#service">
            <img src="~assets/img/merchants/right1.png" alt="">
            <img class="right-icon" src="~assets/img/merchants/right1-icon.png" alt="">
            <div class="text">
              <div class="name">1.聚诚通服务</div>
              <div class="desc">商机在手 订单不愁</div>
            </div>
          </a>
        </li>
        <li class="item pull-left">
          <a href="#chance">
            <img src="~assets/img/merchants/right2.png" alt="">
            <img class="right-icon" src="~assets/img/merchants/right2-icon.png" alt="">
            <div class="text">
              <div class="name">2.市场机会</div>
              <div class="desc">海量订单 无缝对接</div>
            </div>
          </a>
        </li>
        <li class="item pull-left last">
          <a href="#rights">
            <img src="~assets/img/merchants/right3.png" alt="">
            <img class="right-icon" src="~assets/img/merchants/right3-icon.png" alt="">
            <div class="text">
              <div class="name">3.上线权益</div>
              <div class="desc">专属店铺 专业服务</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="section service container">
      <RightTitle class="section-title" title="聚诚通服务" id="service"></RightTitle>
      <ul class="service-list clearfix">
        <li class="service-item service-item-1 pull-left clearfix">
          <div class="service-intro pull-left" :class="{'active': index === 0 }" @mouseover="showDetail(0)">
            <dl>
              <dt class="service-dt">品牌基础建站</dt>
              <dd class="service-dd">• 基础建站</dd>
              <dd class="service-dd">• 无缝对接</dd>
            </dl>
            <div class="arrow-right-icon">
              <img src="~assets/img/merchants/arrow-right2.png" width="29" height="29" alt="">
            </div>
            <img class="intro-img" src="~assets/img/merchants/service1-1.png" width="222" height="199" alt="">
          </div>
          <transition name="slide" mode="out-in">
            <div class="service-detail pull-left" v-show="index === 0">
              <div class="detail-header">
                <div class="title">全面企业建站服务</div>
                <div class="sub-title">助您拓展电商市场</div>
              </div>
              <ul class="detail-items clearfix">
                <li class="detail-item pull-left">
                  <img src="~assets/img/merchants/service1-2.png" alt="">
                  <div class="desc1">品牌基础建站</div>
                  <div class="desc2">50套网站主题风格任选</div>
                </li>
                <li class="detail-item pull-left last">
                  <img src="~assets/img/merchants/service1-3.png" alt="">
                  <div class="desc1">11大垂直行业无缝对接</div>
                  <div class="desc2">全天候依托聚贸生态圈</div>
                </li>
              </ul>
            </div>
          </transition>
        </li>
        <li class="service-item service-item-2 pull-left clearfix">
          <div class="service-intro pull-left" :class="{'active': index === 1 }" @mouseover="showDetail(1)">
            <dl>
              <dt class="service-dt">商机全网引流</dt>
              <dd class="service-dd">• 全网引流</dd>
              <dd class="service-dd">• 一键推广</dd>
              <dd class="service-dd">• 商机推送</dd>
            </dl>
            <div class="arrow-right-icon">
              <img src="~assets/img/merchants/arrow-right2.png" width="29" height="29" alt="">
            </div>
            <img class="intro-img" src="~assets/img/merchants/service2-1.png" width="222" height="199" alt="">
          </div>
          <transition name="slide" mode="out-in">
            <div class="service-detail pull-left" v-show="index === 1">
              <div class="detail-header">
                <div class="title">诚信实力全网推广</div>
                <div class="sub-title">流量变销量</div>
              </div>
              <ul class="detail-items clearfix">
                <li class="detail-item pull-left">
                  <img src="~assets/img/merchants/service2-2.png" alt="">
                  <div class="desc1">全网引流</div>
                  <div class="desc2">聚贸40个子网站</div>
                  <div class="desc2">推广引流</div>
                </li>
                <li class="detail-item pull-left last">
                  <img src="~assets/img/merchants/service2-3.png" alt="">
                  <div class="desc1">一键推广</div>
                  <div class="desc2">商品信息一键推送</div>
                  <div class="desc2">全球百万企业</div>
                </li>
                <li class="detail-item pull-left last">
                  <img src="~assets/img/merchants/service2-4.png" alt="">
                  <div class="desc1">商机推送</div>
                  <div class="desc2">商机智能推送</div>
                  <div class="desc2">买家信息优先掌握</div>
                </li>
              </ul>
            </div>
          </transition>
        </li>
        <li class="service-item service-item-3 pull-left clearfix">
          <div class="service-intro pull-left" :class="{'active': index === 2 }" @mouseover="showDetail(2)">
            <dl>
              <dt class="service-dt">效能促进交易</dt>
              <dd class="service-dd">• 权威认证</dd>
              <dd class="service-dd">• 优先排名</dd>
              <dd class="service-dd">• 智能客户管理</dd>
            </dl>
            <div class="arrow-right-icon">
              <img src="~assets/img/merchants/arrow-right2.png" width="29" height="29" alt="">
            </div>
            <img class="intro-img" src="~assets/img/merchants/service3-1.png" width="222" height="199" alt="">
          </div>
          <transition name="slide" mode="out-in">
            <div class="service-detail pull-left" v-show="index === 2">
              <div class="detail-header">
                <div class="title">建立买家信任</div>
                <div class="sub-title">快速促成交易</div>
              </div>
              <ul class="detail-items clearfix">
                <li class="detail-item pull-left">
                  <img src="~assets/img/merchants/service3-2.png" alt="">
                  <div class="desc1">信用+企业身份</div>
                  <div class="desc2">数据+权威机构认证</div>
                  <div class="desc2">共建客户信任</div>
                </li>
                <li class="detail-item pull-left last">
                  <img src="~assets/img/merchants/service3-3.png" alt="">
                  <div class="desc1">优先排名</div>
                  <div class="desc2">聚诚通会员享受</div>
                  <div class="desc2">优先排名特权</div>
                </li>
                <li class="detail-item pull-left last">
                  <img src="~assets/img/merchants/service3-4.png" alt="">
                  <div class="desc1">智能客户管理</div>
                  <div class="desc2">智能话客户管理</div>
                  <div class="desc2">接待系统</div>
                </li>
              </ul>
            </div>
          </transition>
        </li>
      </ul>
    </div>
    <div class="section chance">
      <RightTitle class="section-title" title="市场机会" id="chance"></RightTitle>
      <div class="chance-content container clearfix">
        <div class="chance-left pull-left">
          <div class="chance-title">连续三年领跑行业</div>
          <ul class="chart-list clearfix">
            <li class="chart-item pull-left" style="margin-right: 103px;">
              <div class="chart-title">中国大宗商品B2B市场规模</div>
              <img src="~assets/img/merchants/chart-1.png" alt="" width="273" height="278">
            </li>
            <li class="chart-item chart-item2 pull-left">
              <div class="chart-title">中国大宗商品行业需求量</div>
              <div class="chart-content clearfix">
                <img class="pull-left" src="~assets/img/merchants/chart-2-1.png" alt="" width="409" height="248">
              </div>
            </li>
          </ul>
        </div>
        <div class="chance-right pull-right">
          <div class="chance-title">市场买家介绍</div>
          <ul class="fn-list">
            <li class="fn-item clearfix">
              <img src="~assets/img/merchants/fn-icon-1.png" alt="" class="fn-icon pull-left" width="60" height="70">
              <div class="fn-detail pull-left">
                <div class="fn-title">找货源</div>
                <div class="fn-desc1">每天搜索超<span class="fn-amount">200</span>万次</div>
                <div class="fn-desc2">寻找自己需要的商品</div>
              </div>
            </li>
            <li class="fn-item clearfix">
              <img src="~assets/img/merchants/fn-icon-2.png" alt="" class="fn-icon pull-left" width="60" height="70">
              <div class="fn-detail pull-left">
                <div class="fn-title">定卖家</div>
                <div class="fn-desc1">每天<span class="fn-amount">100</span>万家企业</div>
                <div class="fn-desc2">匹配供求信息</div>
              </div>
            </li>
            <li class="fn-item clearfix">
              <img src="~assets/img/merchants/fn-icon-3.png" alt="" class="fn-icon pull-left" width="60" height="70">
              <div class="fn-detail pull-left">
                <div class="fn-title">定意向</div>
                <div class="fn-desc1">每天与<span class="fn-amount">500</span>万卖家</div>
                <div class="fn-desc2">洽淡确定合作意向</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section rights container">
      <RightTitle class="section-title" title="上线权益" id="rights"></RightTitle>
      <div class="rights-intro">
        <div class="rights-header clearfix">
          <div class="rights-header-left pull-left">权益介绍</div>
          <div class="rights-header-right pull-left">入驻聚贸，聚贸会帮助企业全方位展示品牌形象，同时推动企业对接全球资源，拓宽全球销售渠道。</div>
        </div>
        <ul class="rights-list">
          <li class="rights-item clearfix">
            <div class="rights-item-left pull-left clearfix">
              <img src="~assets/img/merchants/rights-1.png" alt="" class="rights-icon pull-left" width="96" height="96">
              <div class="rights-brief pull-left">
                <div class="rights-name">百万级流量</div>
                <div class="rights-desc">帮助企业对接全球资源</div>
                <div class="splitline"></div>
              </div>
            </div>
            <div class="rights-item-right rights-detail pull-left">工业全产业链及全服务业生态化跨境电商平台上面的百万级别的流量曝光，帮助企业树立品牌形象。</div>
          </li>
          <li class="rights-item clearfix">
            <div class="rights-item-left pull-left clearfix">
              <img src="~assets/img/merchants/rights-2.png" alt="" class="rights-icon pull-left" width="96" height="96">
              <div class="rights-brief pull-left">
                <div class="rights-name">专属超级店铺</div>
                <div class="rights-desc">帮助企业提升全网排名</div>
                <div class="splitline"></div>
              </div>
            </div>
            <div class="rights-item-right rights-detail pull-left">专属企业超级店铺，锁定买家眼球，帮助企业展示商品和企业形象，提升全网排名。</div>
          </li>
          <li class="rights-item clearfix">
            <div class="rights-item-left pull-left clearfix">
              <img src="~assets/img/merchants/rights-3.png" alt="" class="rights-icon pull-left" width="96" height="96">
              <div class="rights-brief pull-left">
                <div class="rights-name">独特域名名片</div>
                <div class="rights-desc">帮助企业展示品牌形象</div>
                <div class="splitline"></div>
              </div>
            </div>
            <div class="rights-item-right rights-detail pull-left">独特域名一个，在名片、广告等线下透出品牌，让客户印象更深刻。</div>
          </li>
        </ul>
      </div>
      <div class="splitarea">
        <hr class="pull-left">
        <div class="splitarea-title pull-left">聚贸优势</div>
        <hr class="pull-left">
      </div>
      <ul class="goodness clearfix">
        <li class="goodness-item pull-left">
          <img class="goodness-icon" src="~assets/img/merchants/goodness-1.png" alt="" width="180" height="180">
          <div class="goodness-name">全球化市场资源</div>
          <div class="goodness-desc">与全球150多个国家达成合作，全球超100万家企业入驻，超100家国际商协会机构。</div>
        </li>
        <li class="goodness-item pull-left">
          <img class="goodness-icon" src="~assets/img/merchants/goodness-2.png" alt="" width="180" height="180">
          <div class="goodness-name">全产业链覆盖</div>
          <div class="goodness-desc">聚贸平台涵盖化工、有色、钢铁、矿产、煤炭、石油、农产品、机械、工业品、消费品、食品等全品类商品。</div>
        </li>
        <li class="goodness-item pull-left last">
          <img class="goodness-icon" src="~assets/img/merchants/goodness-3.png" alt="" width="180" height="180">
          <div class="goodness-name">全方位服务支持</div>
          <div class="goodness-desc">聚贸通过旗下金融、物流、外贸、大数据、认证等服务平台，为企业提供全方面的服务支持。</div>
        </li>
      </ul>
    </div>
    <div class="section aeo container">
      <RightTitle class="section-title" title="优质企业"></RightTitle>
      <div class="aeo-list">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
              <img :src="banner" width="160" height="160">
            </div>
          </div>
      </div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </div>
    </div>
    <div class="section background container">
      <RightTitle class="section-title" title="活动背景"></RightTitle>
      <div class="detail">
               聚贸是全球首家，也是唯一一家工业全产业链及全服务业E4B生态化跨境电商平台。在全球，聚贸已与包括G20国家、“一带一路”国家、APEC国家等在内的157个国家达成合作并开通服务，是全球合作国家最多的跨境电商平台；在中国，聚贸的合作已覆盖各个省份，帮助各省、各产业集群企业的商品和服务接轨全球市场。
       在各省入驻聚贸的同时，聚贸也积极为各省市的优质企业免费开通超级店铺，在全方位展示企业形象的同时，推动企业对接全球合作，拓宽全球销售渠道。
      </div>
    </div>
    <a @click.prevent="showLogin" class="btn">立即入驻</a>
    <FooterAdvert @click="showLogin"></FooterAdvert>
  </div>

</template>

<script>
  import Vue from 'vue'
  import axios from '~/plugins/axios'
  import RightItem from '~/components/merchants/right-item.component.vue'
  import RightTitle from '~/components/merchants/right-title.component.vue'
  import FooterAdvert from '~/components/merchants/advert.component.vue'
  import platform from '~/config/platform/index'

  // 登录信息
  // import LoginInfo from '~/components/index/LoginInfo'

  export default {
    name: 'index',
    components: {
      // LoginInfo,
      RightTitle,
      FooterAdvert,
    },
    data () {
      return {
        index: 0,
        platform: platform,
        banners: [
          '/img/merchants/company-1.png',
          '/img/merchants/company-2.png',
          '/img/merchants/company-3.png',
          '/img/merchants/company-4.png',
          '/img/merchants/company-5.png',
          '/img/merchants/company-6.png',
        ],
        swiperOption: {
          autoplay : 2500,
          loop: true,
          slidesPerView: 5,
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 56
        }
      }
    },

    computed: {
      user: {
        get () {
          return this.$store.state.user.user || {}
        },
        set (newVal) {
          this.$store.state.user.user = newVal
        }
      }
    },

    async asyncData () {
    },

    methods: {
      showDetail(index){
        this.index = index;
      },
      showLogin () {
        if(!this.user.userId){
          this.$store.commit('SET_OPEN', {opend: true});
          return;
        }
        if(this.user.shopStatus === 1){
          window.open(platform.JCT_ADDRESS);
          return;
        }
        window.open(`${platform.CONSTANT_CENTER_URL}/shop/fastOpenShop`);
      }
    },
  }
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>

  .aeo-list {
    position: relative;
  }
  .swiper-container {
    width: 1024px;
    cursor: pointer;
  }

  .site-main {
    width: 1190px;
    min-width: 1190px;
    margin: 0 auto;
  }

  .content {
    min-width: 1190px;
    padding-bottom: 89px;
    background-color: #FD5414;
  }

  .banner {
    height: 615px;
    cursor: pointer;
    background: url("~assets/img/merchants/banner.jpg") center;
    background-size: cover;
    img {
      display: block;
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }

  .navbar {
    position: relative;
    text-align: center;
    background-color: #9B2B00;
    height: 200px;

    .list {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 962px;
      height: 140px;
    }

    .item {
      position: relative;
      width: 302px;
      height: 140px;
      margin-right: 28px;

      &.last {
        margin-right: 0;
      }

      img {
        width: 100%;
        height: auto;
      }

      .right-icon {
        position: absolute;
        top: 18px;
        left: 24px;
        width: 69px;
        height: 62px;
      }
    }

    .text {
      position: absolute;
      top: 55px;
      left: 116px;
      color: #fff;
      
      .name {
        font-size: 24px;
      }

      .desc {
        text-align: left;
        font-size: 14px;;
      }
    }
  }

  .section .section-title {
    position: absolute;
    top: -45px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .service{
    margin-top: 90px;
    margin-bottom: 85px;

    height: 490px;
    background: url("~assets/img/merchants/right1-bg.png") center;
    background-size: cover;

    .service-list {
      padding-top: 49px;
      padding-left: 35px;
    }

    .service-item {
      margin-right: 10px;
    }

    .service-intro {
      position: relative;
      width: 222px;
      height: 396px;
      padding-left: 37px;
      padding-top: 42px;
      color: #fff;
      background-color: #FEFDE9;
      cursor: pointer;

      .service-dt {
        font-weight: 600;
        margin-bottom: 18.2px;
        font-size: 18px;
        color: #608BFF;
      }

      .service-dd {
        color: #666;
        font-size: 14px;
        letter-spacing: 0;
        margin-bottom: 10px;
      }

      &.active {
        background-color: #6095FF;
        .service-dt,
        .service-dd {
          color: #fff;
        }
      }

      .arrow-right-icon {
        position: absolute;
        top: 42px;
        right: 24.7px;
      }

      .intro-img {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 13px;
      }
    }

    .service-detail{
      position: relative;
      width: 440px;
      height: 396px;
      // padding: 43px 49px 50px 46px;
      padding-top: 43px;
      background-color: #FEFDE9;

      .detail-header{
        width: 244px;
        height: 45px;
        margin: 0 auto 54px auto;
        text-align: center;
      }

      .title {
        font-weight: 600;
        font-size: 18px;
        color: #333;
      }

      .sub-title {
        font-size: 14px;
        color: #666;
        line-height: 25px;
      }
    }

    .detail-item {
      width: 50%;
      text-align: center;

      img {
        width: 10em;
        height: 10em;
      }

      &.last {
        margin-right: 0;
      }

      .desc1 {
        min-width: 140px;
        margin-top: 19px;
        font-size: 14px;
        color: #333;
        font-weight: 600;
      }

      .desc2 {
        min-width: 140px;
        font-size: 12px;
        color: #666;
      }
    }

    .service-item-2,
    .service-item-3 {
      .detail-item {
        width: 33.33%;

        .desc1 {
          margin-bottom: 10px;
        }

        img{
          width: 100px;
          height: 100px;
        }
      }
      
    }
  }

  .chance {
    position: relative;
    padding-top: 61px;
      padding-bottom: 50px;

    background: url("~assets/img/merchants/right2-bg.png") center;
    background-size: cover;

    &-content {
      width: 1122px;
      height: 404px;
    }

    &-left {
      width: 820px;
      height: 404px;
      margin-right: 82px;
    }

    &-right {
      width: 220px;
      height: 404px;
    }

    &-title {
      height: 56px;
      line-height: 56px;
      margin-bottom: 30px;
      font-size: 20px;
      color: #333;
      font-weight: 500;
      letter-spacing: 0;
      background: url("~assets/img/merchants/dashed-1.png") 0 bottom no-repeat;
      background-size: contain;
    }

    .chart {
      text-align: center;

      &-item {
        width: 273px;
      }

      &-item2 {
        width: 430px;
      }

      &-title {
        width: 192px;
        margin: 0 auto;
        margin-bottom: 31px;
        font-size: 16px;
        color: #666;
        letter-spacing: 0;
      }

      &-content {
        padding-top: 22px;
      }

      &-data {
        width: 208px;
        margin-left: 25px;
      }

      &-data-item {
        width: 90px;
        height: 35px;
        margin-right: 28px;
        margin-bottom: 29px;
        background-color: red;

        &:nth-child(2n) {
          margin-right: 0;
        }

        &.last {
          margin-bottom: 0;
        }
      }
    }

    .fn {
      &-list {
        margin-top: 54px;
      }

      &-item {
        width: 220px;
        height: 70px;
        margin-bottom: 49px;
      }

      &-icon {
        margin-right: 13px;
      }

      &-detail {
        width: 147px;
      }

      &-title {
        font-size: 18px;
        color: #333;
        font-weight: 500;
      }

      &-desc1,
      &-desc2 {
        font-size: 12px;
        color: #666;
      }

      &-amount {
        font-family: DIN-Bold;
        font-size: 20px;
        color: #151515;
        letter-spacing: 0;
        font-weight: 500;
      }
    }
  }

  .rights {
    height: 1422px;
    margin-top: 115px;
    padding: 71px 33px 0 32px;
    background: url("~assets/img/merchants/right3-bg.png") center;
    background-size: cover;

    .rights-intro {
      width: 1125px;
      height: 642px;
      padding: 56px 29px 65px 30px;
      margin-bottom: 10px;

      background: url("~assets/img/merchants/rights-bg.png") center;
      background-size: cover;
    }

    .rights-header {
      margin-bottom: 29px;

      .rights-header-left {
        width: 148px;
        height: 44px;
        line-height: 44px;
        margin-top: 11px;
        margin-right: 28px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        background: url("~assets/img/merchants/rights-intro-bg.png") center;
        background-size: cover;
      }

      .rights-header-right {
        width: 824px;
        height: 66px;
        line-height: 33px;
        margin-right: 28px;
        font-size: 24px;
        color: #808080;
      }
    }

    .rights-list {
      width: 1066px;
      height: 426px;
    }

    .rights-item {
      width: 1066px;
      height: 140px;
      margin-bottom: 2px;

      &.last {
        margin-bottom: 0;
      }

      &-left,
      &-right {
        background-color: #fff;
      }

      &-left {
        padding: 23px 55px 23px 36px;
        margin-right: 1px;
      }

      &-right {
        padding: 41px 57px 40px 58px;
      }
    }

    .rights-icon {
      margin-right: 9px;
    }

    .rights-brief {
      width: 160px;
      margin-right: 1px;

      .rights-name {
        margin-top: 24px;
        font-size: 20px;
        font-weight: 600;
        color: #3F3F3F;
      }

      .rights-desc {
        margin-top: 1px;
        font-size: 16px;
        color: #666;
      }

      .splitline {
        width: 160px;
        height:2px;
        margin-top: 10px;
        border:none;
        border-top: 1px dashed #0A0A0A;
      }
    }

    .rights-detail {
      width: 708px;
      font-size: 22px;
      color: #414141;
      letter-spacing: 2px;
      line-height: 30px;
    }

    .splitarea {
      width: 992px;
      height: 78px;
      line-height: 78px;
      margin: 0 auto;
      text-align: center;
      color: #fff;

      .splitarea-title {
        width: 112px;
        height: 78px;
        line-height: 78px;
        margin-left: 40px;
        margin-right: 32px;
        text-align: center;
        font-size: 28px;
      }

      hr {
        margin-top: 39px;
        width: 400px;
        height: 1px;
        background-color: #fff;
        border: none;
        outline: none;
      }
    }

    .goodness {
      width: 1125px;
      height: 587px;
      padding: 92px 99px 130px 98px;

      background: url("~assets/img/merchants/goodness-bg.png") center;
      background-size: cover;

      &-item {
        width: 266px;
        height: 365px;
        margin-right: 65px;
        text-align: center;

        &.last {
          margin-right: 0;
        }
      }

      &-icon {
        width: 180px;
        height: 180px;
        margin: 0 auto 40px auto;
      }

      &-name {
        height: 37px;
        margin-bottom: 12px;
        font-size: 26px;
        color: #3B3B3B;
      }

      &-desc {
        height: 96px;
        font-size: 18px;
        color: #666;
        letter-spacing: 2px;
        line-height: 24px;
        text-align: left;
      }
    }
  }

  .aeo {
    position: relative;
    height: 283px;
    margin-top: 78.4px;
    padding-top: 99px;
  }

  .background {
    position: relative;
    height: 300px;
    margin-top: 123px;
    background-color: #FFFDE9;
    border-radius: 8px;

    .detail {
      padding: 65px 80px 35px 80px;
      font-size: 20px;
      line-height: 40px;
      color: #A69A72;
    }
  }

  .btn {
    display: block;
    width: 240px;
    height: 60px;
    margin: 66px auto 0 auto;
    line-height: 60px;
    font-size: 24px;
    color: #FD5414;
    text-align: center;
    background-color: #FAE604;
    box-shadow: 0 10px 20px 0 rgba(143,39,0,0.30);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #6095FF;
    }
  }
  
  .slide-leave-active,.slide-enter-active{
      transition:  all .55s linear; 
  }
  .slide-leave-active,
  .slide-enter{
      width:0px !important;
      opacity: 0;
  }
  .slide-leave-active {
    opacity: 0;
  }
  .slide-leave-to{
      width: 0;
      opacity: 0;
  }
</style>
