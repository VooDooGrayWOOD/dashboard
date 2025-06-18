<template>
  <n-result
    status="404"
    :title="`404 ${$t('notFound')}`"
    :description="$t('youKnowLifeIsAlwaysRidiculous')"
  >
    <template #footer>
      <n-button @click="handleClick">{{ $t('onMain') }}</n-button>
    </template>
  </n-result>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClick = () => {
  router.push({ path: '/' });
};
</script>
