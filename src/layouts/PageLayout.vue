<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  @include styleForWindow();
}
</style>
