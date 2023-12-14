import { defineStore } from "pinia";
import { ref } from "vue";
import { GetReadyFormSections } from "@/enums/GetReadyFormSections";

export const useGetReadyStore = defineStore('get-ready', () => {

    // VARIABLES
    const selectedFormSection = ref<GetReadyFormSections>(GetReadyFormSections.GENERAL);


    // METHODS
    const setSelectedFormSection = (formSection: GetReadyFormSections): void => {
        selectedFormSection.value = formSection;
    }

    // EXPORTS
    return {
        selectedFormSection,
        setSelectedFormSection
    }
})