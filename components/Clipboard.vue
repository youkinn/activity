<template>

  <div class="clipboard_wrap">
    <input class="input" type="text" :id="target" v-model="value">
    <button ref="copy" class="clipboard_btn" :data-clipboard-target="'#'+target">
      <slot></slot>
    </button>
  </div>
</template>

<script>
  import Clipboard from 'Clipboard'
  import { Message } from 'element-ui';

  export default {
    data () {
      return {
        target: 'copy' + Math.floor(Math.random() * 9999999999)
      }
    },
    props: {
      value: {
        type: String,
        required: true
      }
    },

    mounted () {
      const clipboard  = new Clipboard(this.$refs.copy)

      clipboard.on('success', () => {
        this.$message({
          type: 'success',
          message: '复制成功',
        })
      })

      clipboard.on('error', (e) => {
        this.$message({
          type: 'error',
          message: e
        })
      })
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>

  .clipboard_wrap {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .clipboard_btn {
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
  }

  .input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
  }
</style>
