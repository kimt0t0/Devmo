<script setup lang="ts">
import { reactive } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { useGetReadyStore } from '@/stores/getready';
import { Language } from '@/enums/Language';
import type { GetReadyGeneralInputs } from '@/interfaces/GetReadyGeneralInputs.interface';

const userSavedInputs = useGetReadyStore().getReadySummary.general;
const generalInputs = reactive<GetReadyGeneralInputs>(userSavedInputs);

const onSubmitGeneral = (e: Event): void => {
    e.preventDefault();
    useGetReadyStore().setUserGeneralInputs(generalInputs);
    useGetReadyStore().selectNextSection();
}
</script>

<template>
    <div class="classic-section get-ready-form-section">

        <!-- *** FRENCH VERSION *** -->
        <form class="get-ready-form" @submit="onSubmitGeneral($event)">
            <!-- title -->
            <SectionTitleParticle title="Cadrage général" />
            <!-- summarize project -->
            <InputGroupParticle inputName="project-summary" :label="useLanguageStore().language === Language.EN ?
                'Summarize your project in 2 or 3 short sentences :'
                :
                'Résumez votre projet en 2 ou 3 phrases courtes'">
                <textarea maxlength="255" class="ig-input get-ready-input __textarea" id="project-summary"
                    name="project-summary" v-model="generalInputs.summary" />
            </InputGroupParticle>
            <!-- form submission -->
            <div class="get-ready-submit-container">
                <ButtonParticle>Étape suivante
                </ButtonParticle>
            </div>
        </form>

        <!-- *** ENGLISH VERSION *** -->

    </div>
</template>

<style lang="scss">
@use '@/styles/theme.scss' as *;
</style>