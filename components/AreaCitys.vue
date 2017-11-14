<template>
  <section class="citys clearfix">
		<span
      class="text-overflow"
      v-for="(city, index) in citys"
      :class="{'active': selectedCity.placeCode === city.placeCode}"
      :key="city.placeCode"
      :title="city.placeName"
      @click.stop="selectCity(city)"

    >{{ city.placeName }}</span>

    <i class="el-icon-caret-top" :style="{ left: `${caretLeft}px`}"></i>
  </section>
</template>

<script>
  export default {
    props: ['current', 'citys', 'city'],
    data () {
      return {}
    },

    methods: {
      selectCity (city) {
        if (city.placeCode !== this.selectedCity.placeCode) {
          this.$emit('cityChange', city)
          this.selectedCity = city
        }
      }
    },

    mounted () {
      console.log(this.city)
    },
    computed: {
      caretLeft () {
        return (this.current % 6) * 80
      },

      selectedCity: {
        set (val) {
          this.city = val
        },

        get () {
          return this.city
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .citys {
    width: 100%;
    padding: 16px 0 8px;
    position: relative;

    .el-icon-caret-top {
      position: absolute;
      top: -10px;
      color: #f5f5f5;
      transform: translateX(50%);
    }

    span {
      width: 75px;
      float: left;
      margin-bottom: 15px;
      padding-right: 8px;
      cursor: pointer;

      &.active {
        color: #ff2400;
      }
    }
  }

</style>
