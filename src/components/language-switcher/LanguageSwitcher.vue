<template>
  <n-space vertical>
    <n-space class="header-button">
      <n-button
        @click="
          () => {
            changeLanguage('ru');
          }
        "
      >
        Ру
      </n-button>
      <n-button
        @click="
          () => {
            changeLanguage('en');
          }
        "
      >
        En
      </n-button>
    </n-space>
  </n-space>
</template>

<script setup>
import { NButton, NSpace } from 'naive-ui';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLanguage = (lng) => {
  locale.value = lng;
};
</script>

<style lang="scss" scoped>
.header-button {
  .n-button {
    height: 24px;
  }
}
</style>
