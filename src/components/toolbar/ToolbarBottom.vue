<template>
  <div :class="['toolbar-bottom']">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.toolbar-bottom {
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
}
</style>
