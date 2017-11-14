<template>
  <section class="search-item area-selection ">
    <div class="select-show">
      <span class="select-city text-overflow" :title="select.name">{{ select.name || label}}</span> <i
      class="el-icon-arrow-down"></i>
    </div>
    <div class="menu">
      <ul class="menu-lists">
        <li @click="change(item)"
            :class="{'active': item.id === select.id}"
            v-for="(item, i) in results">{{ item.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      results: {
        type: Array,
        'default': []

      },

      searchId: {
        type: Number
      },

      type: {
        type: String
      },

      label: {
        type: String,
        'default': 'label'
      }
    },

    data () {
      return {
        select: {}
      }
    },

    mounted () {
      if (typeof this.searchId === 'number') {
        this.select = this.results.find((item) => this.searchId === item.id) || {}
      }
    },

    methods: {
      /**
       * [change 点击选择]
       * 点击一项选择
       * @author  zhoul
       * @version [version]
       * @param   {[Object]}  item [当前点击的那项数据]
       * @return  {[undefined]}       [无返回值]
       */
      change (item) {
        this.select = item
        this.$emit('searchChange', {data: item, type: this.type})
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped="">
  @import "../assets/scss/dropDown.scss";

  .select-show {
    background-color: inherit;
  }
</style>
