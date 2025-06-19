import { translate } from '@/helpers';
import { NIcon } from 'naive-ui';
import { h, computed } from 'vue';
import { FundProjectionScreenOutlined } from '@vicons/antd';
import {
  Task,
  ToolKit,
  Building,
  Catalog,
  ArrowsHorizontal,
  ContainerSoftware,
  Report,
} from '@vicons/carbon';
import { SettingsOutline } from '@vicons/ionicons5';

export const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

export const sidebarMenuOptions = computed(() => [
  {
    label: translate('management.title'),
    key: '/management',
    children: [
      {
        label: translate('management.projects'),
        key: '/management/projects',
        icon: renderIcon(FundProjectionScreenOutlined),
      },
      {
        label: translate('management.tasks'),
        key: '/management/tasks',
        icon: renderIcon(Task),
      },
      {
        label: translate('settings'),
        key: '/management/settings',
        icon: renderIcon(SettingsOutline),
      },
    ],
  },
  {
    label: translate('manufacture.title'),
    key: '/manufacture',
    children: [
      {
        label: translate('equipment.title'),
        key: '/manufacture/equipment',
        icon: renderIcon(ToolKit),
      },
      {
        label: translate('productionWorkshop.plural'),
        key: '/manufacture/workshop',
        icon: renderIcon(Building),
      },
      {
        label: translate('settings'),
        key: '/manufacture/settings',
        icon: renderIcon(SettingsOutline),
      },
    ],
  },
  {
    label: translate('warehouse.title'),
    key: '/warehouse',
    children: [
      {
        label: translate('nomenclature.title'),
        key: '/warehouse/nomenclature',
        icon: renderIcon(Catalog),
      },
      {
        label: translate('nomenclatureMovement.plural'),
        key: '/warehouse/nomenclature-movement',
        icon: renderIcon(ArrowsHorizontal),
      },
      {
        label: translate('warehouse.plural'),
        key: '/warehouse/warehouses',
        icon: renderIcon(ContainerSoftware),
      },
      {
        label: translate('reports.plural'),
        key: '/warehouse/warehouse-reports',
        icon: renderIcon(Report),
      },
      {
        label: translate('settings'),
        key: '/warehouse/settings',
        icon: renderIcon(SettingsOutline),
      },
    ],
  },
]);
