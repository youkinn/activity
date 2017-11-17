<template>
  <div>
    <JmHeader/>
    <nuxt/>
    <JmFooter/>
    <login/>
  </div>
</template>

<script>
  import JmHeader from '~/components/layouts/header.vue'
  import JmFooter from '~/components/layouts/footer.vue'
  import Login from '~/components/Login.vue'

  export default {
    components: {
      JmHeader,
      JmFooter,
      Login
    }
  }
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
</style>
