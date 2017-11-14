<template>
  <section class="tool-bar">
    <ul>
      <!--<li>-->
      <!--<a class="trige">-->
      <!--<i class="icon icon-maomao"></i>-->
      <!--<p class="text">咨询</p>-->
      <!--</a>-->
      <!--</li>-->
      <li>
        <div class="trige">
          <i class="icon icon-subscribe"></i>
          <p class="text">订阅号</p>
        </div>

        <div class="code pop">
          <img src="~assets/img/code.png" alt=""/>
        </div>
      </li>
      <li>
        <div class="trige">
          <i class="icon icon-phone"></i>
          <p class="text">热线</p>
        </div>

        <div class="concat pop">
          <p>客服热线：</p>
          <p>400-860-0550</p>
        </div>
      </li>
      <li  v-show="scrollTag">
        <div class="trige backTop" @click="backTop()">
          <i class="icon icon-arrow-up-lg"></i>
          <p class="text">顶部</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        scrollTag: false,
        timer: null,
        scroll: '',
        speed: 100
      }
    },
    mounted () {
      this.scrollTop()
      window.addEventListener('scroll', this.scrollTop, false)
    },

    destroyed () {
      window.removeEventListener('scroll', this.scrollTop, false)
    },

    methods: {
      backTop () {
        clearInterval(this.timer)
        this.scroll = document.body.scrollTop || document.documentElement.scrollTop
        this.timer = setInterval(() => {
          if (this.scroll < 0) {
            clearInterval(this.timer)
            return false
          }
          this.scroll -= this.speed
          window.scrollTo(0, this.scroll)
        }, 16)
      },
      scrollTop () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (scrollTop > 500) {
          this.scrollTag = true
        } else {
          this.scrollTag = false
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";

  $toolbar: maomao subscribe phone arrow-up-lg;

  .tool-bar {
    background-color: #fff;
    z-index: 20;
    li {
      border: 1px solid #dedede;
      width: 63px;
      height: 63px;
      color: #6e6e6e;
      cursor: default;
      position: relative;

      &:hover {
        background-color: $--color-primary;
        color: #fff;

        @each $var in $toolbar {
          .icon- #{$var} {
            background-image: url("~assets/img/icons/#{$var}-white.png");
          }
        }

        .pop {
          display: block;
          transition: transform .6s;
          transform: translateX(0);
          visibility: visible;
        }

      }
    }

    li + li {
      border-top: none;
    }

    .code {
      padding: 10px;
      border: 1px solid #dedede;
      background-color: #fff;
      position: absolute;
      right: 61px;
      top: -1px;
      visibility: hidden;
      transform: translateX(-20px);

      img {
        width: 86px;
        height: 86px;
        background-color: red;
      }
    }

    .concat {
      padding: 12px 16px;
      background-color: $--color-primary;
      color: #fff;
      width: 128px;
      visibility: hidden;
      position: absolute;
      right: 62px;
      top: 0;
      transform: translateX(-20px);
    }
  }

  .trige {
    position: relative;
    text-align: center;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;

    .text {
      margin: 0;
      padding-top: 4px;
    }
  }
</style>
