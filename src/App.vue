<template>
  <n-config-provider :theme="darkTheme" class="app-wrapper">
    <n-message-provider>
      <!-- TODO добавить проверку на есть ли у юзера токен -->
      <template v-if="route.name">
        <div class="header-sidebar">
          <Header :breadcrumb="breadcrumb" />
          <sidebar />
        </div>
      </template>
      <template v-else>
        <login />
      </template>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Login } from '@/pages/auth';
import { darkTheme } from 'naive-ui';
import { Sidebar, Header } from '@/components';

const route = useRoute();
const breadcrumb = ref([]);

watch(
  () => [route.name, route.meta.key],

  ([name, key]) => {
    breadcrumb.value = [
      {
        label: name || '',
        key: key || '',
      },
    ];
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.app-wrapper {
  position: absolute;

  .header-sidebar {
    width: 100vw !important;
    display: grid;
    position: fixed;
  }
}
</style>
