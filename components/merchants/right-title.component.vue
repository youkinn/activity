<template>
  <div class="jm-right-title">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.jm-right-title {
  width: 457px;
  height: 74px;
  line-height: 74px;
  color: #D93900;
  font-size: 28px;
  text-align: center;
  background: url("~assets/img/merchants/right-bg.png") center center no-repeat;
  background-size: contain;
}
</style>
