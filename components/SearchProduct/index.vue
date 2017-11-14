<template>
  <div id="Search">
    <p class="clearfix search-filed">
      <span class="pull-left title">全部商品： </span>
      <el-tag size="medium" closable>分类：化工化工化工化工化工化工化工化工化工化工</el-tag>
      <el-tag size="medium" closable>分类：化工</el-tag>
      <el-tag size="medium" closable>分类：化工</el-tag>
      <el-button size="small" class="clear">清除</el-button>
    </p>

    <div class="search">
      <search-item
        v-for="item in lists"
        @checkeds="change"
        :type="item.type"
        :checks="item.checks"
        :is-multiple = 'item.isMultiple'
        :label="item.label"
        :data="item.data"
        :key="item.type" />
    </div>
  </div>
</template>

<script>
  import searchItem from './searchItem'

  export default {

    props:['lists'],

    data(){
      return {}
    },

    methods: {
      change(data){
        const item = this.lists.find((item) => item.type === data.type)
        item.checks = data.data
      }
    },

    mounted(){

    },

    components: {
      searchItem
    }
  }

</script>

<style type="text/scss" lang="scss" scoped="">
  @import "../../element-variables";
  .search{
    padding: 0 20px;
    background-color: #fff;
  }

  .search-filed{
    margin-bottom: 15px;
    .title{
      line-height: 30px;
    }
  }

  .clear{
    &:focus{
      background-color: #fff;
      color: #3e3e3e;
    }
  }

  .el-tag{
    background-color: #fff;
    border-color: #dedede;
    color: #3e3e3e;
    margin-right: 10px;
    padding-right: 25px;
    height: 30px;
    float: left;
    position: relative;

    &:hover{
      color: $--color-primary;
      border-color: $--color-primary;
    }
  }

  .el-button{
    border-color: #dedede;

    &:hover{
      background-color: $--color-primary;
      border-color: $--color-primary;
      color: #fff;
    }
  }

</style>
