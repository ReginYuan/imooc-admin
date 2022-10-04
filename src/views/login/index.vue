<template>
  <div class="login">
    <el-form class="login-form">
      <div class="login-form-title">
        <h3 class="login-form-title-h">用户登录</h3>
      </div>
      <el-form-item class="login-form-item">
        <span class="login-form-item-svg">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-input type="text" name="username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item class="login-form-item">
        <span class="login-form-item-svg">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-input
          type="password"
          name="password"
          placeholder="password"
        ></el-input>
      </el-form-item>
      <el-button class="login-form-submit" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
//  element-plus 导入组件可以直接使用
import { Avatar } from '@element-plus/icons'
</script>

<style lang="scss" scoped>
.login {
  &-form {
    &-submit {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
