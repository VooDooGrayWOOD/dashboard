import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useNavigation() {
  const collapsed = ref(true);
  const activeKey = ref(null);
  const router = useRouter();
  const route = useRoute();

  const navigate = (key) => {
    if (key) {
      activeKey.value = key;
      router.push(key);
    }
  };

  const setActiveKeyFromRoute = () => {
    activeKey.value = route.path;
  };

  setActiveKeyFromRoute();

  return {
    collapsed,
    activeKey,
    navigate,
  };
}
