<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="84"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="handleCollapse"
        @expand="collapsed = false"
      >
        <n-menu
          v-if="!collapsed"
          :options="sidebarMenuOptions"
          :expand-icon="expandIcon"
          v-model:value="activeKey"
          @update:value="navigate"
        />

        <n-menu
          v-else
          :options="collapsedMenuOptions"
          :collapsed-width="84"
          :collapsed-icon-size="22"
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
import { computed } from 'vue';
import { sidebarMenuOptions } from '@/constant/sidebarMenu';
import { CaretDownOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { h } from 'vue';
import { useNavigation } from '@/composables/useNavigation';

const { collapsed, activeKey, navigate } = useNavigation();

const collapsedMenuOptions = computed(() => {
  return sidebarMenuOptions.value.flatMap((group) => [
    {
      key: group.key,
      label: () => h('div', { class: 'collapsed-parent-label' }, group.label),
      disabled: true,
    },
    ...(group.children?.map((child) => ({
      key: child.key,
      icon: child.icon,
      label: child.label,
    })) || []),
  ]);
});

const handleCollapse = () => {
  collapsed.value = true;
  activeKey.value = activeKey.value;
};

const expandIcon = () => {
  return h(NIcon, null, { default: () => h(CaretDownOutline) });
};
</script>

<style lang="scss">
.n-layout-sider {
  height: 100vh;
  transition: width 0.3s ease;

  .n-menu {
    &--collapsed {
      .n-menu-item-content-header:has(.collapsed-parent-label) {
        opacity: 1 !important;
        display: flex;
        flex-direction: column;
        align-items: center;

        .collapsed-parent-label {
          font-size: 8px;
          line-height: 1.2;
          font-weight: 900;
          text-transform: uppercase;
          margin-top: 4px;
          text-align: center;
        }
      }

      .n-menu-item-content-header:not(:has(.collapsed-parent-label)) {
        opacity: 0 !important;
      }
      .n-menu-item-content {
        justify-content: center;

        &--disabled {
          cursor: default;
        }
      }

      .n-menu-item-content:has(.collapsed-parent-label) {
        padding: 0 !important;
      }
    }
  }
}

.n-layout-toggle-button {
  border: 1px solid var(--sidebar-color);
  background-color: var(--header-color);
}

.n-layout-scroll-container {
  background-color: var(--background-color);
  margin-left: 5px;
}

.n-layout {
  background-color: var(--background-color);
  margin-right: 5px;
}

.n-layout-sider,
.n-dropdown-menu {
  @include styleForWindow();
}

.n-layout-sider {
  height: 100vh;

  .n-layout-toggle-button {
    border: 1px solid var(--sidebar-color);
    background-color: var(--header-color);
  }
}
</style>
