import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function useNavigation() {
  const collapsed = ref(false);
  const activeKey = ref(null);
  const router = useRouter();

  const navigate = (key) => {
    if (key) {
      activeKey.value = key;
      router.push(key);
    }
  };

  return {
    collapsed,
    activeKey,
    navigate,
  };
}
