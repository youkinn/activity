<template>
  <div class="container clearfix">
    <header class="header">
      <h3 class="title">行业资讯</h3>
    </header>

    <section class="news">
      <div>
        <ul>
          <li class="item pic-text" v-for="item in articles" :key="item.articleContentId">
            <div class="img-box">
              <nuxt-link :to="{path:`/news/${item.articleContentId}`}">
                <img v-lazyload.cdn="item.picture" :alt="item.name"/>
              </nuxt-link>
            </div>

            <div class="text-content">
              <dl>
                <dt class="title text-overflow" :title="item.name">
                  <nuxt-link :to="{path:`/news/${item.articleContentId}`}">
                    {{ item.name }}
                  </nuxt-link>
                </dt>
                <dd class="desc" :title="item.introduction">{{ item.introduction }}</dd>
                <dd class="tags">
                  <span class="source">来源：{{ item.source}}</span>|
                  <time class="time">{{ item.createTime }}</time>
                </dd>
              </dl>
            </div>
            <!--分享-->
            <div class="share">
              <Share type="card"
                     :data-share="{
                      title: `${item.name}`,
                      image: `${address.IMG_ADDRESS + item.picture}`,
                      description:`${item.introduction}`
                      }">
              </Share>
            </div>
          </li>
        </ul>
      </div>

      <el-pagination
        v-if="totalPage > 1"
        class="pagination"
        @current-change="pageChange"
        :current-page.sync="page"
        :page-count="totalPage"
        layout="prev, pager, next, jumper"
      >
      </el-pagination>
    </section>

    <!--推荐资讯-->
    <aside class="recomd-box">
      <NewsAside :border="true"></NewsAside>
    </aside>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'
  import address from '~/config'
  import Share from '~/components/Share.vue'
  import NewsAside from '~/components/NewsAside'

  export default {
    components: {
      Share,
      NewsAside
    },

    data () {
      return {
        address
      }
    },

    methods: {
      pageChange () {}
    },

    async asyncData ({query}) {
      const page = query.page || 1
      const result = await axios.get('/information/pageArtcle', {
        params: {
          currentPage: page,
          pageSize: 10
        }
      }).then(data => data.data.data)

      return {
        articles: result.result,
        totalPage: result.totalPage,
        page: page,
        totalResult: result.totalResult
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../../element-variables";

  .header {
    padding: 20px 0;
    .title {
      color: #6e6e6e;
      padding-left: 10px;
      font-size: 14px;
      line-height: 14px;
      font-weight: normal;
      border-left: 2px solid $--color-primary;
    }
  }

  .news {
    float: left;
    width: 830px;
    background-color: #fff;
    border: 1px solid #dedede;
    padding: 0 20px 20px;

    .item {
      border-bottom: 1px dashed #dedede;
      padding: 30px 0;
      position: relative;
    }

    .img-box {
      width: 200px;
      height: 150px;
      background-color: pink;
      vertical-align: middle;

      a {
        display: block;
        height: 100%;

        &:after {
          display: inline-block;
          vertical-align: middle;
          content: "";
          height: 100%;
        }
      }

      img {
        vertical-align: middle;
        max-width: 200px;
        max-height: 150px;
      }

    }

    .title {
      font-size: 16px;
      font-weight: normal;
      color: #3e3e3e;
      line-height: 34px;
    }

    .share {
      position: absolute;
      right: 10px;
      bottom: 30px;
      z-index: 15;
    }

    .desc {
      line-height: 20px;
      padding-top: 10px;
      color: #6e6e6e;
      height: 94px;
      overflow: hidden;
    }
    .tags {
      color: #9e9e9e;
      font-size: 12px;
    }
    .source {
      padding-right: 20px;
    }
    .time {
      padding-left: 20px;
    }
  }
</style>
