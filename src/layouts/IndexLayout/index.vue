<template>
  <a-layout class="layout">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      class="layout-sider"
    >
      <!--      网站logo start-->
      <logo :collapsed="collapsed" />
      <!--      网站logo end-->
      <!--      侧边菜单栏start-->
      <aside-menu :collapsed="collapsed" />
      <!--      侧边菜单栏end-->
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Layout } from "ant-design-vue";
import Logo from "./logo.vue";
import AsideMenu from "./menu.vue";
export default defineComponent({
  name: "IndexLayout",
  components: {
    Logo,
    AsideMenu,
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
  },
  setup() {
    const collapsed = ref<boolean>(false);

    const asiderWidth = computed(() => (collapsed.value ? "80px" : "256px"));
    return {
      collapsed,
      asiderWidth,
    };
  },
});
</script>

<style lang='less' scoped>
.layout {
  display: flex;
  overflow: hidden;
  height: 100vh;

  .layout-sider {
  }

  .ant-layout {
    overflow: hidden;
  }

  .layout-content {
    flex: none;
  }
}
</style>