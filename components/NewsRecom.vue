<template>
  <section class="recommend" :class="{'is-border': border}">
    <header class="header">
      <h3 class="title">推荐资讯</h3>
    </header>

    <div>
      <ul>
        <li class="pic-text item" v-for="i in 6" :key="i">
          <div class="img-box">
            <a href="">
              <img src="" alt="">
            </a>
          </div>

          <div class="text-content">
            <p><a href="">国际油价27日上涨</a></p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      border: {
        type: Boolean,
        'default': false
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";

  .recommend {
    padding: 10px 20px 5px;
    background-color: #fff;

    &.is-border {
      border: 1px solid #dedede;
    }
    .header {
      height: 42px;
      border-bottom: 2px solid #dedede;
    }

    .item {
      padding: 15px 0;

      & + .item {
        border-top: 1px dashed #dedede;
      }
    }

    .text-content {
      color: #6e6e6e;
      line-height: 20px;
      padding: 6px 0;
      word-break: break-all;
    }

    .img-box {
      width: 96px;
      height: 64px;
      background-color: red;
    }

    .title {
      font-size: 16px;
      color: $--color-primary;
      font-weight: normal;
      position: relative;
      float: left;
      height: 100%;
      line-height: 40px;

      &:after {
        height: 2px;
        content: ' ';
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -2px;
        background-color: $--color-primary;
      }
    }
  }
</style>
