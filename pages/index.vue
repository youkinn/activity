<template>
  <div>
    <div id="slider">
      <el-carousel :autoplay="false">
        <el-carousel-item v-for="item in carousels" :key="item.adId">
          <a :href="item.path" :title="item.name" target="_blank">
            <img v-lazyload.cdn="item.picture" :alt="item.name"/>
          </a>
        </el-carousel-item>
      </el-carousel>

      <LoginInfo class="loginInfo"></LoginInfo>
    </div>


    <section class="container">
      <!--今日钢价-->
      <Box id="t1" title-name="今日钢价" title-icon="index" class="box-price">
        <ul class="citys" slot="actions">
          <li @click="changeCity(city)"
              v-for="city in citys"
              :class="{'active': city.code === cityCode}">
            {{ city.cityName }}
          </li>
        </ul>

        <div class="price-index-box">
          <PriceIndex class="price-index" :key="i" v-for="i in 4"></PriceIndex>
        </div>
      </Box>

      <div class="open-shop" v-if="fastOpenShopAdv.length > 0">
        <img v-lazyload.cdn="fastOpenShopAdv[0].picturePath" :alt="fastOpenShopAdv[0].name" />
        <!--<img  src="~/assets/img/open-shop.jpg" alt="快速开店"/>-->
        <a href="" class="open-shop__btn">开通店铺</a>
      </div>

      <!--热门商品-->
      <Box id="t2" title-name="热门商品" title-icon="hot">
        <Hot :shoper="hotShoper"></Hot>
      </Box>

      <!--广告一-->
      <div class="adv" v-if="adv1.length > 0">
        <a :href="adv1[0].path" :title="adv1[0].name">
          <img v-lazyload.cdn="adv1[0].picturePath" :alt="adv1[0].name">
        </a>
      </div>

      <!--采购信息-->
      <Box id="t3" title-name="采购信息" title-icon="purchase">
        <Purchase class="purchase" :purchase="purchase" v-for="purchase in purchases"
                  :key="purchase.demandId"></Purchase>
      </Box>

      <!--物流服务-->
      <Box id="t4" title-name="物流服务" title-icon="car">
        <Logistics :data="adlist.logisticsService"></Logistics>
      </Box>

      <!--金融-->
      <Box id="t5" title-name="金融服务" title-icon="dollar">

        <a slot="actions" :href="`${platform.CONSTANT_JUMORE_JIN_URL}`">更多 <i class="icon icon-more-primary"></i></a>

        <Finance :data="adlist.financeAd"></Finance>
      </Box>

      <!--广告-->
      <div class="adv" v-if="adv2.length > 0">
        <a :href="adv2[0].path" :title="adv2[0].name">
          <img v-lazyload.cdn="adv2[0].picturePath" :alt="adv2[0].name">
        </a>
      </div>

      <!--新闻动态-->
      <Box id="t6" class="news" title-name="新闻动态" title-icon="book">

        <!--幻灯片-->
        <div class="news-silder">
          <el-carousel class="slider" arrow="never" height="260px" ref="carousel">
            <el-carousel-item v-for="item in news.industuryArticleVo" :key="item.articleContentId">
              <img v-lazyload.cdn="item.picture" :alt="item.name" :title="item.name"/>
              <h3 class="title" :title="item.name">{{ item.name }}</h3>
            </el-carousel-item>
          </el-carousel>

          <ul class="thumbnail">
            <li v-for="(item, index) in news.industuryArticleVo"
                :title="item.name"
                @mouseenter="changeSlider(index)"
                :key="item.articleContentId">
              <a href="">
                <img v-lazyload.cdn="item.picture" :alt="item.name"/>
              </a>
            </li>
          </ul>
        </div>

        <!--行业资讯-->
        <NewsList
          class="industry-news"
          title-name="行业资讯"
          :data="news.industuryArticleVo">
        </NewsList>

        <!--聚贸动态-->
        <NewsList
          class="dynamic-news"
          title-name="聚贸动态"
          :data="news.newsArticleVo">
        </NewsList>
      </Box>

      <Toolnav :data="lists"></Toolnav>
    </section>

  </div>

</template>

<script>
  import Vue from 'vue'
  import axios from '~/plugins/axios'

  import Toolnav from '~/components/Toolnav.vue'

  import Box from '~/components/index/Box.vue'
  import NewsList from '~/components/index/NewsList.vue'
  import Logistics from '~/components/index/Logistics.vue'
  import Finance from '~/components/index/Finance.vue'

  // 指数
  import PriceIndex from '~/components/PriceIndex.vue'

  // 热门商品
  import Hot from '~/components/index/Hot.vue'

  // 登录信息
  import LoginInfo from '~/components/index/LoginInfo'

  // 采购
  import Purchase from '~/components/index/Purchase.vue'

  // 聚贸平台地址
  import platform from '~/config/platform'

  const {data} = require('~/mock/indexNews.json')

  export default {
    name: 'index',
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
    components: {
      Toolnav,
      Box,
      NewsList,
      Logistics,
      PriceIndex,
      Hot,
      Purchase,
      LoginInfo,
      Finance
    }
  }
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>

  @import "../element-variables";

  #slider {
    background-color: #0b89f2;
    height: 380px;
    position: relative;

    .el-carousel {
      height: 380px;
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;

    }
  }

  .loginInfo {
    width: 240px;
    position: absolute;
    z-index: 2;
    top: 0;
    right: calc((100% - 1190px) / 2);
  }

  .news {
    overflow: hidden;
  }

  .industry-news, .dynamic-news {
    float: left;
    width: 390px;
  }

  .industry-news {
    padding: 0 20px;
  }

  // 今日钢价

  .price-index-box {
    padding: 40px 0;
    margin-left: -10px;
    overflow: hidden;
  }

  .box-price {
    .citys {
      overflow: hidden;
      li {
        cursor: pointer;
        float: left;
        width: 58px;
        text-align: center;
        max-width: 100px;
        padding: 4px 8px;
        height: 26px;
        color: #6e6e6e;
        border-radius: 2px;

        &:hover {
          color: $--color-primary;
        }

        &.active {
          background-color: $--color-primary;
          color: #fff;
        }
      }
    }
  }

  .price-index {
    float: left;
    margin-left: 54px;
  }

  // 采购
  .purchase {
    float: left;
    margin: 0 0 10px 10px;
  }

  .news-silder {
    width: 390px;
    float: left;

    .slider {
      height: 260px;
      margin-bottom: 10px;
    }

    .title {
      height: 34px;
      line-height: 34px;
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      width: 100%;
      background-color: rgba(0, 0, 0, .6);
    }

    .thumbnail {
      margin-left: -2px;
      overflow: hidden;
      li {
        width: 96px;
        height: 64px;
        background-color: pink;
        margin-left: 2px;
        float: left;
      }
    }
  }

  .tool-bar {
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .adv {
    margin-top: 20px;
    width: 100%;
    height: 100px;
    text-align: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .open-shop {
    margin-top: 20px;
    width: 100%;
    height: 150px;
    position: relative;
  }

  .open-shop__btn {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 90px;
    height: 108px;
    text-indent: -9999px;
    overflow: hidden;
    background: url("~assets/img/open-shop_btn.png") no-repeat center;
  }
</style>
