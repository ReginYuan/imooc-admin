<template>
  <div class="navbar">
    你好
    <svg-icon icon="article" className="article" color="red"></svg-icon>
    <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.article {
  width: 10px;
  height: 10px;
  background-color: red;
}
</style>
