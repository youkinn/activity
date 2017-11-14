<template>
  <section class="box news-box">
    <header class="header">
      <h4 class="title">{{ titleName }}</h4>

      <div class="actions">
        <nuxt-link :to="{path: '/news'}" target="_blank" class="more">更多 <i class="icon icon-more"></i></nuxt-link>
      </div>
    </header>

    <div class="list-wrap">
      <ul>
        <li :class="{'pic-text': !index}" v-for="(item, index) in data" :key="index">

          <template v-if="!index">
            <div class="img-box">
              <img v-lazyload.cdn="item.picture" :alt="item.name" :title="item.name">
            </div>

            <dl class="text-box">
              <dt class="pic-title text-overflow">
                <nuxt-link :title="item.name" target="_blank" :to="{path: `/news/${item.articleContentId}`}">
                  {{ item.name }}
                </nuxt-link>
              </dt>
              <dd class="desc" :title="item.introduction">{{ item.introduction | cutStr(100)}}</dd>
            </dl>
          </template>

          <template v-else>
            <nuxt-link class="title" :title="item.name" target="_blank" :to="{path: `/news/${item.articleContentId}`}">
              {{ item.name
              }}
            </nuxt-link>
            <time>{{ item.createTime | timeFlier("MM-DD") }}</time>
          </template>

        </li>
      </ul>
    </div>
  </section>
</template>

<script>


  export default {
    components: {},
    props: {
      titleName: {
        type: String,
        require: true
      },

      data: {
        type: Array,
        'default': []
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../../element-variables";
  @import "../../assets/scss/main";

  .news-box {
    margin-top: 0;
    .header {
      padding: 12px 0;
      .title {
        font-size: 14px;
        color: #3e3e3e;
      }
    }

    .actions {
      top: 12px;
    }

    .img-box {
      width: 120px;
      height: 80px;
      background-color: red;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .more {
      color: #9e9e9e;

      &:hover {
        color: $--color-primary;

        .icon-more{
          background-image: url("~assets/img/icons/more-primary.png");
        }
      }
    }

  }

  .pic-text {
    margin-bottom: 10px;
    .pic-title {
      font-weight: bold;
      margin-bottom: 8px;
      width: 100%;
    }

    .desc {
      color: #9e9e9e;
      font-size: 12px;
    }

    .text-box {
      float: left;
      width: 215px;
    }
  }

  .list-wrap {
    padding: 10px 0 0;

    time {
      float: right;
      color: #9e9e9e;
    }

    li {
      overflow: hidden;

      & + li {
        line-height: 32px;
      }
    }

    .title {
      font-size: 14px;
      color: #3e3e3e;
      width: 295px;
      float: left;

      @extend .text-overflow;

      &:hover {
        color: $--color-primary;
      }
    }
  }
</style>
