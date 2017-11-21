<template>
  <section @keyup.enter="login('form')">
    <div class="jm-ui-login">
        <el-dialog title="会员登录" custom-class="dialog-login" :visible.sync="opend" @close="resetFields('form')">
      <div class="account-frost row" v-if="isShow"> 对不起，您的账号未激活！ </div>

      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" auto-complete="off" :autofocus="true" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item v-if="isShow" prop="veryfyCode" >
            <el-input v-model="form.veryfyCode" auto-complete="off":autofocus="true" placeholder="请输入验证码" class="input-with-select">
              <el-button slot="append" class="input-code-btn" @click="sendYZM()">{{paracont}}</el-button>
            </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        
        <div class="jm-modal-pwd-operate clearfix"> 
          <el-checkbox v-model="form.rememberMe">下次自动登录</el-checkbox>
          <a class="jm-modal-login-forget" :href="`${centerAddress}/forgetPasswordStart`" target="_blank">忘记密码</a>
        </div>

        <el-button :disabled="loading" class="login-btn" type="primary" @click="login('form')">登 录</el-button>
      </el-form>

    <div class="dialog-footer">
      <div class="jm-modal-login-register">
        <span class="color-font-6">没有账号？</span>
        <a class="font-dodger-blue margin-left-10" :href="`${centerAddress}/register/register?platformCode=${platformCode}&refUrl=${fullpath}`" target="_blank">注册账号</a>
     	</div>
     </div>		
    </el-dialog>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'
  import login from '~/plugins/checkLogin'
  import address from "~/config";

  export default {
    name: 'dialog-login',

    data () { 
      return {
        flag: true,                                              // 防止验证码多次发送标记
        isShow: false,                                           // true 未激活账户 展示验证码
        loading: false,                                          // 提交表单按纽禁用与开启
        // openurl: this.$store.state.common.login.openurl,         // 登录后返回页面
        openurl: '',         // 登录后返回页面
    		paracont: "获取验证码",  
        centerAddress: address.CENTER_ADDRESS,
				platformCode: 1005,     // 平台参数
				fullpath: "",
        form: {                                                  // 初始化表单参数
          username: '',
          veryfyCode:'',
          password: '',
          rememberMe:false
        },
        rules: {                                                 // 表单验证规则
          username: [
            {required: true, message: '请输入手机号码', trigger: 'blur'}
          ],
          veryfyCode:[
          	{required: true, message: '请输入验证码', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入账号密码', trigger: 'blur'}
          ]
        }
      }
    },
		mounted(){
			this.fullpath = location.origin;
		},

    computed: {
      // 控制登录弹出的显示和隐藏 使用set/get 防止computed中报缺少setter错误
      opend: {
        get () {
            return this.$store.state.login.opend
        },
        set (newVal) {
            this.$store.state.login.opend = newVal;
        }
      }
    },
    methods: {
      // 发送验证码
      sendYZM() {
        if(this.flag){
          let sec = 60;
          var username = this.form.username;
          if (username == null || username == '') { // 表单验证
                this.$message({
                  showClose: true,
                  message: '请输入手机号',
                  type: 'error'
                });
                return false;
           }

           this.flag =false; // 倒计时
           for(let i=0; i<=60; i++){
             window.setTimeout(()=> {
               if (sec > 0) {
                 sec --;
                 this.paracont = sec + " 秒" ;
               } else {
                 sec = 60;//如果倒计时结束就让  获取验证码显示出来
                 this.flag=true;
                 this.paracont = '获取验证码'
               }
              }, i * 1000)
            } 

            // 发送请求
            axios.get(`/sendActiveMessage`,{params:{  
                username: this.form.username
            }})      
            .then(({data})  => {
              if(data.code==0){
                this.$message({
                  showClose: true,
                  message: '发送成功',
                  type: 'success'
                });
              }else{
                this.$message({
                  showClose: true,
                  message: `${data.desc}`,
                  type: 'error'
                });
              }
            })
        } 
      },

      // 重置表单
      resetFields (formName) {
        this.$refs[formName].resetFields()
      },
      
      // 登录
      login (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	this.loading = true;
          	axios.post(`/doLogin`,{  
          		username: this.form.username,
              veryfyCode: '',
              password: this.form.password,
              rememberMe:this.form.rememberMe
          	})
          	.then(({data})  => {
          		if(data.code != 0){
                console.log(data);
                this.$message.error(data.desc);
                return;
              }
              this.$store.commit("SET_OPEN", { opend: false });
              return axios
                .get(`/userInfo`)
                .then(data => {
                  return data.data.data || {};
                });
          	})
          	.then(data => {
                this.$store.commit('SET_USER', data)
          			this.loading = false
            })
            .catch(e => {
  	            console.log(e)
  	            this.loading = false
            });
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  .title {
    margin-bottom: 30px;
    font-size: 26px;
    color: #3e3e3e;
  }
  .account-frost {
    margin: -10px 0 10px 0;
    padding: 0 40px;
    color: #d32f2f
  }
  .login-btn {
    width: 100%;
  }

  .dialog-footer {
  }
  .contact {
    background: url('~assets/img/icons/phone.png') no-repeat 10px center;
    padding-left: 60px;
    color: #9e9e9e;
    .phone {
      font-size: 24px;
    }
    .time {
      font-size: 12px;
    }

  }
  .el-form{ 
  	padding: 0 40px;
  }
	.jm-modal-login-register{
  	height: 55px;
    line-height: 52px;
    text-align: center;
    border-top: 1px solid #e5e5e5;
    margin-top: 30px;
  }
//   .el-dialog__body {
//   	padding:0;
//     color: #48576a;
//     font-size: 14px;
//     padding-top: 30px;
// 	}
	
	.jm-modal-pwd-operate{ 
    margin-bottom: 15px;
    font-size: 12px;
  }
	.loginvalid{ 
    float:left; 
    margin-top: 2px; 
    margin-right: 5px;
  }
	.jm-modal-login-automatic{ 
    float:left;
  }
	.jm-modal-login-forget{ 
    float:right;
    color: #2789e9;
  }
	.font-dodger-blue{
    color: #2789e9;
  }
  .input-code-btn{
    min-width: 110px
  }
</style>
