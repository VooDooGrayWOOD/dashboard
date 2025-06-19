<template>
  <search-field :placeholder="placeholder" />
</template>

<script setup>
import { SearchField } from '../fields';
defineProps({
  placeholder: String,
});
</script>

<style lang="scss" scoped></style>
