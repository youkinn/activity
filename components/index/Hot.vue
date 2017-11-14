<template>
  <section class="hot">
    <div class="data-table">
      <table>
        <thead>
        <tr>
          <th width="15%">品名</th>
          <th width="10%">材质</th>
          <th width="20%">规格</th>
          <th width="10%">钢厂</th>
          <th width="10%">存放地</th>
          <th width="10%">重量(吨)</th>
          <th width="12%">价格</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in 10">
          <td class="text-overflow">普卷</td>
          <td class="text-overflow">Q235B</td>
          <td class="text-overflow">11.5*1500*C</td>
          <td class="text-overflow">中钢</td>
          <td class="text-overflow">上海</td>
          <td class="text-overflow">50</td>
          <td class="text-primay text-overflow">3450.00</td>
          <td>
            <a href="" class="buy">立即采购</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <ul class="business-list">
      <li v-for="item in shoper" :key="item.adId">
        <a :href="item.path" target="_blank" :title="item.decorateName">
          <img v-lazyload.cdn="item.picturePath" :alt="item.decorateName">
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props: {
      shoper: {
        type: Array,
        'default' () {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../../element-variables";

  .hot {
    padding: 10px 0;
    overflow: hidden;
  }

  .data-table {
    float: left;
    width: 910px;
    margin-left: 10px;

    table {
      width: 100%;
      text-align: center;
    }

    th {
      background-color: #f2f2f2;
      height: 40px;
      font-weight: normal;
    }

    td {
      height: 60px;
      border-bottom: 1px solid #dedede;
    }
    tr:hover {
      td {
        background-color: #fff6f5;
      }
    }
    tr:last-child {
      td {
        border: none;
      }
    }
    .buy {
      font-size: 14px;
      height: 30px;
      width: 86px;
      border: 1px solid $--color-primary;
      color: $--color-primary;
      background-color: #fff;
      display: block;
      border-radius: 2px;
      padding: 5px 8px;
      text-align: center;

      &:hover {
        background-color: $--color-primary;
        color: #fff;
      }
    }
  }

  .business-list {
    margin-left: 10px;
    float: left;
    width: 230px;

    a {
      border: 1px solid #dedede;
      padding: 18px 10px;
      text-align: center;
      display: block;

      &:hover {
        box-shadow: 0 2px 4px 0 #dedede;
      }
    }

    li + li {
      a {
        margin-top: 8px;
      }
    }

    img {
      max-width: 208px;
      height: 62px;
      vertical-align: middle;
    }

  }
</style>
