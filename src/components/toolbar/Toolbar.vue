<template>
  <div :class="['composite-toolbar', className]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.composite-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
}
</style>
