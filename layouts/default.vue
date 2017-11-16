<template>
  <div>
    <top/>
    <!-- <my-header/> -->
    <nuxt/>
    <my-footer/>

    <login/>

    <button v-show="($route.path === '/' && scrollTag)" @click="goTop()" class="back-top"></button>

    <!-- <Toolbar class="tool-bar"></Toolbar> -->
  </div>
</template>

<script>
  import '~/element-variables.scss'
  import Top from '~/components/Top.vue'
  import MyHeader from '~/components/Header.vue'
  import MyFooter from '~/components/Footer.vue'
  import Login from '~/components/Login.vue'
  // import Toolbar from '~/components/Toolbar.vue'

  export default {
    data () {
      return {
        scrollTag: false,
        timer: null,
        scroll: '',
        speed: 100
      }
    },
    components: {
      Top,
      MyHeader,
      MyFooter,
      Login
      // Toolbar
    },
    methods: {
      goTop () {
        clearInterval(this.timer)
        this.scroll = document.body.scrollTop || document.documentElement.scrollTop
        this.timer = setInterval(() => {
          if (this.scroll < 0) {
            clearInterval(this.timer)
            return false
          }
          this.scroll -= this.speed
          window.scrollTo(0, this.scroll)
        }, 16)
      },
      scrollTop () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (scrollTop > 500) {
          this.scrollTag = true
        } else {
          this.scrollTag = false
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
  .tool-bar {
    position: fixed;
    right: 10px;
    bottom: 100px;
  }
</style>
