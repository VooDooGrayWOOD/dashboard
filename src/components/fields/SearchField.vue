<template>
  <n-space>
    <n-input type="search" :placeholder="placeholder" />
  </n-space>
</template>

<script setup>
import { translate } from '@/helpers';

defineProps({
  placeholder: {
    type: String,
    default: translate('search'),
  },
});
</script>

<style lang="scss" scoped></style>
