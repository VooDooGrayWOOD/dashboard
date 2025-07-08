<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="(item, index) in items" :key="index">
      <template v-if="item.label !== ''">
        <!-- TO DO: решить как лучше реализовать bradcrumb -->
        <!-- <span v-if="item.key">{{ $t(`${item.key}.title`) }}</span>
        <n-breadcrumb-item>
          <n-icon :component="ReturnDownForwardOutline" disabled />
        </n-breadcrumb-item> -->
        <span>{{ $t(`${item.label}`) }}</span>
      </template>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
// import {
//   EllipsisVerticalOutline,
//   ReturnDownForwardOutline,
// } from '@vicons/ionicons5';
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
