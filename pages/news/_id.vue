<template>
  <div class="container clearfix">
    <header class="header">
      <el-breadcrumb class="breadcrumb" separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </header>

    <section class="main">
      <article class="article">
        <header>
          <h1 class="text-overflow title">7月11日马钢建筑钢材调价信息</h1>
          <div class="articel-bar clearfix">
            <span class="source">来源: 西本新干线</span>
            <time class="time">时间：2017-07-06 08:59:29</time>

            <Share class="share"></Share>
          </div>
        </header>

        <section class="content">
          <p>新干线讯：7月10日，马钢对马鞍山和合肥地区建材价格调整如下：</p>
          <p>1、高线：上调10元/吨，现合肥地区Φ8mm HPB300高线执行价格为3810元/吨，马鞍山地区Φ8mm HPB300高线执行价格为3790元/吨;</p>
          <p>2、螺纹：上调10元/吨，现合肥地区Φ20mm HRB400螺纹钢执行价格为3800元/吨，马鞍山地区Φ20mm HRB400螺纹钢执行价格为3780元/吨;</p>
          <p>3、盘螺：上调10元/吨;现合肥地区Φ8mm HRB400盘螺执行价格为3880元/吨，马鞍山地区Φ8mm HRB400盘螺执行价格为3860元/吨。</p>
          <p>以上调整均为含税，2017年7月10日起执行。</p>
        </section>

        <footer class="footer">
          <a href="" class="prev-article text-overflow">上一篇：7月11日沙钢永兴7月中旬价格调整信息</a>
          <a href="" class="next-article text-overflow">下一篇：7月11日沙钢永兴7月中旬价格调整信息</a>
        </footer>
      </article>

      <div class="disclaimer">
        <header>免责申明</header>
        <ol>
          <li>1、聚贸网发布此信息目的在于传播更多信息，与本网站立场无关。</li>
          <li>2、聚贸网不保证该信息（包括但不限于文字、数据及图标）全部或者部分内容的准确性、真实性、完整性、有效性、及时性、原创性等。</li>
          <li>3、相关信息并未经过本网站证实，不对您构成任何投资建议，据此操作，风险自担。</li>
          <li>4、如有侵权请直接与作者联系或书面发函至本公司转达、处理。</li>
        </ol>
      </div>
    </section>

    <aside class="recomd-box">
      <NewsAside class="news-recom"></NewsAside>
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
  @import "../../element-variables";

  .header {
    padding: 20px 0;
  }

  .breadcrumb {
    color: #6e6e6e;
    padding-left: 10px;
    border-left: 2px solid $--color-primary;
  }

  .main {
    width: 830px;

    float: left;

    .article {
      background-color: #fff;
      padding: 32px 45px;
      min-height: 910px;
      position: relative;

      header {
        border-bottom: 1px solid #dedede;
        padding-bottom: 12px;
      }
    }

    .content {
      padding: 20px 0;
      min-height: 700px;
      color: #6e6e6e;

      p {
        line-height: 24px;
        margin-bottom: 10px;
      }
    }

    .title {
      font-weight: normal;
      font-size: 24px;
      color: #3e3e3e;
      text-align: center;
      padding-bottom: 5px;
    }

    .footer {
      border-top: 1px solid #dedede;
      padding: 36px 0 0;
    }

    .prev-article, .next-article {
      width: 50%;
      float: left;
      color: #6e6e6e;

      &:hover {
        color: $--color-primary;
      }
    }
    .prev-article {
      padding-right: 8px;
    }
    .next-article {
      padding-left: 8px;
      text-align: right;
    }
  }

  .articel-bar {
    text-align: center;
    color: #9e9e9e;
    padding: 5px 0;
    position: relative;

    .source {
      padding-right: 15px;
    }
  }

  .share {
    position: absolute;
    right: 0;
    top: 0;
  }

  .disclaimer {
    background-color: #fff;
    padding: 25px 45px;
    margin-top: 20px;
    color: #9e9e9e;

    header {
      line-height: 24px;
      font-size: 16px;
      color: #dd2315;
      text-align: center;
      padding-bottom: 20px;
    }

    li {
      line-height: 24px;
    }
  }

</style>
