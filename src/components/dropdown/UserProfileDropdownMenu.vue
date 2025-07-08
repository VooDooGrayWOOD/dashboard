<template>
  <n-dropdown
    :options="options"
    size="huge"
    v-model:value="activeKey"
    @update:value="navigate"
    @select="(value) => handleSelect(value)"
  >
    <n-space class="profile-dropdown-menu">
      <n-avatar
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        round
      />
      <span>Admin Adminov</span>
    </n-space>
  </n-dropdown>
</template>

<script setup lang="ts">
import { h, computed } from 'vue';
import {
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
} from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';
import { useNavigation } from '@/composables/useNavigation';
import { translate } from '@/helpers';
import { useRouter } from 'vue-router';

const router = useRouter();

const { activeKey, navigate } = useNavigation();

function renderIcon(icon) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
}

const options = computed(() => [
  {
    label: translate('profile'),
    key: '/profile',
    icon: renderIcon(UserIcon),
  },
  {
    label: translate('exit'),
    key: '/login',
    icon: renderIcon(LogoutIcon),
  },
]);

const handleSelect = (value) => {
  router.push({ path: value });
};
</script>

<style lang="scss" scoped>
.n-sapce,
.profile-dropdown-menu {
  display: grid;
  align-items: center;

  .n-avatar {
    display: grid;
    align-items: center;
  }
}
</style>
