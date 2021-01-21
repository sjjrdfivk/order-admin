<template>
  <div class="logo">
    <img src="@/assets/images/logo.jpg" alt="" />
    <h2 v-show="!collapsed" class="title">帅气一点</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: "logo",
  props: {
    collapsed: {
      type: Boolean,
    },
  },
};
</script>

<style lang='less' scoped>
.logo {
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  img {
    height: 32px;
    margin-right: 8px;
  }

  .title {
    color: white;
    margin-bottom: 0;
  }
}
</style>