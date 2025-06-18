import { translate } from '@/helpers';
import { NIcon } from 'naive-ui';
import { h, computed } from 'vue';
import { FundProjectionScreenOutlined } from '@vicons/antd';
import { InventoryManagement, Task } from '@vicons/carbon';
import { SettingsOutline } from '@vicons/ionicons5';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export const sidebarMenuOptions = computed(() => [
  {
    label: translate('managment.title'),
    key: '/managment',
    icon: renderIcon(InventoryManagement),
    children: [
      {
        label: translate('managment.projects'),
        key: '/projects',
        icon: renderIcon(FundProjectionScreenOutlined),
      },
      {
        label: translate('managment.tasks'),
        key: '/tasks',
        icon: renderIcon(Task),
      },
      {
        label: translate('settings'),
        key: '/settings',
        icon: renderIcon(SettingsOutline),
      },
    ],
  },
]);
