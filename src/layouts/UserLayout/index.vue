<template>
  <div class="login-wrap">
    <div class="login-logo">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "UserLayout",
});
</script>

<style lang='less' scoped>
.login-wrap {
  position: relative;
  height: 100vh;
  background: url(../../assets/images/login-bg.png) no-repeat;
  background-size: 100% 100%;
  .login-logo {
    height: 100%;
    background: url(../../assets/images/login-in.png) no-repeat;
    background-position: 30% 30%;
    background-size: 80% 80%;
  }
}
</style>