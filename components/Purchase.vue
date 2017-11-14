<template>
  <div class="purchase">
    <header class="title text-overflow">盘螺 HRB400 Φ10 / 300.00吨</header>

    <div class="content">
      <ul>
        <li>
          <label class="key">钢厂:</label>
          <span class="value">徐州金虹</span>
        </li>
        <li>
          <label class="key">存放地:</label>
          <span class="value">江苏泰州</span>
        </li>

        <li>
          <label class="key">采购商:</label>
          <span class="value">浙江聚贸电子商务有限公司</span>
          <i class="icon"></i>
          <i class="icon icon-auth"></i>
        </li>
        <li>
          <label class="key">发布时间:</label>
          <span class="value">2017-06-20</span>
        </li>
      </ul>

      <p class="login">
        <a class="text-primay">登录</a>后可查看联系方式
      </p>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" type="text/scss" scoped>
  .purchase {
    padding: 28px 30px;
    font-size: 14px;
    background-color: #fff;
    margin-top: 10px;
  }

  .title {
    font-size: 16px;
    color: #3e3e3e;
    margin-bottom: 8px;
  }

  .content {
    ul {
      overflow: hidden;
    }
    li {
      float: left;
      width: 60%;
      line-height: 32px;
    }

    li:nth-child(2n) {
      width: 40%;
    }

    .status, .key {
      position: relative;
      top: 2px;
    }

    .key {
      color: #9e9e9e;
    }

    .value {
      color: #3e3e3e;
      padding-left: 10px;
      position: relative;
      padding-right: 6px;
    }
  }

  .login {
    margin-top: 8px;
    color: #9e9e9e;
  }

</style>
