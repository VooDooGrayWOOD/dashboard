<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <!-- TODO добавить проверку на есть ли у юзера токен -->
      <template v-if="route.name">
        <Header :breadcrumb="breadcrumb" />
        <Sidebar />
      </template>
      <template v-else>
        <Login />
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
import { EllipsisVertical } from '@vicons/ionicons5';

const route = useRoute();
const breadcrumb = ref([]);
watch(
  () => route.name,
  (newName) => {
    breadcrumb.value = [{ label: newName || '', icon: EllipsisVertical }];
  },
  { immediate: true }
);
</script>

<style scoped lang="scss"></style>
