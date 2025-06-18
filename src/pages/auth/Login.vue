<template>
  <div class="grid-container">
    <n-card :title="$t('entrance')" class="header-title">
      <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item path="email" :label="$t('email')">
          <n-input
            v-model:value="model.email"
            type="email"
            :placeholder="$t('enterEmail')"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="password" :label="$t('password')">
          <n-input
            v-model:value="model.password"
            type="password"
            show-password-on="mousedown"
            :placeholder="$t('password')"
            :maxlength="8"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <div style="display: flex; justify-content: flex-end">
              <n-button
                :disabled="model.password === null || model.email === null"
                round
                type="primary"
                @click="handleValidateButtonClick"
              >
                {{ $t('enter') }}
              </n-button>
            </div>
          </n-col>
        </n-row>
      </n-form>
    </n-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMessage } from 'naive-ui';
import { translate } from '@/helpers';

const formRef = ref(null);
const message = useMessage();

const model = ref({
  email: null,
  password: null,
});

const rules = {
  email: [
    {
      required: true,
      message: translate('emailIsRequired'),
    },
  ],
  password: [
    {
      required: true,
      message: translate('passwordIsRequired'),
    },
  ],
};

const handleValidateButtonClick = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid');
    } else {
      console.log(errors);
      message.error('Invalid');
    }
  });
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  place-items: center;
  height: 100vh;

  .n-card {
    max-width: 300px;
    background: none;
    border-radius: var(--radius1);
  }

  .header-title {
    @include semiboldSemibold24();
  }
}
</style>
