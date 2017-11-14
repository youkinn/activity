<template>
  <div class="price-index">
    <header class="header">建筑行情</header>
    <section>
      <div class="price-index-item">
        <p class="product">螺纹钢 HRB400</p>
        <p class="spec">φ10</p>
        <p class="price-info">
          <span class="price">4120</span>
          <i class="icon icon-rise"></i>
          <span class="rose">-30</span>
        </p>
      </div>

      <div class="price-index-item">
        <p class="product">螺纹钢 HRB400</p>
        <p class="spec">φ10</p>
        <p class="price-info rise">
          <span class="price">4120</span>
          <i class="icon icon-drop"></i>
          <span class="rose">-30</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" type="text/scss" scoped>
  %triangle {
    content: "";
    position: absolute;
    border: 2px solid transparent;
    height: 0;
    overflow: hidden;
    top: 0;
  }

  .spec {
    padding: 6px 0;
    color: #9e9e9e;
  }

  .price {
    font-size: 26px;
    color: inherit;
    vertical-align: middle;
    display: inline-block;
  }

  .rose {
    font-weight: bold;
  }

  .icon {
    margin: 0 20px 0 10px;
  }

  .price-index {
    width: 230px;
    border: 1px solid #ffda9b;
    border-radius: 4px;
    background-color: #fff;
    position: relative;
    text-align: center;
    padding: 36px 10px 0;
  }

  .price-info {
    color: #6e6e6e;

    &.rise {
      color: #ef4545;
    }
    &.drop {
      color: #71a338;
    }
  }

  .header {
    position: absolute;
    background: #ffa201;
    width: 130px;
    line-height: 34px;
    left: 50%;
    top: -4px;
    transform: translateX(-50%);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;

    &:before {
      @extend %triangle;
      border-right-color: #af7500;
      border-bottom-color: #af7500;
      left: -4px;
    }
    &:after {
      @extend %triangle;
      border-left-color: #af7500;
      border-bottom-color: #af7500;
      right: -4px;
    }

  }

  .price-index-item {
    padding: 20px 0;
    p {
      margin: 0;
    }

    & + .price-index-item {
      border-top: 1px solid #dedede;
    }
  }
</style>
