<template>
  <li class="rights-item clearfix">
    <div class="rights-item-left pull-left clearfix">
      <img src="~assets/img/merchants/rights-2.png" alt="" class="rights-icon pull-left" width="96" height="96">
      <div class="rights-brief pull-left">
        <div class="rights-name">专属超级店铺</div>
        <div class="rights-desc">帮助企业提升全网排名</div>
        <div class="splitline"></div>
      </div>
    </div>
    <div class="rights-item-right rights-detail pull-left">专属企业超级店铺，锁定买家眼球，帮助企业展示商品和企业形象，提升全网排名。</div>
  </li>
</template>

<script>
export default {
  props: ["bg-img", "iconImg", "title", "desc", "isLast"]
};
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
.jm-right-item {
  position: relative;
  width: 302px;
  height: 140px;
  margin-right: 28px;

  &.last {
    margin-right: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  .right-icon {
    position: absolute;
    top: 18px;
    left: 24px;
    width: 69px;
    height: 62px;
  }
}

.text {
  position: absolute;
  top: 55px;
  left: 116px;
  color: #fff;

  .name {
    font-size: 24px;
  }

  .desc {
    font-size: 14px;
  }
}
</style>
