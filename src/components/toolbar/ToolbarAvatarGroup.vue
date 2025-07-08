<template>
  <div class="members">
    <span class="title">{{ $t(`${title}`) }}:</span>
    <avatar-group />
  </div>
</template>

<script setup>
import { AvatarGroup } from '../avatar-group';

defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.members {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
