<template>
  <section class="search-item search-area">
    <div class="select-show">
      所在地区：<span class="select-city text-overflow">{{currentCity.placeName || currentProv.placeName || '全部'}}</span> <i
      class="el-icon-arrow-down"></i>
    </div>
    <div class="menu">
      <header class="clearfix">
        <h3 class="title">全部地区</h3>
        <!--<button class="btn-line btn-line-primary ">取消选择</button>-->

        <el-button @click="cityChange()" class="pull-right" size="small" type="primary">取消选择</el-button>
      </header>

      <ul class="menu-lists" v-if="provs.length > 0" v-move:citys="index">
        <li
          class="text-overflow"
          v-for="(item, i) in provs"
          @click="selectProv(item, i)"
          :title="item.placeName"
          :class="{'active': item.placeCode === currentProv.placeCode}"
          :key="item.placeCode">{{ item.placeName }}
        </li>

        <li class="citys" v-show="citys.length > 0">
          <AreaCitys
            :current="index"
            :citys="citys"
            :city="currentCity"
            @cityChange="cityChange"></AreaCitys>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import AreaCitys from '~/components/AreaCitys'
  import axios from '~/plugins/axios'

  export default {

    props: {
      city: {
        type: Object,
        'default': {}
      },
      prov: {
        type: Object,
        'default': {}
      }
    },

    data () {
      return {
        provs: [],
        citys: [],
        index: -1,
        currentCity: this.city,
        currentProv: this.prov
      }
    },
    methods: {
      /**
       * [activeIndex 设置选中]
       * 设置当前选中的索引
       * @author zhoul
       * @version [version]
       * @param   {[Number]}  val [设置索引的数字值]
       * @return  {[undefined]}      [无返回值]
       */
      activeIndex (val) {
        this.index = val
      },

      /**
       * [selectProv 选择省份]
       * 点击选择省份 加载当前省份下的城市
       * @author zhoul
       * @version [version]
       * @param   {[Object]}  item  [当前省份的信息]
       * @param   {[Number]}  index [当前省份在省份列表中的索引未知]
       * @return  {[undefined]}        [无返回值]
       */
      async selectProv (item = {}, index) {
        this.currentCity = {}
        const provId = item.placeCode
        let citys = []

        if (typeof provId !== 'number') {
          this.citys = citys
          return
        }

        if (provId !== this.currentProv.placeCode) {
          this.$emit('provChange', item)
        }

        this.currentProv = item || {}

        if (index) {
          this.index = index
        }
        citys = this.$store.state.area.citys[provId]
        if (Array.isArray(citys) && citys.length > 0) {
          this.citys = citys
        } else {
          const {data: {data}} = await axios.get(`/api/search/findCityList/${provId}`)
          this.citys = data
          this.$store.commit('SET_CITYS', {provId, data})
        }

        if (this.city.placeCode) {
          this.currentCity = this.citys.find((item) => item.placeCode === this.city.placeCode)
        }
      },

      /**
       * [cityChange 城市选择]
       * 点击城市列表 选择城市 在父组件中会发起ajax请求获取当前城市下的企业
       * @author zhoul
       * @version [version]
       * @return  {[undefined]}  [无返回值]
       */
      cityChange (city = {}) {
        this.currentCity = city
        if (!city.placeCode) {
          this.activeIndex(-1)
          this.currentProv = {}
          this.citys = []
        }
        this.$emit('cityChange', city)
      },

      /**
       * [getProvs ]
       * 获取省份及当前选中的省份
       * @author zhoul
       * @version [version]
       * @return  {[type]}  [description]
       */
      async getProvs () {
        let provs = []
        const store = this.$store
        const storeProv = store.state.area.provs

        // 判断 Vuex中是否有省份的缓存
        // 有就直接使用 没有就ajax获取
        // 获取成功缓存到Vuex里面
        if (Array.isArray(storeProv) && storeProv.length > 0) {
          provs = storeProv
        } else {
          const {data: {data}} = await axios.get(`/api/search/findAreaList`)
          provs = data
          store.commit('SET_PROV', data)
        }
        this.provs = provs
        if (this.prov.placeCode) {
          this.currentProv = this.provs.find((item) => item.placeCode === this.prov.placeCode) || {}
          this.index = this.provs.indexOf(this.currentProv)
        }
      }
    },

    mounted () {
      this.activeIndex(this.index)
      this.getProvs()

      if (typeof this.currentProv.placeCode === 'number') {
        this.selectProv(this.currentProv)
      }
      console.log(this.currentProv)
    },

    components: {
      AreaCitys
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>

  @import "../element-variables";
  @import "../assets/scss/dropDown.scss";

  .search-area .menu {
    width: 490px;
  }

  .select-show {
    background-color: inherit;
  }
</style>
