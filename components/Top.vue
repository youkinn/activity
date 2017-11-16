<template lang="html">
<div id="Top">
  <div class="container">
    <div class="clearfix">
      <div class="login-info pull-left">
        <div class="site-nav" v-if="!user.userId">
          <span class="welcome-text">您好，欢迎来到聚贸煤炭平台!</span>
          <ul class="nav">
            <li>
              <a :href="centerAddress" @click.prevent="showLogin()">请登录</a>
            </li>
            <li>
              <a :href="`${centerAddress}/register/register?platformCode=1001&refUrl=${fullpath}`" target="_blank">免费注册</a>
            </li>
          </ul>
        </div>

        <div class="user" v-if="user.userId">
          <span>欢迎您</span>
          <div class="user-info">
            <i class="user-name">{{user.realName}}</i>
            <div class="content">
              <div class="img-box">
                <img class="img-responsive" v-if="user.imageUrl!=''&&user.imageUrl!=undefined" :src="user.imageUrl | imgCdn">
                <!--<img class="img-responsive" v-if="user.imageUrl==''||user.imageUrl==undefined" src="~assets/img/common/userImg.png">-->
              </div>
              <div class="compny-info">
                <h4 class="compny-name text-overflow">
                  <span :title="user.companyName">{{user.companyName}}</span>
                </h4>

                <div class="text-overflow">
                  <span class="text-ligingray">岗位：</span>{{user.roleName}}
                </div>

                <div class="actions">
                  <a :href="`${centerAddress}/index?forwardUrl=/vip/vipList`">帐号管理</a>
                  <a :href="`${userCenterAddress}/logout?returnUrl=${fullpath}`" class="pull-right exit">退出</a>
                </div>
              </div>
            </div>
          </div>
          <a :href="`${userCenterAddress}/logout?returnUrl=${fullpath}`">退出</a>
        </div>
      </div>

      <div class="site-nav pull-right">
        <ul class="nav">
          <li>
            <a :href="platform.CONSTANT_MALL_URL" target="_blank">聚贸总站</a>
          </li>
          <li>
            <a :href="platform.CONSTANT_CENTER_URL" target="_blank">我的聚贸</a>
          </li>

          <li>
            <a :href="`${platform.CONSTANT_SHOPPING_CART_URL}/shoppingCart?backUrl=${platform.CONSTANT_SHOPPING_CART_URL}`">
              <i class="icon icon-doc"></i>我的采购单</a>
          </li>

          <li>
            <a :href="`${platform.CONSTANT_CENTER_URL}/index?forwardUrl=/favorite/favoriteList`"><i class="icon icon-start"></i>我的收藏</a>
          </li>

          <li>
            <a :href="platform.JCT_ADDRESS" target="_blank"><i class="icon icon-jct"></i>聚诚通</a>
          </li>
          <li class="drop-down">
            <a href="">客服电话 <i class="icon icon-arrow-down"></i></a>
            <div class="content contact-phone">
              <p>国内： <span>{{ website.localPhone }}</span></p>
              <p>海外： <span>{{ website.globalPhone }}</span></p>
            </div>
          </li>
          <li class="drop-down">
            <a href="">网站导航 <i class="icon icon-arrow-down"></i></a>
            <div class="content website-nav">
              <div :class="{'platform-site':index==0,'platform-service':index==1,'jumore-feature':index==2}" v-for="(item, index) in siteNavsData" :key="index">
                <h2 class="title">{{item.typeName}}</h2>
                <ul>
                  <li v-for="(nav,navIndex) in item.navs"><a :href="nav.url"  target="_blank">{{nav.name}}</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li alt="JUMORE 聚贸国际站">
            <a href="https://www.jumoreglobal.com/" target="_blank"><i class="icon icon-en"></i>JUMORE 聚贸国际站</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import login from '~/plugins/checkLogin'
import axios from '~/plugins/axios'
import address from '~/config/index'
import platform from '~/config/platform/index'
import siteNavs from '~/config/links'
import website from  '~/config/website'

