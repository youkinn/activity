<template>
  <section @keyup.enter="login('form')">
    <el-dialog custom-class="dialog-login" :visible.sync="opend" @close="close('form')">
      <h2 class="text-center title">欢迎登录</h2>
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            auto-complete="off"
            :autofocus="true"
            placeholder="请输入手机号码">
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            auto-complete="off"
            placeholder="请输入密码">
          </el-input>
        </el-form-item>

        <el-form-item class="item-actions">
          <a target="_blank" :href="`${centerAddress}/register/register?platformCode=1005&refUrl=${fullpath}`" class="pull-left">免费注册</a>
          <a :href="`${centerAddress}/forgetPasswordStart`" target="_blank" class="pull-right">忘记密码</a>
        </el-form-item>

        <el-form-item>
          <el-button :disabled="loading" class="login-btn" type="primary" @click="login('form')">登 录</el-button>
        </el-form-item>
      </el-form>

      <div class="dialog-footer">
        <div class="contact">
          <p class="phone">{{ phone }}</p>
          <p class="time">工作时间:{{ workTiem }}</p>
        </div>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import axios from "~/plugins/axios";
import login from "~/plugins/checkLogin";
import address from "~/config";
import website from "~/config/website";

export default {
  name: "dialog-login",

  data() {
    return {
      fullpath: '',

      loading: false,

      // 公司电话
      phone: website.localPhone,

      // 工作时间
      workTiem: website.workTime,

      centerAddress: address.CENTER_ADDRESS,

      form: {
        username: "",
        password: ""
      },

      rules: {
        username: [{ required: true, message: "请输入手机号码", trigger: "blur" }],

        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },

  methods: {
    close(formName) {
      this.$refs[formName].resetFields();
    },

    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          axios
            .post(`/doLogin`, {
              activeStatus: 1,
              checkCode: "",
              username: this.form.username,
              password: this.form.password
            })
            .then(data => {
              if(data.data.code != 0){
                console.log(data.data);
                this.$message.error(data.data.desc);
                return;
              }
              this.$store.commit("SET_OPEN", { opend: false });
              return axios
                .get(`/userInfo`)
                .then(data => data.data.data || {});
            })
            .then(data => {
              this.$store.commit("SET_USER", data);
              this.loading = false;
            })
            .catch(e => {
              console.log(e);
              this.loading = false;
            });
        }
      });
    }
  },

  computed: {
    /**
       * [opend 控制登录弹出的显示和隐藏 使用set/get 防止computed中的属性直接修改报错]
       * @type {Object}
       */
    opend: {
      get() {
        return this.$store.state.login.opend;
      },

      set(newVal) {
        this.$store.state.login.opend = newVal;
      }
    }
  },

  mounted(){
    this.fullpath = location.href;
  }
};
</script>


<style lang="scss" scoped type="text/scss">
.title {
  margin-bottom: 30px;
  font-size: 26px;
  color: #3e3e3e;
}

.login-btn {
  width: 100%;
}

.dialog-footer {
  border-top: 1px solid #ccc;
  padding-top: 15px;
}

.contact {
  background: url("~assets/img/phone.png") no-repeat 10px center;
  padding-left: 60px;
  color: #9e9e9e;

  .phone {
    font-size: 24px;
  }

  .time {
    font-size: 12px;
  }
}

.item-actions a:hover {
  color: #D93900;
}
</style>
