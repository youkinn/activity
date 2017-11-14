<template>
  <aside>
    <NewsRecom :border="border"/>

    <div class="adv">
      <img src="" alt="">
    </div>
  </aside>
</template>

<script>
  import axios from '~/plugins/axios'
  import NewsRecom from '~/components/NewsRecom.vue'

  export default {
    props: {
      border: {
        type: Boolean,
        'default': false
      }
    },
    components: {
      NewsRecom
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .adv {
    height: 170px;
    background-color: deeppink;
    margin-top: 10px;
    text-align: center;
    img {
      min-height: 170px;
    }
  }
</style>