export default {
  data () {
    return {
      fullpath: '',                                        // 页面来源
      centerAddress: address.CENTER_ADDRESS,               // 中台地址
      userCenterAddress: address.USERCENTER_ADDRESS,       // 认证中心
      platform: platform,                                  // 认证中心
      siteNavsData: siteNavs,                              // 聚贸其他平台导航
      website: website                                     // 网站信息
    }
  },
  mounted () {
    this.fullpath = location.href
    login.hasLogin()
      .then(data => {
        return axios.get(`/userInfo`)
          .then(data => {
            return data.data.data || {}
          })
      }, data => {
       console.log('top get user Not Login')
      })
      .then(data => {
        this.$store.commit('SET_USER', data || {})
      })
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

  methods: {
    // 显示登录
    showLogin (url) {
      if(url!=undefined){
        this.$store.commit('SET_OPEN', {opend: true, openurl: url})
      }else{
        this.$store.commit('SET_OPEN', {opend: true})
      }
    }
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";
  @import "../assets/scss/main.scss";

  #Top {
    font-size: 12px;
    color: $--color-text-secondary;
    background: #f5f5f5;
    position: relative;
    z-index: 21;

    a:hover {
      color: $--color-primary;
    }
  }

  .login-info{
    width: 25%;
  }

  .user-info {
    display: inline-block;
    margin: 0 10px;
    position: relative;
    height: 30px;

    &:hover {
      .user-name {
        z-index: 11;
        background-color: #fff;
        border-color: #ddd;
        border-bottom-color: transparent;
        position: relative;
      }

      .content {
        display: block;
      }
    }

    .user-name {
      font-style: normal;
      border: 1px solid transparent;
      display: block;
      padding: 0 10px;
      line-height: 30px;
    }

    .content {
      position: absolute;
      width: 250px;
      border: 1px solid #ddd;
      background-color: #fff;
      left: -48px;
      padding: 20px;
      z-index: 10;
      top: 100%;
      display: none;
    }

    .img-box {
      width: 54px;
      height: 54px;
      float: left;
      border-radius: 100%;
      margin-right: 13px;
    }


    .compny-name {
      font-weight: normal;
      color: #6e6e6e;
      line-height: 24px;
    }

    .actions {
      margin-top: 10px;

      a:hover {
        color: $--color-primary;
      }
    }
    .compny-info {
      width: 140px;
      float: right;
      font-size: 14px;
    }

    .exit {
      margin-right: 28px;
    }
  }

  .welcome-text {
    line-height: 30px;
  }

  .separator:after {
    height: 12px;
    content: ' ';
    left: -2px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    position: absolute;
    background-color: #ddd;
  }

  .site-nav {
    @extend .clearfix;
    .nav {
      float: right;
      height: 30px;

      > li + li > a {
        @extend .separator;
      }

      .icon {
        transition: transform .3s;
        transform: rotate(0);
      }

      @extend .clearfix;

      .drop-down {

        &:hover {
          background-color: #fff;

          border-color: #ddd;
          border-bottom-color: #fff;
          z-index: 3;
          > a {

            z-index: 10;
            background-color: #fff;
          }

          > a:after {
            background-color: transparent;
          }
          .icon {
            transform: rotate(180deg);
          }

          .content {
            display: block;
          }
        }

        .content {
          border: 1px solid #ddd;
          background-color: #fff;
          position: absolute;
          top: 29px;
          right: -1px;
          display: none;
          z-index: 3;
        }

      }

      > li {

        border: 1px solid transparent;
        float: left;
        position: relative;

        > a {
          padding: 0 10px;
        }

        a {
          display: block;
          color: inherit;
          line-height: 30px;
          vertical-align: text-bottom;
          position: relative;
          border-color: #fff;
        }
      }
    }
  }

  .contact-phone {
    left: -1px;
    width: 216px;
    padding: 8px 20px;

    p {
      line-height: 24px;
    }
  }

  // 网站导航
  .website-nav {
    width: 712px;
    padding: 20px 0 20px 14px;

    .title {
      color: #6e6e6e;
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 10px;
    }
    ul {
      overflow: hidden;
      margin-left: -20px;
    }

    li {
      float: left;
      width: 72px;
      line-height: 30px;
      margin-left: 20px;
    }
  }

  .platform-service, .platform-site, .jumore-feature {
    float: left;
    padding-left: 24px;
  }

  .platform-site {
    width: 296px;
    border-right: 1px solid #dedede;
  }

  .platform-service {
    width: 190px;
    border-right: 1px solid #dedede;
  }

  .jumore-feature {
    width: 190px;
  }
</style>
