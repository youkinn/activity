<template>
  <section>

    <div class="banner">
      <!--v-if="volist.length!==0"-->
      <a :href="volist[0].path" target="_blank">
        <img :src="volist[0].picturePath | imgCdn" :alt="volist[0].name"/>
      </a>
    </div>

    <div class="container">
      <div class="types">
        <a href="">全部</a>
        <a href="" class="active">建筑钢材</a>
        <a href="">热卷</a>
        <a href="">中厚板</a>
        <a href="">冷轧涂镀</a>
        <a href="">型钢</a>
        <a href="">管材</a>
        <a href="">优特钢</a>
        <a href="">不锈钢</a>
        <a href="">其他</a>
      </div>

      <div class="purchases">
        <el-row :gutter="10">
          <el-col :span="12" v-for="i in 20" :key="i">
            <Purchase class="purchase"></Purchase>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
  import Purchase from '~/components/Purchase.vue'

  export default {
    data () {
      return {
        volist: [{picturePath: '', path: '', name: ''}]
      }
    },

    async asyncData ({query, store}) {

      // 列表参数
      const params = {
        currentPage: query.page,
        pageSize: 10,

      }

//      Promise.all([
//        axios.get('/demand/topAdv'),
//        axios.get('/demand/list', {params: {currentPage: 1,}})
//
//      ])

    },

    components: {
      Purchase
    }
  }
</script>

<style lang="scss" scoped>
  @import "../element-variables";

  .banner {
    width: 100%;
    text-align: center;
    background-color: pink;
    height: 380px;
    img {
      width: 100%;
      max-width: 1920px;
      max-height: 100%;
    }
    .banner-link {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .types {
    background-color: #fff;
    color: #6e6e6e;
    overflow: hidden;
    margin-top: 20px;

    a {
      width: 90px;
      display: block;
      line-height: 44px;
      text-align: center;
      float: left;
      padding: 0 10px;
    }

    .active {
      color: #fff;
      background-color: $--color-primary;
    }
  }
</style>
