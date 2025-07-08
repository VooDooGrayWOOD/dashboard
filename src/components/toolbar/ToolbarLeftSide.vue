<template>
  <div :class="['toolbar-left-side']">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.toolbar-left-side {
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
}
</style>
