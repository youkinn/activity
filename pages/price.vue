<template>
  <div class="container clearfix">
    <header class="header">
      <h3 class="title">钢厂调价</h3>
    </header>

    <section class="news">
      <ul>
        <li v-for="i in 25" class="item">
          <a href="#" class="title text-overflow">• 7月11日 马钢建筑钢材调价信息7月11日 马钢建筑钢材调价信息7月11日 马钢建筑钢材调价信息7月11日 马钢建筑钢材调价信息7月11日 马钢建筑钢材调价信息</a>
          <time class="time">2017-07-11</time>
        </li>
      </ul>
    </section>

    <!--推荐资讯-->
    <aside class="recomd-box">
      <NewsAside></NewsAside>
    </aside>
  </div>
</template>

<script>
  import Share from '~/components/Share.vue'
  import NewsAside from '~/components/NewsAside'

  export default {
    components: {
      Share,
      NewsAside
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";

  .header {
    padding: 20px 0;
    .title {
      color: #6e6e6e;
      padding-left: 10px;
      font-size: 18px;
      line-height: 18px;
      font-weight: normal;
      border-left: 2px solid $--color-primary;
    }
  }

  .news {
    width: 830px;
    background-color: #fff;
    padding: 20px;
    float: left;
    .title {
      display: block;
      line-height: 30px;
      color: #6e6e6e;
      padding-right: 75px;

      &:hover {
        color: $--color-primary;
      }
    }
    .item {
      position: relative;

      &:nth-child(5n) {
        border-bottom: 1px dashed #dedede;
        padding-bottom: 10px;
      }
      &:nth-child(5n+1) {
        padding-top: 10px;

        .time {
          top: 16px;
        }
      }
    }

    .time {
      color: #9e9e9e;
      position: absolute;
      top: 8px;
      right: 0;
      font-size: 12px;
    }

  }
</style>
