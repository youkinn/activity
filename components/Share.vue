<template>
  <div class="drop-box" :class="{'share-card': type === 'card'}">
    <span class="icon-box active" v-if="type === 'card'">
      <i class="icon icon-share"></i>
    </span>

    <div class="share-box">
      <ul class="clearfix">
        <li v-for="item in shares" :key="item.type" class="share-item">

          <i class="icon" :class="`icon-${item.type}` " @click="share(item)">
            <Clipboard :value="id" v-if="item.type === 'copy'"></Clipboard>
          </i>

          <div class="tooltip" v-if="item.type === 'wechat'">
            <p class="wx">{{ item.desc }}</p>
            <div :id="`${id}`" ref="">
            </div>
          </div>

          <div class="tooltip" v-else>{{ item.desc }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Clipboard from '~/components/Clipboard'

  export default {
    props: {
      type: {
        type: String
      },

      codeOption: {
        type: Object,

        'default'() {
          return {
            width: 84,
            height: 84
          }
        }
      },

      dataShare: {
        type: Object,
        require: true
      }
    },

    data () {

      return {
        shares: [
          {type: 'copy', desc: '复制链接'},
          {type: 'qq', desc: '分享到QQ'},
          {type: 'wechat', desc: '微信扫一扫'},
          {type: 'weibo', desc: '分享到微博'},
          {type: 'qzone', desc: '分享到QQ空间'}
        ],

        id: `code_${Math.floor(Math.random() * 9999999999)}`,

        shareOption: {}
      }
    },

    mounted () {
      this.wechat(this.getOptions())
    },

    methods: {
      /**
       * 返回需要分享的信息
       * @returns Object
       */
      getOptions () {
        return Object.assign({
          url: window.location.href
        }, this.shareOption, this.dataShare)
      },

      /**
       * 弹窗分享
       * @param url
       */
      pop (url) {
        // set left and top position
        let popupWidth = 600
        let popupHeight = 500

        // fix dual screen mode
        let dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left
        let dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top
        let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
        let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

        // calculate top and left position
        let left = ((width / 2) - (popupWidth / 2)) + dualScreenLeft
        let top = ((height / 2) - (popupHeight / 2)) + dualScreenTop

        // show popup
        let shareWindow = window.open(url, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + popupWidth + ', height=' + popupHeight + ', top=' + top + ', left=' + left)

        // Puts focus on the newWindow
        if (window.focus) {
          shareWindow.focus()
        }
      },

      share (item) {
        if (item.type === 'copy') { return }

        let option = this.getOptions()
        let url = this[item.type](option)

        if (item.type !== 'wechat') {
          this.pop(url)
        }
      },

      /**
       * 微博URL
       * @param option
       * @returns {string}
       */
      weibo (option) {
        return 'http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(option.title) + '&url=' + encodeURIComponent(option.url) + '&pic=' + encodeURIComponent(option.image)
      },

      /**
       * QQ空间分享
       * @param option
       * @returns {string}
       */
      qzone (option) {
        return 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + encodeURIComponent(option.title) + '&url=' + encodeURIComponent(option.url) + '&pics=' + encodeURIComponent(option.image) + '&desc=' + encodeURIComponent(option.description)
      },

      qq (option) {
        return 'http://connect.qq.com/widget/shareqq/index.html?title=' + encodeURIComponent(option.title) + '&url=' + encodeURIComponent(option.url) + '&pics=' + encodeURIComponent(option.image) + '&desc=' + encodeURIComponent(option.description)
      },


      wechat (option) {
        new QRCode(this.id, this.codeOption).makeCode(option.url + this.id)
      }

    },

    components: {
      Clipboard
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  // 下拉卡片式
  .share-card {
    .icon-box {
      padding: 5px 10px;
      border: 1px solid #fff;
      text-align: center;
      background-color: #fff;
      display: block;
      position: relative;
      z-index: 3;
    }

    .icon-share {
      width: 17px;
      height: 17px;
    }
    .share-box {
      /*display: none;*/
      visibility: hidden;
      width: 202px;
      border: 1px solid #dedede;
      padding: 5px 0;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #fff;
      transform: translateY(-1px);
    }
    .share-item {
      padding: 5px 10px;
    }

    &:hover {
      .icon-box {
        border-color: #dedede;
        border-bottom-color: #fff;
        display: block;
      }

      .share-box {
        /*display: block;*/
        visibility: visible;
      }
    }
  }

  .share-item {
    padding: 5px;
    float: left;
    position: relative;
    cursor: pointer;
    color: #6e6e6e;

    &:hover {
      > .tooltip {
        visibility: visible;
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  }

  .tooltip {
    padding: 6px 10px;
    border: 1px solid #dedede;
    background-color: #fff;
    font-size: 12px;
    position: absolute;
    top: 35px;
    white-space: nowrap;
    left: 50%;
    transform: translate(-50%, 15px);
    border-radius: 3px;
    visibility: hidden;
    transition: all .6s;
    opacity: 0;
    text-align: center;

    .wx {
      padding-bottom: 5px;
    }

    &:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      top: -5px;
      background-color: #fff;
      left: 50%;
      transform: translateX(-50%) rotate(-135deg);
      border-right: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    background-color: pink;
  }
</style>
