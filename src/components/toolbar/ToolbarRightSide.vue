<template>
  <div :class="['toolbar-right-side']">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.toolbar-right-side {
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
}
</style>
