<template>
  <section class="container">


    <!-- 搜索条件 -->
    <SearchProduct  class="search-product " :lists="lists"></SearchProduct>

    <!--排序-->
    <SortProduct :show-type="showType" @changeShowType="changeShowType" class="sort-product"></SortProduct>

    <!--横排商品-->
    <div class="single-product" v-show="showType === 2">
      <Product v-for="i in 10" :key="i" class="product"></Product>
    </div>

    <!--栅格商品-->
    <div class="grid-product " v-show="showType === 1">
      <ProductCard v-for="i in 20" :key="i" class="product"></ProductCard>
    </div>
  </section>
</template>

<script>
  // 搜索
  import SearchProduct from '~/components/SearchProduct'

  // 排序分页条
  import SortProduct from '~/components/SearchProduct/SortBar.vue'

  import ProductCard from '~/components/ProductCard.vue'
  import Product from '~/components/Product.vue'

  export default {
    data(){
      const flData = require('~/mock/fl.json')
      const plData = require('~/mock/pl.json')
      const cjData = require('~/mock/cj.json')

      return {
        type: {
          fl: '分类',
          pl: '品类',
          cj: '厂家'
        },

        showType: 2,

        lists: [
          {
            type: 'fl',
            label: '分类',
            isMultiple: false,
            data: flData,
            checks: [flData[0]]
          },

          {
            type: 'pl',
            label: '品类',
            isMultiple: false,
            data: plData,
            checks: [plData[0]]
          },

          {
            type: 'cj',
            label: '厂家',
            isMultiple: true,
            data: cjData,
            checks: [cjData[0]]
          }
        ]
      }
    },

    methods:{
      changeShowType(type){
        this.showType = type
      }
    },
    components: {
      SearchProduct,
      SortProduct,
      Product,
      ProductCard
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>

  .search-product{
    margin: 10px 0 20px;
  }

  .single-product {
    margin-top: 20px;
    .product {
      margin-bottom: 10px;
    }
  }

  .grid-product {
    margin-top: 20px;
    overflow: hidden;
    margin-left: -16px;
    .product {
      float: left;
      margin-left: 16px;
      margin-bottom: 18px;
    }
  }

</style>
