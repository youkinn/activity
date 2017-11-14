<template>
  <div class="jm-right-item" :class="{'last': isLast}">
    <img :src="'~assets/img/merchants/' + bg-img" alt="">
    <img class="right-icon" :src="'~assets/img/merchants/' + iconImg" alt="">
    <div class="text">
    <div class="name">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['bg-img', 'iconImg', 'title', 'desc', 'isLast'],
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
