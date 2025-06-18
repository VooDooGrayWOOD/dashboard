<template>
  <div class="grid-container">
    <div class="language-switcher">
      <language-switcher />
    </div>

    <div class="content">
      <div class="animation-container"><login-animation /></div>
      <n-card :title="$t('entrance')" class="login-card">
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
                  class="login-btn"
                >
                  {{ $t('enter') }}
                </n-button>
              </div>
            </n-col>
          </n-row>
        </n-form>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMessage } from 'naive-ui';
import { LanguageSwitcher } from '@/components';
import { translate } from '@/helpers';
import { LoginAnimation } from '@/components/animation';

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
  grid-template-rows: auto 1fr;
  height: 100vh;
  padding: 20px;

  .language-switcher {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-bottom: 20px;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 40px; /* Уменьшаем расстояние между колонками */
    max-width: 900px; /* Ограничиваем максимальную ширину контейнера */
    width: 100%;
    margin: 0 auto; /* Центрируем контейнер */
  }

  .animation-container {
    display: flex;
    justify-content: flex-end; /* Выравниваем анимацию к правому краю контейнера */
    width: 100%;
  }

  .login-card {
    width: 100%;
    max-width: 300px;
    background: none;
    border-radius: var(--radius1);
    @include semiboldSemibold24();

    .login-btn {
      background: none;
      border-radius: var(--radius1);
      color: var(--white);
    }
  }
}
</style>
