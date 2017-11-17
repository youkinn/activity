<template>
  <footer id="footer">
    <div class="jm-footer-div container">
      <!-- isShowView  -->
      <div class="jm-footer-top-div">
        <div class="jm-footer-container-div">
          <div class="row jm-footer-row jm-content clearfix">

            <div v-for="(item, index) in footer" :key="index" :class="`footer${index+1}`">
              <ul class="jm-footer-ul jm-footer-ul-live">
                <li class="jm-footer-title-li">
                  <span :title="item.categoryName">{{ item.categoryName }}</span>
                </li>

                <li class="jm-footer-content-li text-overflow"
                    v-for="(item2,index2) in item.articleContent"
                    :key="index2"
                    v-if="index2<4">
                  <a :href="`${platform.CONSTANT_MALL_URL}/help/${item.categoryCode}/${item2.articleContentId}`"
                    
                    target="_blank"
                    :title="item2.name">
                    {{item2.name}}
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer4">
              <ul class="jm-footer-ul">
                <li class="jm-footer-title-li clearfix">
                  <img src="~assets/img/footer_kf.png" class="kfimg">
                  <div class="pbox">
                    <p class="p1">{{CONSTANT_WORKING_HOURS_DATA}}</p>
                    <p class="p2">{{CONSTANT_CUSTOM_SERVICE_DATA}}</p>
                  </div>
                </li>
                <li class="jm-footer-content-li">
                  <span>传真号码：</span>
                  <span>{{CONSTANT_FAX_NUMBER_DATA}}</span><br>
                  <span>电子邮箱：</span>
                  <a class="mail" :href="`mailto:${CONSTANT_EMAIL_DATA}`">{{CONSTANT_EMAIL_DATA}}</a>
                </li>
              </ul>
            </div>
            <div class="footer5">
              <div class="jm-footer-li-img">
                <img alt="" src="~assets/img/footer-QRcode.png"/>
                <p class="gztext">关注聚贸公众号</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="jm-footer-bottom-div">
        <div class="jm-footer-container-div">
          <div class="text-align-center">
            <p class="jm-footer-bottom-p">
              <a :href="platform.CONSTANT_MALL_URL" target="_blank">聚贸官网</a>
              <a :href="platform.CONSTANT_JUMORE_URL" target="_blank">聚贸店上平台</a>
              <a :href="platform.CONSTANT_JUMORE_JMZX_URL" target="_blank">聚贸资讯</a>

              <span class="mall" >COPYRIGHT @ <a :href="platform.CONSTANT_MALL_URL" target="_blank">聚贸总站 {{ mall }}</a></span>
              <span>{{beian}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Vue from 'vue'
  import axios from '~/plugins/axios'
  import platform from '~/config/platform/index'
  import vuex from 'vuex'
  import website from '~/config/website'
  // const {data} = require('~/mock/footer.json')
  // CONSTANT_MALL_URL

  export default {
    data () {
      return {
        mall: 'www.jumore.com',
        beian: "浙ICP备15010831号-2",
        CONSTANT_CUSTOM_SERVICE_DATA: website.localPhone,
        CONSTANT_ABROAD_SERVICE_DATA: website.globalPhone,
        CONSTANT_WORKING_HOURS_DATA: `（${website.workTime}）`,
        CONSTANT_FAX_NUMBER_DATA: website.fax,
        CONSTANT_EMAIL_DATA: website.email,

        footer: this.$store.state.footer.footer,
        platform: platform
      }
    },
    computed: {
      /*footer () {
        return this.$store.state.footer.footer
      }*/

    },
    methods: {
      //跳转至帮助中心
      goHelp (categoryCode, articleContentId) {
        //$state.go('help', {categoryCode: categoryCode, articleContentId: articleContentId});
        //var url="https://www.jumore.com/help/"+categoryCode+"/"+articleContentId;
        var url = "/help?categoryCode=" + categoryCode + "&articleContentId=" + articleContentId;
        window.open(url)
      }
    }

  }
</script>

<style lang="scss" scoped>

  @import "../../element-variables";

  #footer {
    color: #6e6e6e;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-width: $--website-width;
  }

  .help-list {
    padding: 35px 0;
  }

  .help-nav {
    li {
      line-height: 18px;
    }
  }

  .mail{
    &:hover{
      color: #6e6e6e;
    }
  }

  .last {
    overflow: hidden;
    ul {
      float: left;
    }

    .jm-code {
      float: right;
    }
  }

  .copyright {
    p {
      margin-bottom: 5px;
    }

    span {
      padding-right: 20px;
    }
  }

  .footer1 {
    float: left;
    width: 178px;
  }

  .footer2 {
    float: left;
    width: 195px;
  }

  .footer3 {
    float: left;
    width: 243px;
  }

  .footer4 {
    float: left;
    width: 313px;
  }

  .footer5 {
    float: left;
    width: 261px;
    text-align: center;
  }

  .jm-footer-div {
    width: 100%;
  }

  .jm-footer-top-div {
    width: 100%;
    height: 252px;
    padding-top: 59px;
  }

  .jm-footer-bottom-div {
    width: 100%;
    height: 52px;
    line-height: 52px;
    color: #343e48;
    font-size: 14px;
    background: #eaeaea;
  }

  .jm-footer-container-div {
    width: 1190px;
    margin: 0 auto;
  }

  .text-align-center {
    text-align: center;
  }

  .jm-footer-ul {
  }

  .gztext {
    font-size: 14px;
    color: #434f5a;
  }

  .jm-footer-ul-live {
    min-height: 132px;
    /*border-right: 1px solid $footer-color3;*/
  }

  .jm-footer-title-li {
    font-size: 18px;
    text-align: left;
    margin-bottom: 20px;
    .kfimg {
      float: left;
    }
    .pbox {
      float: left;
      padding-left: 15px;
    }
    .p1 {
      font-size: 14px;
      color: #343e48;
      line-height: 20px;
    }
    .p2 {
      line-height: 32px;
    }
  }

  .jm-footer-content-li {
    font-size: 12px;
    text-align: left;
    margin-top: 10px;
    a {
      color: #343e48;
    }
  }

  .jm-footer-li-img {
    width: 172px;
    height: 172px;
    padding-top: 18px;
    padding-left: 18px;
    img {
      width: 88px;
      height: 88px;
    }
  }

  .jm-footer-li-span {
    text-align: center;
    margin-top: 10px;
    span {
      font-size: 18px;
      color: #343e48;
    }
  }

  .jm-footer-bottom-p {
    a {
      color: #343e48;
      margin-left: 28px;
    }
  }

  .jm-wid-hei {
    width: 124px;
    height: 47px;
  }

  .jm-index-footer {
    height: 57px;
    margin-top: -10px;
  }

  .jm-index-footer img {
    margin-right: 5px;
  }
  .mall {
    margin-right:50px;
    margin-left: 50px;
    a {
      margin-left: 0;
    }
  }
</style>
