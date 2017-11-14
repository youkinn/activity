<template>
  <section class="box">
    <header class="header">
      <h2 class="title"><i class="icon" :class="`icon-${titleIcon}`"></i>{{ titleName }}</h2>

      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </header>

    <div class="content clearfix">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      titleIcon: {
        type: String
      },

      titleName: {
        type: String,
        require: true
      }

    }
  }
</script>

<style lang="scss" type="text/scss" scoped>

  .box {
    margin-top: 20px;
  }

  .header {
    overflow: hidden;
    .title {
      float: left;
    }
    .actions {
      float: right;
    }
    .icon {
      margin-right: 10px;
      vertical-align: middle;
      position: relative;
      top: -1px;
    }
  }

  .content {
    padding: 10px;
  }

</style>
