<template>
  <section id="sort" class="clearfix">
    <div class="pull-left sorts">
      <span class="sort-item active">默认排序</span>
      <span class="sort-item">价格 <i class="icon icon-sort"></i></span>
      <span class="sort-item">发布时间 <i class="icon icon-sort"></i></span>
    </div>

    <div class="pull-right">
      <div class="change-show pull-left">
        <div class="show-type pull-left">
          <span class="type" :class="{'active': showType === 1}" @click="changeShowType(1)"><i class="icon grid"></i></span>
          <span class="type" :class="{'active': showType === 2}" @click="changeShowType(2)"><i class="icon menu2"></i></span>
        </div>
      </div>

      <div class="pull-left search-page" v-if="totalPage > 0">
        <i class="prev icon icon-arrow-down-lg"
           :disabled="currentPage === 1"
           @click="changePage('prev')">
        </i>

        <input type="number" v-model.lazy.number="currentPage"> /{{totalPage}}

        <i :disabled="currentPage === totalPage"
           class="next icon icon-arrow-down-lg"
           @click="changePage('next')">
        </i>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      showType: {
        type: Number,
        'default': 1
      }
    },
    data () {
      return {
        totalPage: 10,
        currentPage: 1,
        pageSize: 10,
      }
    },

    methods: {
      changeShowType (type) {
        this.showType = type
        this.$emit('changeShowType', type)
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../../element-variables.scss";

  #sort {
    background-color: #fff;
  }

  %base{
    position: relative;
    top:-1px;
    &[disabled]{
      opacity: .4;
    }
    margin: 0 10px;
  }

  .prev{
    transform: rotate(90deg);

    @extend %base;
  }

  .next{
    transform: rotate(-90deg);
    @extend %base;
  }

  .sorts {
    .sort-item {
      padding: 0 32px;
      background-color: transparent;
      height: 44px;
      line-height: 44px;
      display: block;
      float: left;
      color: #6e6e6e;
      cursor: pointer;

      &.active {
        background-color: $--color-primary;
        color: #fff;
      }
    }
  }

  .change-show {
    .type {
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      display: block;
      float: left;
      cursor: pointer;

      &.active {
        background-color: #ededed;
      }
    }
  }

  .show-type {

    .grid {
      background-image: url("~assets/img/icons/grid.png");
    }

    .menu2 {
      background-image: url("~assets/img/icons/menu2.png");
    }

    .active {
      .grid {
        background-image: url("~assets/img/icons/grid-colour.png");
      }

      .menu2 {
        background-image: url("~assets/img/icons/menu2-colour.png");
      }
    }
  }
</style>
