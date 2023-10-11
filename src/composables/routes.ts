import { computed } from "vue";
import { useRoute } from "vue-router";

export function useRoutes() {
    const route = useRoute();
    const activePath = computed(() => route.path);

    return {
        activePath
    };
}