<template>
  <section id="nav">
    <div id="cate">
      <header class="header active" @mouseenter="showMenu()" @mouseleave="hideMenu()">
        <h3 class="title"><i class="icon icon-menu"></i>全部商品分类</h3>
      </header>

      <div class="cate" :class="{'show': $route.path === '/'}" v-show="show" @mouseenter="showMenu()" @mouseleave="hideMenu()">
        <ul class="cate_menu">
          <li class="cate_menu_item"
              v-for="(item, index) in cates"
              :key="item.type"

              >
            <i class="icon" :class="`icon-${item.type}-colour`"></i>
            <a href="">{{ item.title }}</a>

            <div class="cate_part" :style="`top:-${index * 42}px`">
              <section v-for="item2 in item.children" :key="item2.title" class="cate_item">
                <header>{{ item2.title }}</header>
                <ul>
                  <li v-for="item3 in item2.children" :key="item3.title"><a href="">{{ item3.title }}</a></li>
                </ul>
              </section>

              <a href="#" class="more">更多 <i class="icon icon-more"></i></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <nav class="nav">
      <ul class="clearfix">
        <li>
          <nuxt-link :to="{ path: '/'}">首页</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ path: '/mall'}">商城</nuxt-link>
        </li>

        <li>
          <nuxt-link :to="{ path: '/purchase'}">采购信息</nuxt-link>
        </li>

        <li>
          <nuxt-link :to="{ path: '/price'}">钢厂调价</nuxt-link>
        </li>

        <li>
          <nuxt-link :to="{ path: '/news'}">行业资讯</nuxt-link>
        </li>

        <li>
          <a href="#">金融服务</a>
        </li>

        <li>
          <a href="#">物流服务</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>

  export default {
    data(){
      return {
        currentCategoryIndex:-1,
        timer: null,
        timer2: null,
        show: false,
        cates: require('~/mock/category.json')
      }
    },
    methods: {
      /**
       * 显示分类列表
       * 在非首页的时候
       */
      showMenu(){
        this.show = true
      },

      /**
       * 隐藏分类列表
       * 在非首页的时候
       */
      hideMenu(){
        this.show = false
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";

  #nav {
    height: 40px;
  }

  #cate {
    position: relative;
    width: 220px;
    float: left;

    .header {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      .icon {
        margin-right: 15px;
        width: 18px;
        height: 8px;
      }
      .title {
        font-size: 16px;
        color: #fff;
        font-weight: normal;
      }

      &.active, &:hover {
        background-color: $--color-primary;
      }
    }

    .cate {
      position: absolute;
      top: 41px;
      width: 100%;
      left: 0;
      z-index: 25;
    }

    .cate_menu {
      background-color: rgba(255, 255, 255, .9);
      height: 380px;
    }
    .cate_menu_item {
      padding: 0 10px 0 45px;
      line-height: 42px;
      height: 42px;
      position: relative;

      >.icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        /*background-color: deeppink;*/
      }

      >a {
        display: block;
        padding-left: 5px;
        border-bottom: 1px solid #dedede;
      }

      &:last-child a{
        border-bottom: none;
      }

      &:after {
        content: '';
        width: 12px;
        position: absolute;
        height: 12px;
        border-bottom: 1px solid;
        border-right: 1px solid;
        transform: rotate(-45deg);
        right: 20px;
        top: 14px;
        color: #bbb;
      }

      &:hover,&.is-active {
        color: #fff;
        background-color: $--color-primary;

        &:after {
          color: #fff;
        }

        .cate_part{
          display: block;
        }


        @for $i from 1 to 10 {
          .icon-cate#{$i}-colour {
            width: 26px;
            height: 20px;
            background: url("~assets/img/icons/cate#{$i}.png") no-repeat center;
          }
        }
      }

    }

    .cate_part {
      color: #9e9e9e;
      height: 380px;
      display: none;

      position: absolute;
      width: 430px;
      border: 1px solid $--color-primary;
      background-color: #fff;
      top: 0;
      left: 220px;
      padding: 5px 20px 20px;

      .more {
        position: absolute;
        right: 20px;
        bottom: 0;
      }
    }
    .cate_item {
      padding-top: 12px;
      header {
        color: #3e3e3e;
        line-height: 24px;
        font-weight: bold;
        padding-bottom: 5px;
      }

      ul {
        padding-bottom: 10px;
        overflow: hidden;
      }

      li {
        float: left;
        color: #6e6e6e;
        margin-right: 30px;
        line-height: 24px;
        &:hover {
          color: $--color-primary;
        }
      }

      & + .cate_item {
        border-top: 1px dashed #dedede;
      }
    }

  }

  .nav {
    width: 970px;
    float: left;

    li {
      text-align: center;
      float: left;
      line-height: 40px;
      width: (970px / 7);
      font-size: 16px;
    }

    a {
      display: inline-block;
      height: 100%;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: -1px;
        left: 0;
        background-color: transparent;
      }
    }

    a:hover,
    a.nuxt-link-active {
      color: $--color-primary;
      &:after {
        background-color: $--color-primary;
      }
    }

  }
</style>
