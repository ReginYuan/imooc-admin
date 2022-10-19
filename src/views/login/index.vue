<template>
  <div class="login">
    <el-form class="login-form">
      <div class="login-form-title">
        <h3 class="login-form-title-h">用户登录</h3>
      </div>
      <el-form-item class="login-form-item">
        <span class="login-form-item-svg">
          <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
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
        <span class="login-form-item-svgPwd">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
      </el-form-item>
      <el-button class="login-form-submit" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
//  element-plus 导入组件可以直接使用
import { Avatar } from '@element-plus/icons'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login {
  width: 100;
  min-height: 100%;
  background-color: $bg;
  overflow: hidden;
  &-form {
    position: relative;
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    // 标题样式
    &-title {
      position: relative;
      &-h {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
    //表单行样式
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    // 输入框样式
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray; //字体高亮
        caret-color: $cursor; //指定光标颜色
      }
    }

    &-item {
      // 图标样式
      &-svg {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }
      // 密码显隐样式
      &-svgPwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
    }
    &-submit {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
