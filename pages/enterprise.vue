<template>

  <section class="enterprise container">

    <p class="search-info">
      <span>搜索企业:</span>
      <span class="pull-right text-ligingray">
			共找到{{ totalResult }}条
      <span v-if="keyword">"<i class="text-primary">{{ keyword }}</i>"</span>相关结果</span>
    </p>

    <!--您是不是在找-->
    <Recommend :data="guess" v-if="guess.length > 0"></Recommend>

    <!-- 搜索条件 -->
    <div class="search-wrap">
      <ul class="search-condition">
        <li class="area">
          <AreaSelection
            :city="city"
            :prov="prov"
            @provChange="provChange"
            @cityChange="cityChange">

          </AreaSelection>
        </li>
        <li class="mode">
          <SearchItem
            :results="modes"
            type="modeId"
            :search-id="modeId"
            label="经营模式"
            @searchChange="searchChange">
          </SearchItem>
        </li>
      </ul>

      <div class="pull-right search-page" v-if="totalPage > 0">
        <i class="el-icon-arrow-left"
          :disabled="currentPage === 1"
          @click="changePage('prev')">
        </i>
        <input type="number" v-model.lazy.number="currentPage"> /{{totalPage}}
        <i :disabled="currentPage === totalPage"
          class="el-icon-arrow-right"
          @click="changePage('next')">
        </i>
      </div>
    </div>

    <!-- 数据列表 -->
    <div class="data-wrap">
      <ul v-if="result.length > 0">
        <li v-for="item in result" :key="item.compId">
          <div class="enterprise-info">
            <header class="clearfix">
              <h3 class="enterprise-name" v-html="item.compName"></h3>
              <!--<el-button type="primary" plain>主要按钮</el-button>-->
              <a :href="`${item.shopDomain}`" class="goshop">进入店铺</a>
            </header>

            <p class="text-overflow">经营范围：<span>{{ item.serviceRange}}</span></p>
            <p class="text-overflow">经营模式：<span class="text-muted">{{ item.compCategory}}</span></p>
            <p class="text-overflow">经营地址：<span
              class="text-muted">{{ item.addressProvinceName + item.addressCityName + item.addressDetail}}</span></p>
            <p>
              <span v-if="item.validStatus === 2"><i class="icon icon-auth"></i>已认证</span>
            </p>
          </div>

          <div class="enterprise-product">
            <div class="product" v-for="(good, index) in item.goodList" :key="good.goodsId">
              <a :href="`${item.shopDomain}/hgDetails/${good.goodsId}`" :title="item.title" target="_blank">
                <div class="img-box">
                  <img v-imgerror :src="good.smallPicturePath | imgCdn" :alt="good.title"/>
                </div>

                <p class="product-name text-overflow" v-html="good.title"></p>

                <p class="text-primay text-overflow">￥{{ good.minPrice }}</p>
              </a>
            </div>
          </div>
        </li>
      </ul>

      <div class="no-result" v-if="result.length === 0">
        <p>没有找到<span v-if="keyword"> 与“ <strong>{{ keyword }}</strong>”</span>相关的企业，请重新筛选条件。</p>
      </div>
    </div>

    <!-- 分页 -->
    <el-pagination
      v-if="result.length > 0"
      class="pagination"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-count="totalPage"
      layout="prev, pager, next, jumper">
    </el-pagination>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'
  import {ObjectMap} from '~/plugins/utils'
  import AreaSelection from '~/components/AreaSelection'
  import SearchItem from '~/components/SearchItem'
  import Recommend from '~/components/Recommend'

  export default {
    components: {
      AreaSelection,
      Recommend,
      SearchItem
    },

    data () {
      return {
        totalPage: 0,

        pageSize: 10,

        modes: [
          {name: '工厂', id: 1},
          {name: '贸易商', id: 2},
          {name: '工贸一体', id: 3}
        ]
      }
    },

    async asyncData ({query}) {
      const provCode = parseInt(query.addressProvince, 10) || undefined
      const cityCode = parseInt(query.addressCity, 10) || undefined
      const page = parseInt(query.currentPage, 10) || 1
      const modeId = parseInt(query.compCategory, 10) || -1
      const keyword = query.keyword || ''

      let q = {
        // 当前页码 没有默认第一页
        currentPage: page || 1,

        // 省份ID 查找当前省份下的企业
        addressProvince: provCode,

        // 城市ID 查找当前城市下的企业
        addressCity: cityCode,

        // 经营模式
        compCategory: modeId === -1 ? undefined : modeId,

        // 每页条数
        pageSize: 10,

        keyword: keyword
      }

//      const [guess, lists] = await Promise.all([
//        axios.get(`/api/search/1001/recommendKeyword`, {
//          params: {
//            keyType: 1,
//            keyWord: keyword
//          }
//        }).then(data => data.data),
//        axios.get('/api/search/1002/company', {params: q}).then(data => data.data.data)
//      ])

      // ajax 获取数据
      return {
        guess: [],//guess.data || [],

        totalPage: 10,//lists.totalPage,

        totalResult: 100,//lists.totalResult,

        result: [],//lists.result || [],

        query: query,

        currentPage: page,

        prov: {
          placeCode: provCode
        },

        modeId: modeId,

        keyword: keyword,

        city: {
          placeCode: cityCode
        }
      }
    },

    methods: {

      /**
       * [getEnterprose]
       * 获取企业列表
       * @author zhoul
       * @version [version]
       * @param   {[Object]}  query [查询参数]
       * @return  {[undefined]}        [无返回值]
       */
      async getEnterprose (query = {}) {
        let q = {
          // 当前页码 没有默认第一页
          currentPage: this.currentPage || 1,

          // 省份ID 查找当前省份下的企业
          addressProvince: this.prov.placeCode,

          // 城市ID 查找当前城市下的企业
          addressCity: this.city.placeCode,

          // 经营模式
          compCategory: this.modeId,

          // 每页条数
          pageSize: this.pageSize,

          keyword: query.keyword
        }

        this.$router.push({
          path: `enterprise`,
          query: ObjectMap(q)
        })
      },

      /**
       * [handleCurrentChange]
       * element-ui 分页组件中的页码改变
       * @author zhoul
       * @version [version]
       * @return  {[type]}  [description]
       */
      handleCurrentChange () {
        this.getEnterprose()
      },

      /**
       * [changePage]
       * 搜索区域的点击上一页/下一页
       * @author zhoul
       * @version [version]
       * @return  {[type]}  [description]
       */
      changePage (t) {
        if (t === 'prev') {
          this.currentPage--
        } else {
          this.currentPage++
        }
      },

      /**
       * [provChange]
       * 选择的省份改变，发起ajax请求获取当前省份下的企业
       * @author zhoul
       * @version [version]
       * @param   {Object}  prov [选择的省份对象]
       * @return  {undefined}       [无返回值]
       */
      provChange (prov = {}) {
        this.prov = prov
        // 选择省份就要清除市
        this.city = {}
      },

      /**
       * [cityChange 城市选择]
       * 选择的城市改变，发起ajax请求获取当前城市下的企业
       * @author zhoul
       * @version [version]
       * @param   {Object}  city [选择的城市对象]
       * @return  {undefined}  [无返回值]
       */
      cityChange (city = {}) {
        this.city = city

        if (!city.placeCode) {
          this.prov = {}
        }

        this.getEnterprose()
      },

      /**
       * [searchChange 搜索条件]
       * 搜索条件组件中的搜索条件改变触发搜索
       * @author zhoul
       * @version [version]
       * @return  {[undefined]}  [无返回值]
       */
      searchChange (search = {data: {}}) {
        this[search.type] = search.data.id
        this.getEnterprose()
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>

  @import "../element-variables";

  .search-wrap .select-show {
    border: none;
    border-right: 1px solid #dedede;
  }

  .search-wrap {
    height: 42px;
    border: 1px solid #dedede;
    background: #fff;

    margin-bottom: 20px;
  }

  .search-condition {
    float: left;
    li {
      float: left;
    }
  }

  .enterprise {
    padding-bottom: 50px;
  }

  .search-info {
    color: #6e6e6e;
    margin: 20px 0;
  }

  .data-wrap {

    li {
      overflow: hidden;
      border: 1px solid #dedede;
      background: #fff;
      margin-bottom: 10px;
      padding: 20px;

      &:hover {
        box-shadow: 0 2px 4px 0 #dedede;
      }

      header {
        padding: 10px 0;
      }
    }

    .enterprise-info {
      float: left;
      width: 616px;

      p {
        margin-top: 12px;
        color: #9e9e9e;
      }
    }

    .enterprise-product {
      float: right;
      width: 450px;
    }

    .enterprise-name {
      float: left;
      padding-right: 100px;
      width: 100%;
      line-height: 34px;
      font-size: 16px;
      color: #3e3e3e;
      font-weight: normal;
    }

    .goshop {
      float: left;
      width: 120px;
      margin-left: -120px;
      padding: 6px 15px;
      display: inline-block;
      background-color: #fff;
      border: 1px solid $--color-primary;
      color: $--color-primary;
      text-align: center;
      border-radius: 2px;
      height: 34px;

      &:hover {
        background-color: $--color-primary;
        color: #fff;
      }
    }
  }

  .enterprise-product {
    .product {
      float: left;
      width: 130px;
      margin-left: 20px;
    }

    .img-box {
      width: 130px;
      height: 130px;
      background-color: pink;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .product-name {
      padding: 6px 0;
    }

    .product-price {
      color: #ff2400;
      padding-top: 6px;
    }
  }
</style>

<style lang="scss" scoped>
  @import "../assets/scss/search_page.scss";
</style>
