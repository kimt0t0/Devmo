import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { GetReadyFormSections } from "@/enums/GetReadyFormSections";
import type { GetReadyGeneralInputs } from "@/interfaces/GetReadyGeneralInputs.interface";
import type { GetReadyStructureInputs } from "@/interfaces/GetReadyStructureInputs.interface";
import type { GetReadyDetailsInputs } from "@/interfaces/GetReadyDetailsInputs.interface";

export const useGetReadyStore = defineStore('get-ready', () => {

    // VARIABLES

    // follow form progress
    const formProgress = ref<number>(0);
    const selectedFormSection = ref<GetReadyFormSections>(GetReadyFormSections.GENERAL);

    // user inputs
    const getReadySummary = reactive<any>({
        general: {},
        structure: {},
        details: {
            pagesList: [
                {
                    title: 'Titre de la page',
                    sections: [{ title: 'Titre de la section' }]
                }
            ]
        }
    });

    // METHODS

    // follow form progress
    const incrementFormProgress = (): void => {
        if (formProgress.value < 3) formProgress.value++;
    };

    const decrementFormProgress = (): void => {
        if (formProgress.value > 0) formProgress.value--;
    };

    const setSelectedFormSection = (formSection: GetReadyFormSections): void => {
        selectedFormSection.value = formSection;
    }

    // select previous section
    const selectPreviousSection = (): void => {
        switch (useGetReadyStore().selectedFormSection) {
            case GetReadyFormSections.GENERAL:
                console.error(`Ce comportement n'est pas prévu par l'application.`);
                break;
            case GetReadyFormSections.STRUCTURE:
                setSelectedFormSection(GetReadyFormSections.GENERAL);
                break;
            case GetReadyFormSections.DETAILS:
                setSelectedFormSection(GetReadyFormSections.STRUCTURE);
                break;
            case GetReadyFormSections.SUMMARY:
                setSelectedFormSection(GetReadyFormSections.DETAILS);
                break;
            default:
                setSelectedFormSection(GetReadyFormSections.GENERAL);
                break;
        };
        decrementFormProgress();
    };

    // select previous section
    const selectNextSection = (): void => {
        switch (useGetReadyStore().selectedFormSection) {
            case GetReadyFormSections.GENERAL:
                setSelectedFormSection(GetReadyFormSections.STRUCTURE);
                break;
            case GetReadyFormSections.STRUCTURE:
                setSelectedFormSection(GetReadyFormSections.DETAILS);
                break;
            case GetReadyFormSections.DETAILS:
                setSelectedFormSection(GetReadyFormSections.SUMMARY);
                break;
            case GetReadyFormSections.SUMMARY:
                console.error(`Ce comportement n'est pas prévu par l'application.`);
                break;
            default:
                setSelectedFormSection(GetReadyFormSections.GENERAL);
                break;
        };
        incrementFormProgress();
    };

    // user inputs
    const setUserGeneralInputs = (userInputs: GetReadyGeneralInputs): void => {
        getReadySummary.general = userInputs;
    };

    const setUserStructureInputs = (userInputs: GetReadyStructureInputs): void => {
        getReadySummary.structure = userInputs;
    };

    const setUserDetailsInputs = (userInputs: GetReadyDetailsInputs): void => {
        getReadySummary.details = userInputs;
    };

    // EXPORTS
    return {
        // VARIABLES
        formProgress,
        selectedFormSection,
        getReadySummary,
        // METHODS
        incrementFormProgress,
        decrementFormProgress,
        setSelectedFormSection,
        selectPreviousSection,
        selectNextSection,
        setUserGeneralInputs,
        setUserStructureInputs,
        setUserDetailsInputs
    }
})