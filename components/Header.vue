<template>
  <div id="Header">
    <el-row class="container" id="search">
      <el-col :span="12">
        <h1 class="logo">
          <a href="/">
            <img src="~assets/img/logo.png" alt="聚贸钢铁"/>
          </a>
        </h1>
      </el-col>
      <el-col :span="12">
        <search @searchSelect="searchSelect" :hot="hot"></search>
      </el-col>
    </el-row>

    <div class="container">
      <MainNav></MainNav>
    </div>
  </div>
</template>

<script>
  import Search from '~/components/Search.vue'
  import MainNav from '~/components/MainNav.vue'

  export default {
    data () {
      return {
        hot: [
          {title: '普卷'},
          {title: '线材'},
          {title: '螺纹钢'},
          {title: '热卷'},
          {title: '冷轧'},
        ]
      }
    },
    methods: {
      searchSelect (search) {
        try {
          let historySearch = JSON.parse(localStorage.getItem('historySearch')) || []
          historySearch.push(search.title)
          localStorage.setItem('historySearch', JSON.stringify([...new Set(historySearch)]))
        } catch (e) {
          console.log(e)
        }
      }
    },
    components: {
      Search,
      MainNav
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  #Header {
    background-color: #fff;
    padding: 22px 0 0;
    border-bottom: 1px solid #ddd;
  }

  #search {
    padding-bottom: 8px;
  }

  .logo {
    height: 65px;
    overflow: hidden;
  }
</style>
