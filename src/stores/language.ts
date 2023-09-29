import { ref } from "vue";
import { Language } from "@/enums/Language";
import { defineStore } from "pinia";

export const useLanguageStore = defineStore('languages', () => {
    const language = ref<Language>(Language.EN);

    const setLanguage = (lang: Language): void => {
        language.value = lang;
    }

    return {
        language,
        setLanguage
    }
});