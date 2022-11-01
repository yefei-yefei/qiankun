<template>
  <div class="login-container">
    <el-form ref="ruleFormRef" :rules="rules" :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="name">
        <!-- <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon> -->
        <svg-icon icon="user" class="svg-container"></svg-icon>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item prop="password">
        <!-- <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon> -->
        <svg-icon class="svg-container" icon="password"></svg-icon>
        <el-input v-model="form.password" :type="passwordType" />
        <svg-icon
          style="cursor: pointer"
          :icon="passwordType === 'password' ? 'eye-open' : 'eye-open'"
          @click="changeType"
        ></svg-icon>
      </el-form-item>
      <el-button type="primary" @click="submitForm">登录</el-button>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// import { login } from '@/api/login.js'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
const store = useStore()
const form = ref({
  name: '',
  password: ''
})
const rules = ref({
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入登录密码',
      trigger: 'blur'
    }
  ]
})
// vue3  干什么都要命名
const ruleFormRef = ref(null)
// 登录
const submitForm = () => {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      store.dispatch('app/login', form.value)
    } else {
      ElMessage.error('error submit!!')
      return false
    }
  })
}
const passwordType = ref('password')
// 小图标
const changeType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #000;
$light_gray: #eee;
$cursor: #000;

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

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: #fff;
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input__wrapper {
      width: 100%;
      background: #fff;
      height: 47px;
      box-shadow: none;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 88%;
      border: none;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
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

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
