<template>
  <div class="content">
    <div class="banner">
      <a href="javascript:;">
        <img src="~assets/img/merchants/banner.png" alt="">
      </a>
    </div>
    <div class="navbar">
      <ul class="list clearfix">
        <!-- <RightItem class="pull-left" bg-img="right1.png" icon-img="right1-icon.png" title="1.聚诚通服务" desc="商机在手 订单不够"></RightItem> -->
        <li class="item pull-left">
          <img src="~assets/img/merchants/right1.png" alt="">
          <img class="right-icon" src="~assets/img/merchants/right1-icon.png" alt="">
          <div class="text">
            <div class="name">1.聚诚通服务</div>
            <div class="desc">商机在手 订单不够</div>
          </div>
        </li>
        <li class="item pull-left">
          <img src="~assets/img/merchants/right2.png" alt="">
          <img class="right-icon" src="~assets/img/merchants/right2-icon.png" alt="">
          <div class="text">
            <div class="name">1.聚诚通服务</div>
            <div class="desc">海量订单 无缝对接</div>
          </div>
        </li>
        <li class="item pull-left last">
          <img src="~assets/img/merchants/right3.png" alt="">
          <img class="right-icon" src="~assets/img/merchants/right3-icon.png" alt="">
          <div class="text">
            <div class="name">3.上线权益</div>
            <div class="desc">专属店铺 专业服务</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="section service">
      <RightTitle title="聚诚通服务"></RightTitle>
      <RightTitle title="聚诚通服务2"></RightTitle>
    </div>
    <div class="section chance"></div>
    <div class="section rights"></div>
    <div class="section aeo"></div>
    <div class="section background"></div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import axios from '~/plugins/axios'

  import RightItem from '~/components/merchants/right-item.component.vue'
  import RightTitle from '~/components/merchants/right-title.component.vue'

  // import Box from '~/components/index/Box.vue'
  // import NewsList from '~/components/index/NewsList.vue'
  // import Logistics from '~/components/index/Logistics.vue'
  // import Finance from '~/components/index/Finance.vue'

  // 指数
  // import PriceIndex from '~/components/PriceIndex.vue'

  // 热门商品
  // import Hot from '~/components/index/Hot.vue'

  // 登录信息
  import LoginInfo from '~/components/index/LoginInfo'

  // 采购
  // import Purchase from '~/components/index/Purchase.vue'

  // 聚贸平台地址
  import platform from '~/config/platform'

  const {data} = require('~/mock/indexNews.json')

  export default {
    name: 'index',
    components: {
      // Toolnav,
      // Box,
      // NewsList,
      // Logistics,
      // PriceIndex,
      // Hot,
      // Purchase,
      LoginInfo,
      RightTitle,
      // Finance
    },
    data () {
      return {
        platform: platform,
        industryNews: data.industuryNewsVo || [],
        dynamicNews: data.jumoreDynamicVo || [],
        activeName: 'first',
        lists: [
          {name: '今日钢价', target: '#t1'},
          {name: '热门商品', target: '#t2'},
          {name: '采购信息', target: '#t3'},
          {name: '物流服务', target: '#t4'},
          {name: '金融服务', target: '#t5'},
          {name: '新闻动态', target: '#t6'}
        ]
      }
    },

    async asyncData () {
      let cityCode = -1
      const [news, carousels, hotShoper, fastOpenShopAdv, adv1, adv2, purchases, adlist, {indexs, citys}] = await Promise.all([
        // 新闻动态
        axios.get('/index/news').then(data => data.data.data),

        // 头部幻灯片
        axios.get('/index/carousel').then(data => data.data.data),

        // 热门商家
        axios.get('/index/hotAd').then(data => data.data.data),

        // 快捷开店横幅广告
        axios.get('/index/fastOpenShop').then(data => data.data.data),

        // 广告一
        axios.get('/index/floorAd1').then(data => data.data.data),

        // 广告二
        axios.get('/index/floorAd2').then(data => data.data.data),

        // 采购信息
        axios.get('/index/purchase').then(data => data.data.data),

        // 物流需求/特惠线路/热门仓储/金融服务
        axios.get('/index/adlist').then(data => data.data.data || {}),

        // 指数城市
        axios.get('/index/indexCity').then((data) => data.data.data).then(citys => {
          if (Array.isArray(citys) && citys.length > 0) {
            cityCode = citys[0].code

            return axios.get('/index/indexs', {params: {cityCode: citys[0].code}}).then(indexs => {
              return {
                indexs: indexs.data.data,
                citys
              }
            })
          } else {
            return {citys: citys, indexs: {}}
          }
        })
      ])

      console.log(fastOpenShopAdv)

      return {
        news,
        carousels,
        indexs,
        citys,
        hotShoper,
        adv1,
        adv2,
        purchases,
        cityCode,
        fastOpenShopAdv,
        adlist
      }
    },

    computed: {},

    methods: {
      /**
       * 根据城市code 获取对应的指数
       * @param city  { code: String }  城市信息
       * @returns {Promise.<void>}
       */
      async changeCity (city) {
        this.cityCode = city.code

        const {indexs} = await axios.get('/index/indexs', {params: {cityCode: city.code}}).then(data => data.data.data)
        this.indexs = indexs
      },

      // 登录下方的消息类型切换
      changeNoticeType (index) {
        console.log(index)
        this.noticeType = index
      },

      /**
       * 切换显示幻灯片
       * @param index Number  幻灯片对应的索引
       */
      changeSlider (index) {
        this.$refs.carousel.setActiveItem(index)
      }
    },
  }
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>

  @import "../../element-variables";

  .site-main {
    width: 1190px;
    min-width: $--website-width;
    margin: 0 auto;
  }

  .content {
    min-width: $--website-width;
  }

  .banner {
    background-color: #FD5414;

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
        font-size: 14px;;
      }
    }
    
  }
</style>
