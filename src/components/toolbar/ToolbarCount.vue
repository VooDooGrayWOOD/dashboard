<template>
  <div className="toolbar-count">
    <div>
      {{ $t(`${text}`) }}: <span className="count">{{ count }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  count: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped></style>
