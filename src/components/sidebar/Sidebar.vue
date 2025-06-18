<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="sidebarMenuOptions"
          :render-label="renderMenuLabel"
          :expand-icon="expandIcon"
          v-model:value="activeKey"
          @update:value="navigate"
        />
      </n-layout-sider>
      <n-layout>
        <div class="sidebar-content"><router-view /></div>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import { sidebarMenuOptions } from '@/constant/sidebarMenu';
import { CaretDownOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { h } from 'vue';
import { useNavigation } from '@/composables/useNavigation';

const { collapsed, activeKey, navigate } = useNavigation();

const renderMenuLabel = (option) => option.label;

const expandIcon = () => {
  return h(NIcon, null, { default: () => h(CaretDownOutline) });
};
</script>

<style lang="scss">
.n-layout-scroll-container {
  background-color: var(--background-color);

  .sidebar-content {
    margin-left: 5px;
  }
}

.n-layout-sider,
.n-dropdown-menu {
  background-color: var(--header-color);
  border: 1px solid var(--sidebar-color);
  border-radius: var(--radius1);
}

.n-layout-sider {
  height: 100vh;

  .n-layout-toggle-button {
    border: 1px solid var(--sidebar-color);
    background-color: var(--header-color);
  }
}
</style>
