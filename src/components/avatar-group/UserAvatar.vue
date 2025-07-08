<template>
  <n-badge :value="badge">
    <n-avatar
      :size="size"
      :src="
        user.avatar ||
        'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      "
    />
  </n-badge>
</template>

<script setup>
defineProps({
  user: Object,
  size: { type: String, default: 'small' },
  badge: { type: Number, default: 0 },
});
</script>

<style lang="scss" scoped></style>
