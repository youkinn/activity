<template>
  <section class="tool-nav" :class="{'tool-nav_hide': isHide}" ref="toolNav">
    <ul class="nav">
      <li v-for="(item, index) in data" :key="item.target" :class="{'active': index === currentIndex}"><a
        :href="item.target">{{ item.name }}</a></li>
    </ul>
  </section>
</template>

<script>
  import { offset } from '~/plugins/utils'

  export default {
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        timer: null,
        currentIndex: 0,
        clientHeight: 0,
        docHeight: 0,
        isHide: true,
        aTarget: []
      }
    },

    methods: {
      checkScroll () {
        // 做节流处理 防止频繁触发
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {

          // 滚动条的高度
          const iScrollTop = document.documentElement.scrollTop || document.body.scrollTop

          // 判断是否有存储这些taget离文档的距离
          if (this.aTarget.length === 0) {
            for (let item of this.data) {
              this.aTarget.push(offset(document.querySelector(item.target)).top)
            }
          }

          // 判断是否显示 这个导航条
          // 这个导航条在第一个目标元素距离可视窗口顶部100px之内是不显示的
          if (this.aTarget[0] - iScrollTop <= 100) {
            this.isHide = false
          } else {
            this.isHide = true
            return
          }

          // 逐个判断是否在特定区域
          this.aTarget.forEach((item, index) => {
            if (Math.abs(item - iScrollTop) - 100 <= 0) {
              this.currentIndex = index
            }

            // 判断是不是到底部了
            if (iScrollTop + this.clientHeight >= this.docHeight) {
              this.currentIndex = this.aTarget.length - 1
            }
          })

        }, 10)
      }

    },

    mounted () {

      this.clientHeight = document.documentElement.clientHeight
      this.docHeight = document.body.offsetHeight

      this.checkScroll()
      window.addEventListener('scroll', this.checkScroll, false)
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../element-variables";

  .tool-nav {
    position: fixed;
    bottom: 200px;
    margin-left: -90px;
    z-index: 20;
    visibility: visible;
    opacity: 1;
    transition: opacity .6s;

    &.tool-nav_hide {
      visibility: hidden;
      opacity: 0;
    }

    li {
      background-color: #fff;
      color: #6e6e6e;

      &:hover, &.active {
        background-color: $--color-primary;
        color: #fff;
      }

      & + li {
        margin-top: 1px;
      }

      a {
        display: block;
        color: inherit;
        padding: 12px 10px;
        width: 50px;
        height: 50px;
        font-size: 12px;
        text-align: center;
        line-height: 14px;
      }
    }
  }
</style>
