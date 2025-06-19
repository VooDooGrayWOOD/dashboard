<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="collapsedWidth"
        :width="sidebarWidth"
        :collapsed="collapsed"
        show-trigger
        @collapse="handleCollapse(true)"
        @expand="handleCollapse(false)"
      >
        <n-menu
          :options="sidebarMenuOptions"
          :expand-icon="expandIcon"
          v-model:value="activeKey"
          @update:value="navigate"
          v-show="!collapsed"
        />

        <n-menu
          :options="collapsedMenuOptions"
          :collapsed-width="collapsedWidth"
          :collapsed-icon-size="22"
          v-model:value="activeKey"
          @update:value="navigate"
          v-show="collapsed"
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

const sidebarWidth = 240;
const collapsedWidth = 84;

const collapsedMenuOptions = computed(() =>
  sidebarMenuOptions.value.flatMap((group) => [
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
  ])
);

const handleCollapse = (state) => {
  collapsed.value = state;
};

const expandIcon = () => h(NIcon, null, () => h(CaretDownOutline));
</script>

<style lang="scss">
:root {
  --sidebar-width: 240px;
  --sidebar-collapsed-width: 84px;
  --layout-margin: 5px;
}

.n-layout-sider {
  height: 100vh;
  transition: width 0.3s ease;

  .n-layout-toggle-button {
    border: 1px solid var(--sidebar-color);
    background-color: var(--header-color);
  }

  @include styleForWindow();

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

        &:has(.collapsed-parent-label) {
          padding: 0 !important;
        }
      }
    }

    &:not(.n-menu--collapsed) {
      .n-submenu .n-menu-item .n-menu-item-content-header {
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.3px;
        opacity: 0.4;
      }

      .n-submenu .n-submenu-children .n-menu-item-content-header {
        text-transform: none;
        font-weight: 400;
        opacity: 1;
      }
    }

    .n-submenu-children .n-menu-item-content {
      padding-left: 24px !important;
    }
  }
}

.n-layout-scroll-container,
.n-layout {
  background-color: var(--background-color);
}

.n-layout {
  margin-right: var(--layout-margin);
}

.n-layout-scroll-container {
  margin-left: var(--layout-margin);
}
</style>
