<template>
  <section id="logistics" class="clearfix">
    <div class="search">
      <header class="header">
        <h4 class="title">我要找车</h4>
        <p class="desc">快速安全 准时周到</p>
      </header>
      <div>
        <ul class="tabs-title">
          <li :class="{'active': logisticsServiceType === 0}" @click="changeLogisticsService(0)">找物流</li>
          <li :class="{'active': logisticsServiceType === 1}" @click="changeLogisticsService(1)">找仓库</li>
        </ul>
        <div>
          <!-- 找物流 -->
          <el-form ref="line" :model="line" v-show="logisticsServiceType === 0" @submit.prevent="submit">
            <el-form-item>
              <el-select size="large" class="form-item-select" v-model="line.type" placeholder="请选择运输方式">
                <el-option
                  v-for="item in line.types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-input size="large" class="form-item-input" v-model="line.keyword" placeholder="请输入关键词搜索"></el-input>
            </el-form-item>

            <el-form-item class="form-submit">
              <a :href="`${platform.CONSTANT_JUMORE_YUN_URL}/search?lineType=${line.type}&keyword=${line.keyword}`"
                 target="_blank"
                 class="search-btn">搜全站</a>
            </el-form-item>
          </el-form>

          <!-- 仓库 -->
          <el-form ref="warehouse" :model="warehouse" v-show="logisticsServiceType === 1" @submit.prevent="submit">
            <el-form-item>
              <el-select size="large" class="form-item-select" v-model="warehouse.type" placeholder="请选择仓储类型">
                <el-option v-for="item in warehouse.types" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-input size="large" class="form-item-input" v-model="warehouse.keyword"
                        placeholder="请输入关键词搜索"></el-input>
            </el-form-item>
            <el-form-item class="form-submit">
              <!--rentwarehouse-->
              <a
                :href="`${platform.CONSTANT_JUMORE_YUN_URL}/search?lineType=235&warehouseType=${warehouse.type}&keyword=${warehouse.keyword}`"
                target="_blank"
                class="search-btn">搜全站</a>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="line box">
      <header class="header">
        <h4 class="title">特惠线路</h4>

        <div class="actions">
          <a class="more" :href="`${platform.CONSTANT_JUMORE_YUN_URL}/specials`" target="_blank">更多 <i
            class="icon icon-more-primary"></i></a>
        </div>
      </header>

      <div>
        <ul>
          <li v-for="line in data.line" :key="line.id">
            <a class="line-item" target="_blank"
               :href="`${platform.CONSTANT_JUMORE_YUN_URL}/specialsDetail/${line.id}`">
              <span class="start_address" :title="line.departure">{{ line.departure }}</span>

              <span><i class="icon icon-arrow-line"></i></span>

              <span class="end_address" :title="line.destination">{{ line.destination }}</span>

              <span class="logis_type text-center" :title="line.lineTypeName">{{ line.lineTypeName }}</span>

              <span class="logis_date text-right">{{ line.createTime | timeFlier("yyyy-MM-DD") }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="warehouse box">
      <header class="header">
        <h4 class="title">热门仓储</h4>

        <div class="actions">
          <a class="more" :href="`${platform.CONSTANT_JUMORE_YUN_URL}/rentwarehouse`" target="_blank">更多 <i
            class="icon icon-more-primary"></i></a>
        </div>
      </header>

      <div>
        <ul>
          <li v-for="warehouse in data.warehouse" :key="warehouse.id" class="warehouse-item">
            <a :href="`${platform.CONSTANT_JUMORE_YUN_URL}/rentwarehouse/${warehouse.id}`" target="_blank">
              <div class="pic-text">
                <div class="img-box">
                  <img v-lazyload.cdn="warehouse.imgUrls[0]" alt="warehouse.companyName" />
                </div>
                <div class="text clearfix">
                  <dl>
                    <dt class="title text-overflow" :title="warehouse.companyName">{{warehouse.companyName}}</dt>
                    <dd class="text-small text-overflow">仓储类型：<span class="text-muted"
                                                                    :title="warehouse.warehouseTypeName">{{warehouse.warehouseTypeName}}</span>
                    </dd>
                    <dd class="text-overflow"><span
                      class="price text-primay">{{warehouse.warehousePrice}}</span>{{warehouse.offerUnit}}
                    </dd>
                    <dd class="text-small text-overflow">可用面积：<span class="text-muted"
                                                                    :title="`${warehouse.availableArea}m²`">{{warehouse.availableArea}}m²</span>
                    </dd>
                    <dd class="location text-overflow" :title="warehouse.locationAll"><i class="icon icon-location"></i>{{warehouse.locationAll}}
                    </dd>
                  </dl>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  import platform from '~/config/platform'

  export default {
    props: {
      data: {
        type: Object,
        'default' () {
          return {}
        }
      }
    },
    data () {
      return {
        // 选中的服务类型
        logisticsServiceType: 0,

        // 找物流
        line: {
          type: '',

          types: [
            {
              value: '',
              label: '不限'
            }, {
              value: 231,
              label: '公路'
            }, {
              value: 232,
              label: '铁路'
            }, {
              value: 233,
              label: '内河航运'
            }, {
              value: 234,
              label: '海运'
            }, {
              value: 237,
              label: '空运'
            }, {
              value: 235,
              label: '仓储'
            }
          ],
          keyword: ''
        },

        // 找仓库
        warehouse: {
          type: 1,
          types: [{
            value: 1,
            label: '不限'
          }, {
            value: 308,
            label: '普通'
          }, {
            value: 309,
            label: '恒温'
          }, {
            value: 310,
            label: '冷库'
          }, {
            value: 311,
            label: '危险'
          }, {
            value: 365,
            label: '保税'
          }, {
            value: 366,
            label: '海关监管'
          }, {
            value: 367,
            label: '其他'
          }],
          keyword: ''
        },

        platform: platform
      }
    },

    mounted () {
      console.log(this.data.line)
      console.log(this.data.warehouse)
    },
    methods: {
      submit () {
        debugger
      },
      /**
       * 切换物流服务
       * @param type
       */
      changeLogisticsService (type) {
        this.logisticsServiceType = type
      },

      searchLogistics () {}
    }
  }

</script>
<style lang="scss" type="text/scss" scoped>
  @import "../../element-variables";

  .search {
    width: 280px;
    height: 370px;
    float: left;
    padding: 20px;
    background: url("~assets/img/logistics-bg.png") no-repeat;
    .header {
      text-align: left;
      color: #fff;
      padding-top: 15px;
    }
    .title {
      font-size: 34px;
      font-weight: normal;
    }
    .tabs-title {
      background: #fff;
      overflow: hidden;
      border-radius: 2px;
      margin-bottom: 20px;
      margin-top: 15px;
      li {
        border-radius: 2px;
        line-height: 40px;
        float: left;
        text-align: center;
        color: #3e3e3e;
        width: 50%;
        font-size: 16px;
        cursor: pointer;
        &.active {
          background-color: #ffa201;
          color: #fff;
        }
      }
    }
    .search-btn {
      width: 100%;
      height: 42px;
      font-size: 16px;
      background: $--color-primary;
      color: #fff;
      border: none;
      text-align: center;
      outline: none;
      display: block;
      cursor: pointer;
      border-radius: 2px;
    }
    .form-item-select {
      width: 100%;
    }
  }

  %base {
    width: 425px;
    float: left;
    margin-left: 20px;

    header {
      padding: 10px;
      border-bottom: 1px solid #81c0ff;
      position: relative;
    }

    .title {
      font-size: 14px;
      font-weight: normal;
    }

    .actions {
      top: 10px;
    }
  }

  .line {
    @extend %base;

    .line-item {
      display: block;
      height: 46px;
      line-height: 46px;
      border-bottom: 1px solid #dedede;

      > span {
        float: left;
        padding: 0 8px;
      }

      &:hover {
        background-color: #fff6f5;
      }

      .start_address,
      .end_address {
        width: 100px;
      }
      .logis_type {
        width: 90px;
      }
      .logis_date {
        width: 100px;
        font-size: 12px;
      }
    }
  }

  .warehouse {
    @extend %base;

    color: #9e9e9e;
    .warehouse-item {
      padding: 10px 0 0;
      > a {
        display: block;
        &:hover {
          background-color: #fff6f5;
        }
      }
    }

    .img-box {
      width: 146px;
      height: 98px;
      background-color: pink;
      text-align: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .text {
      float: left;
      width: calc(100% - 156px);
      padding-top: 5px;
    }

    .title {
      color: #3e3e3e;
    }

    dt, dd {
      float: left;
      width: 50%;
      line-height: 30px;
    }

    .price {
      font-size: 18px;
      font-weight: bold;
    }

    .location {
      width: 100%;
    }
    .icon-location {
      margin-right: 4px;
    }

  }
</style>
