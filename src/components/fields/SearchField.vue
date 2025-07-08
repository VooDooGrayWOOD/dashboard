<template>
  <n-space vertical>
    <n-input
      type="text"
      :placeholder="$t(`${placeholder}`)"
      class="search-field"
      clearable
    >
      <template #suffix><n-icon :size="16" :component="Search" /></template
    ></n-input>
  </n-space>
</template>

<script setup>
import { Search } from '@vicons/carbon';
defineProps({
  placeholder: {
    type: String,
    default: 'search',
  },
});
</script>

<style lang="scss" scoped>
.search-field {
  border-radius: var(--radius1);
  :deep(.n-input__placeholder) {
    top: -2px !important;
  }
}
</style>
