<template>
  <div class="jm-advert" v-show="isShow">
    <div class="jm-advert-container clearfix">
      <div class="jm-advert-left pull-left">
        <div class="jm-advert-desc1">现在加入<span class="f30">聚诚通</span>，即享<span class="f38">立减券</span>，<span class="48">50</span>个首页<span class="f36">橱窗广告</span>限量领</div>
        <div class="jm-advert-desc2 clearfix">
          <div class="pull-left">万千优质商家火热上线中...</div>
          <!-- <div class="pull-right">详情请咨询：400-860-0550</div> -->
        </div>
      </div>
      <div class="jm-advert-right jm-advert-btn pull-right" @click.prevent="handle">立即入驻</div>
      <img @click="hide" src="~assets/img/merchants/close.png" alt="" class="jm-advert-close" width="19" height="19">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      always: true,
      isShow: false,
    };
  },
  methods: {
    hide(){
      this.always = false;
      this.isShow = false;
    },
    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },
    //文档的总高度
    getScrollHeight() {
      var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
      }
      scrollHeight =
        bodyScrollHeight - documentScrollHeight > 0
          ? bodyScrollHeight
          : documentScrollHeight;
      return scrollHeight;
    },
    //浏览器视口的高度
    getWindowHeight() {
      var windowHeight = 0;
      if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
      } else {
        windowHeight = document.body.clientHeight;
      }
      return windowHeight;
    },
    handle (){
      this.$emit('click');
    },
  },
  mounted() {
    const docHeight = document.body.offsetHeight;
    let scrollTop = 0;
    window.addEventListener("scroll", () => {
      scrollTop = this.getScrollTop()
        
      if (!this.always || scrollTop === 0 || (scrollTop + this.getWindowHeight() === this.getScrollHeight())) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    });
  }
};
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
.jm-advert {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 1190px;
  height: 134px;
  padding-top: 27px;
  padding-bottom: 27px;
  font-size: 24px;
  color: #fff;
  background-color: #474747;
  z-index: 20;

  &-container {
    width: 1080px;
    margin: 0 auto;
    position: relative;
  }

  &-left {
    width: 760px;
  }

  &-right {
    width: 210px;
  }

  &-desc1 span {
    color: #fff006;
  }

  &-close {
    position: absolute;
    right: -55px;
    top: -20px;
  }

  &-btn {
    display: block;
    width: 210px;
    height: 76px;
    margin: 0 auto 0 auto;
    line-height: 76px;
    font-size: 24px;
    color: #fff;
    text-align: center;
    background-color: #ffa800;
    box-shadow: 0 10px 20px 0 rgba(143, 39, 0, 0.3);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #FD5414;
    }
  }
}

.f30 {
  font-size: 30px;
}

.f38 {
  font-size: 30px;
}

.f48 {
  font-size: 30px;
}

.f36 {
  font-size: 30px;
}
</style>
