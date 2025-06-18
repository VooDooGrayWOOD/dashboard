<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="(item, index) in items" :key="index">
      <template v-if="item.label !== ''">
        <n-breadcrumb-item><n-icon :component="item.icon" /></n-breadcrumb-item>
        <span>{{ $t(`route.${item.label}`) }}</span>
      </template>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
