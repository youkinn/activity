<template>
  <section class="purchase">
    <header class="header">
      <span>{{ purchase.title || '&nbsp;'}}</span>
      <time class="time">{{ purchase.releaseTimeStr }}</time>
    </header>

    <div class="content">
      <ul>
        <li>
          品种: <span class="value">{{ purchase.productTypeName}}</span>
        </li>
        <li>
          规格: <span class="value">{{ purchase.standardName }}</span>
        </li>
        <li>
          钢厂: <span class="value">{{ purchase.factoryName }}</span>
        </li>
        <li>
          存放地: <span class="value">{{ purchase.tradeAddrProvince }}{{purchase.tradeAddrCity}}</span>
        </li>
        <li>
          采购量: <span class="value">{{ purchase.productNum }}{{ purchase.productNumUnit | unit }}</span>
        </li>
      </ul>

      <footer class="footer">

        <div v-if="!userInfo.id"><a class="text-primay" :href="centerAddress" @click.prevent="showLogin()">登录</a>后可查看联系方式
        </div>

        <div v-if="userInfo.id" class="text-primay"><span>聚小贸</span> <span class="user-phone">133565984568</span></div>
      </footer>
    </div>
  </section>
</template>

<script>
  import address from '~/config/index'

  export default {
    props: {
      purchase: {
        type: Object,
        'default' () {
          return {}
        }
      }
    },

    data () {
      return {
        centerAddress: address.CENTER_ADDRESS
      }
    },
    methods: {
      // 显示登录
      showLogin (url) {
        if (url != undefined) {
          this.$store.commit('SET_OPEN', {opend: true, openurl: url})
        } else {
          this.$store.commit('SET_OPEN', {opend: true})
        }
      }
    },
    computed: {
      userInfo () {
        return this.$store.getters.getUser
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .purchase {
    width: 280px;
    transition: all .6s;
    &:hover {
      box-shadow: 0 2px 4px #ccc;
    }

    .header {
      padding: 12px 20px;
      background-color: #f2f2f2;
      color: #3e3e3e;
      border: 1px solid #dedede;

      .time {
        float: right;
        color: #9e9e9e;
        font-size: 12px;
      }
    }

    .content {
      padding: 14px 20px 18px;
      background-color: #fff;
      color: #9e9e9e;
      border: 1px solid #dedede;
      border-top: none;

      li {
        line-height: 30px;

      }

      .value {
        color: #3e3e3e;
        padding-left: 5px;
      }
    }
    .user-phone {
      padding-left: 10px;
    }

    .footer {
      margin-top: 6px;
    }
  }
</style>
