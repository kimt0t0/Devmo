import { ref } from "vue";
import { defineStore } from "pinia";

export const useLegalsStore = defineStore('legals', () => {
    const showLegals = ref<boolean>(false);

    const toggleLegals = (): void => {
        showLegals.value = !showLegals.value;
    }

    return {
        showLegals,
        toggleLegals
    }
})