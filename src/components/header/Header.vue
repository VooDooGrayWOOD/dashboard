<template>
  <div className="header-wrapper">
    <UserProfileDropdownMenu />
    <div class="breadcrumbs"><Breadcrumb :items="breadcrumb" /></div>
    <div class="language-switcher"><LanguageSwitcher /></div>
  </div>
</template>

<script setup>
import { Breadcrumb, LanguageSwitcher } from '@/components';
import UserProfileDropdownMenu from '../dropdown/UserProfileDropdownMenu.vue';

defineProps({
  breadcrumb: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: grid;
  grid-template-columns: 225px 1fr 1fr;
  align-items: center;
  padding: 10px;
  background-color: var(--header-color);
  border: 1px solid var(--sidebar-color);
  border-radius: var(--radius1);
  margin: 5px;

  .breadcrumbs {
    display: grid;
    justify-content: start;
    padding-left: 5px;
  }

  .language-switcher {
    display: grid;
    justify-content: end;
  }
}
</style>
