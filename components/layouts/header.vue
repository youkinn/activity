<template lang="html">
<div id="Top">
  <div class="container">
    <div class="clearfix">
      <div class="jm-header-content-left pull-left clearfix"> 
        <div class="l" :class="{'welcome-text': !user.userId}">
          <span v-if="!user.userId" class="ng-binding">欢迎来到聚贸电子商务平台</span>
          <span v-if="user.userId" class="ng-binding">欢迎您</span></div>
          <span class="userinfobox" v-if="user.userId">
            <span class="name">{{user.realName}}<span class="line"></span></span>
            <div class="logininfodrog" >
              <div class="pr">
                <img class="img-responsive" v-if="user.imageUrl!=''&&user.imageUrl!=undefined" :src="user.imageUrl | imgCdn">
                <img class="img-responsive" v-if="(user.imageUrl==''||user.imageUrl==undefined) && (user.sex == 0 || user.sex == 2 )" src="~assets/img/userImg.png">
                <img class="img-responsive" v-if="(user.imageUrl==''||user.imageUrl==undefined) && user.sex == 1" src="~assets/img/userImg2.png">
                  
                <div class="userbox">
                  <p class="p1" :title="user.companyName">{{user.companyName}}</p>
                  <p class="p2">{{user.roleName}}</p>
                  <p class="pimg">
                    <i class="i_yrz" v-if="user.validStatus==2" title="企业已认证"></i>
                    <i class="i_wrz" v-if="user.validStatus!=2&&user.validStatus!=undefined" title="企业未认证"></i>
                    <img class="imgicon" v-if="user.vipUserLevel=='2'" title="黄金会员" src="~assets/img/jcthy1_1.png" width="20">
                    <img class="imgicon" v-if="user.vipUserLevel=='3'" title="铂金会员" src="~assets/img/jcthy1_2.png" width="20">
                  </p>
                  <p class="p3">
                    <a :href="`${centerAddress}/index?forwardUrl=/vip/vipList`"  class="newa" target="_blank">账号管理</a>
                    <a :href="`${userCenterAddress}/logout?returnUrl=${fullpath}`" class="class">退出</a>
                  </p>
                </div>
                </div>
            </div>
          </span>
          <div class="l"><a @click.prevent="showLogin" class="header-margin-l-15" v-if="!user.userId">请登录</a></div>
          <div class="l"  v-if="!user.userId"><span class="s"></span></div>
          <div class="l"><a :href="`${centerAddress}/register/register?platformCode=1005&refUrl=${fullpath}`" v-if="!user.userId" target="_blank">免费注册</a>
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
  @import "../../element-variables";
  @import "../../assets/scss/main.scss";

  .jm-header-content-left .l{ 
    float:left;
    height: 32px;
    line-height: 32px;
  }
  .jm-header-content-left .s{ display: block; margin: 11px 10px 0; width: 1px; height: 11px; background: #dedede;}
  .i_yrz{ display: inline-block; width: 18px; height: 20px; background: url(~assets/img/jcticon2.png) no-repeat; margin-right: 5px; vertical-align: middle;}
  .i_wrz{ display: inline-block; width: 18px; height: 20px; background: url(~assets/img/jcticon1.png) no-repeat; margin-right: 5px;vertical-align: middle;}
  .userinfobox{
          float: right;
    height: 32px;
    position: relative;
    text-align: center;
  }
  .header-margin-l-15 {
    cursor: pointer;
  }
  .userinfobox .name{
    float: left;
    display: inline-block;
    padding:0 10px;
    height: 32px;
    line-height: 30px;
    border:1px solid #f5f5f5;
    color: #f64f38;
    margin-left: 10px;
  }
  .userinfobox .name .line{
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 1px;
    left: 0;
    background: #f5f5f5;
    z-index: 10;
  }
  .userinfobox:hover .name{
    background: #fff;
    border:1px solid #dedede;
    border-bottom:1px solid #fff;
  }
  .userinfobox:hover .name .line{
    background: #fff;
  }
  .userinfobox:hover .logininfodrog{
    display: block;
  }
  .logininfodrog{
    position: absolute;
    top:30px;
    left:-50px;
    background:#ffffff;
    border:1px solid #dedede;
    border-radius:0 0 2px 2px;
    width:248px;
    font-size: 14px;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    text-align: left;
    z-index: 99;
    display: none;
	}
  .logininfodrog .pr{ position: relative;}
  .logininfodrog .img-responsive{
      position: absolute;
      top: 25px;
      left: 23px;
      width: 52px;
      height: 52px;
  }
  .logininfodrog .userbox{
      padding: 20px 10px 10px 87px;
  }
  .logininfodrog .userbox .p1,.logininfodrog .userbox .p2{
      display: block;
      overflow: hidden;
      height: 20px;
      line-height: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .logininfodrog .userbox .p1{ margin-bottom: 4px;}
  .logininfodrog .userbox .p2{ margin-bottom: 4px;}
  .logininfodrog .userbox .pimg{  line-height: 0; margin-bottom: 4px;}
  .logininfodrog .userbox .pimg .imgicon{ vertical-align: middle;}
  .logininfodrog .userbox .newa{
      margin: 0;
      margin-right:20px;
      font-size:14px;
      color:#f64f38;
  }
  .ng-binding {
    height: 32px;
    line-height: 32px;
  }
  .welcome-text {
    margin-right: 51px;
  }

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

      img {
        width: 54px;
        height: 54px;
      }
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
