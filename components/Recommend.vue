<template>
  <div class="recommend">
    <span class="title">您是不是在找：</span>
    <nuxt-link
      :to="{ path: `/enterprise`, query: { currentPage: 1, pageSize: pageSize, keyword:g.keyword}}"
      v-for="g in data"
      :key="g.keyword">
      {{ g.keyword }}
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        'default': []
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .recommend {
    background: #fffae6;
    border: 1px solid #f0b184;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    color: #9e9e9e;
    margin-bottom: 20px;
  }

  .title {
    color: #9e9e9e;
  }

  .recommend a {
    color: #3e3e3e;
    margin-left: 30px;
  }

</style>
