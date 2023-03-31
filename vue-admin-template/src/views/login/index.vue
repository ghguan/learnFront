<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <!-- 放置标题图片 @是设置的别名-->
      <div class="title-container">
        <h3 class="title">
          <img src="@/assets/common/login-logo.png" alt="">
        </h3>
      </div>

      <el-form-item prop="mobile">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="mobile"
          v-model="loginForm.mobile"
          placeholder="mobile"
          name="mobile"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button class="loginBtn" :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

      <div class="tips">
        <span style="margin-right:20px;">账号: 13800000002</span>
        <span> 密码: 123456</span>
      </div>

    </el-form>
  </div>
</template>

<script>
// import { validMobile } from '@/utils/validate'
// import { login } from '@/api/user'
export default {
  name: 'Login',
  data() {
    // 自定义校验函数
    // const validatemobile = (rule, value, callback) => {
    //   // 校验value
    //   if (validMobile(value)) {
    //     // 如果通过 直接执行callback
    //     callback()
    //   } else {
    //     callback(new Error('手机号格式不正确'))
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error('The password can not be less than 6 digits'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      // 登录的默认数据
      loginForm: {
        // 批量替换mobile为mobile
        // (1)双击mobile单词,执行选中
        // (2)按下ctrl+h,勾选区分大小
        // (3)替换输入mobile
        // (4)替换mobile为Mobile
        mobile: '13800000002',
        password: '123456'
      },
      loginRules: {
        // 手机号必填，并且进行格式校验
        mobile: [
          // 校验必填：required：必填项；trigger:触发项；blur：失去焦点时；message:错误提示项
          { required: true, trigger: 'blur', message: '手机号不能为空' },
          // 校验格式：正则表达式  element-ui 官方文档：form表单 获取复杂的校验文档
          // 英文文档 => 正则表达式 regular expression 或new RegExp() 或 / / => 搜索：Reg
          { pattern: /^1[3-9]\d{9}$/, trigger: 'blur', message: '手机号不正确' }
        ],
        // 密码必填，长度6-16位之间
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' },
          // 校验长度：element-ui 官方文档：form表单 获取长度校验代码
          { min: 6, max: 16, trigger: 'blur', message: '密码的长度在6-16位之间 ' }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async handleLogin() {
      // async+await 采用异步函数的方式校验表单和发送请求
      try {
        await this.$refs.loginForm.validate()
        // 表单校验成功
        // const res = await login(this.loginForm)
        // console.log(res)
        // if (res.data.success) {
        //   const token = res.data.data
        //   console.log(token)
        // } else {
        //   this.$message.error(res.data.message)
        // }
        // 优化 表单校验成功 代码
        // 优化点1,通过对象解构简化代码
        // 优化点2 统一处理错误
        /*
        // 优化1 解构赋值
        const { data: { data: token, success, message }} = await login(this.loginForm)
        // 优化2 到拦截器中统一处理错误
        if (success) {
          console.log(token)
        } else {
          this.$message.error(message)
        }
        */
        // 统一处理后，页面方法直接获取结果
        // 登录成功后，跳转到首页
        // 若登录失败，接收到错误，执行catch中代码，而非继续执行跳转
        // 所以需要拦截器抛出错误
        // const token = await login(this.loginForm)
        // console.log(token)
        // 存token在vuex的state中，通过action触发mutation修改state数据
        // mutation是必须是同步任务，但这里login异步任务，所以要用action
        await this.$store.dispatch('user/login', this.loginForm)
        this.$router.push('/')
      } catch (e) {
        // 表单校验失败+请求失败
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
$light_gray: #68b0fe;  // 将输入框颜色改成蓝色

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  // .el-form-item {
  //   border: 1px solid rgba(255, 255, 255, 0.1);
  //   background: rgba(0, 0, 0, 0.1);
  //   border-radius: 5px;
  //   color: #454545;
  // }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.7); // 输入登录表单的背景色
    border-radius: 5px;
    color: #454545;
  }
  .el-form-item__error {
    color: #fff
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .loginBtn {
  background: #407ffe;
  height: 64px;
  line-height: 32px;
  font-size: 24px;
}
}
</style>
