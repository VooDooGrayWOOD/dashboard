<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="(item, index) in items" :key="index">
      <template v-if="item.label !== ''">
        <span v-if="item.key">{{ $t(`${item.key}.title`) }}</span>
        <n-breadcrumb-item
          ><n-icon :component="EllipsisVerticalOutline"
        /></n-breadcrumb-item>
        <span>{{ $t(`${item.label}`) }}</span>
      </template>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
import { EllipsisVerticalOutline } from '@vicons/ionicons5';
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
