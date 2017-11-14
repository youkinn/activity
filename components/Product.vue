<template>
  <section class="product">
    <header class="header">
      <h3 class="title text-overflow">武钢 花纹卷/300.00吨</h3>
    </header>

    <div class="product-content">
      <ul class="product-info">
        <li>
          <span class="key">材质：</span>
          <span class="value">Q235B</span>
        </li>
        <li>
          <span class="key">规格：</span>
          <span class="value">9.5*1500*C</span>
        </li>
        <li>
          <span class="key">供应商：</span>
          <span class="vlaue">攀枝花新钢钒股份有限公司</span>
        </li>
        <li>
          <span class="key">存放地：</span>
          <span class="value">上海市</span>
        </li>
        <li>
          <span class="key"></span>
          <span class="value">
            <i class="icon"></i>
            <i class="icon icon-auth"></i>
          </span>
        </li>
      </ul>

      <div class="btns">
        <p class="price">$1178.00</p>
        <button class="buy">立即采购</button>
        <button class="add">加入采购单</button>
        <p class="login-info">
          <a href="" class="text-primay">登录</a>后可查看联系方式
        </p>

        <p class="login-info">
        <span class="user-name"><i class="icon icon-user"></i>聚小毛</span>
        <span><i class="icon icon-phone-colour"></i>17888888888</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";

  .product {
    background-color: #fff;
    border: 1px solid #dedede;
    padding: 20px;

    .title {
      font-size: 16px;
      color: #3e3e3e;
      font-weight: normal;
      padding-bottom: 10px;
    }
  }

  .price {
    color: $--color-primary;
    font-size: 16px;
    text-align: center;
    padding-bottom: 20px;
  }

  .product-content {
    display: table;
    width: 100%;
  }

  .product-info {
    width: 660px;
    display: table-cell;

    li {
      width: 50%;
      float: left;
      line-height: 30px;
    }

    .key {
      width: 60px;
      float: left;
      color: #9e9e9e;
      text-align: right;
    }

    .value {
      padding-left: 60px;
      padding-right: 10px;
      color: #3e3e3e;
      display: block;
    }
  }

  .btns {
    width: 250px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  %btn {
    width: 120px;
    height: 34px;
    border: 1px solid $--color-primary;
    border-radius: 2px;
    text-align: center;
    display: inline-block;
  }

  .buy {
    @extend %btn;
    background-color: $--color-primary;
    color: #fff;
  }

  .add {
    @extend %btn;
    margin-left: 10px;
    background-color: #fff;
    color: $--color-primary;
  }

  .login-info {
    padding-top: 10px;
    color: #6e6e6e;

    .icon {
      margin-right: 10px;
      position: relative;
      top: -2px;
    }
  }

  .user-name {
    padding-right: 30px;
  }
</style>
