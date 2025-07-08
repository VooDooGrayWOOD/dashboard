<template>
  <div :class="['toolbar-top']">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.toolbar-top {
  display: flex;
  gap: 20px;
  width: 100%;
  padding-bottom: 10px;
  align-items: center;
  border-bottom: 1px solid var(--green2);
}
</style>
