<template>
  <n-button
    @click="create"
    round
    type="primary"
    v-bind="attrs"
    class="toolbar-create-btn"
  >
    <template #icon>
      <plus-icon />
    </template>
    {{ $t(`${props.text}`) || props.innerText }}
  </n-button>
</template>

<script setup>
import { useAttrs } from 'vue';
import { useRouter } from 'vue-router';
import { PlusCircleOutlined } from '@vicons/antd';
import { renderIcon } from '@/constant/sidebarMenu';

const props = defineProps({
  text: String,
  innerText: String,
});

const PlusIcon = renderIcon(PlusCircleOutlined);

const attrs = useAttrs();
const router = useRouter();

const create = () => {
  // router.push(props.url);
  console.log('🚀 ~ create ~');
};
</script>

<style scoped>
.toolbar-create-btn {
  background: none;
  border-radius: var(--radius1);
  color: var(--white);
}
</style>
