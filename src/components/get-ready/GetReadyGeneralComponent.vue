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
        <form class="get-ready-form" @submit="onSubmitGeneral($event)">
            <!-- title -->
            <SectionTitleParticle
                :title="useLanguageStore().language === Language.EN ? 'Global Setting' : 'Cadrage général'" />

            <!-- project summary -->
            <InputGroupParticle inputName="project-summary" :label="useLanguageStore().language === Language.EN ?
                'Summarize your project in 2 or 3 short sentences :'
                :
                'Résumez votre projet en 2 ou 3 phrases courtes'">
                <textarea maxlength="255" class="ig-input get-ready-input __textarea" id="project-summary"
                    name="project-summary" v-model="generalInputs.summary" />
            </InputGroupParticle>

            <!-- website / app visitors -->
            <InputGroupParticle maxlength="155" inputName="project-visitors"
                :label="useLanguageStore().language === Language.EN ? 'Who are your online targets ?' : 'Qui est votre public cible en ligne ?'">
                <textarea maxlength="255" class="ig-input get-ready-input __textarea" id="project-visitors"
                    name="project-visitors" v-model="generalInputs.visitors" />
            </InputGroupParticle>

            <!-- key information -->
            <InputGroupParticle inputName="key-information"
                :label="useLanguageStore().language === Language.EN ? 'Which information do you want to put forward the most ? (Pick 3 to 5 items)' : 'Quelles informations désirez-vous le plus mettre en avant ? (Choisissez 3 à 5 éléments)'">
                <textarea maxwidth="500" class="ig-input get-ready-input __textarea" id="key-information"
                    name="key-information" v-model="generalInputs.keyInformation" />
            </InputGroupParticle>

            <!-- atmosphere -->
            <InputGroupParticle inputName="atmosphere"
                :label="useLanguageStore().language === Language.EN ? 'Use 3 adjectives to describe the type of atmosphere you want on your app / website :' : 'Décrivez en 3 adjectifs le type d\'atmosphère que vous souhaitez voir sur votre site / application :'">
                <input type="text" class="ig-input get-ready-input" id="atmosphere" name="atmosphere"
                    v-model="generalInputs.atmosphere" />
            </InputGroupParticle>

            <!-- shapes -->
            <div class="input-group">
                <legend class="ig-label">
                    {{
                        useLanguageStore().language === Language.EN ?
                        'What type of shapes do you want ? '
                        : 'Quels types de formes souhaitez - vous ? '
                    }}
                </legend>
                <RadioGroupParticle inputName="shapes"
                    :label="useLanguageStore().language === Language.EN ? 'Rounded' : 'Arrondies'">
                    <input type="radio" class="radio-input get-ready-input" id="shapes" name="shapes" value="round"
                        v-model="generalInputs.shapes" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="shapes"
                    :label="useLanguageStore().language === Language.EN ? 'Angular' : 'Angulaires'">
                    <input type="radio" class="radio-input get-ready-input" id="shapes" name="shapes" value="angular"
                        v-model="generalInputs.shapes" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="shapes"
                    :label="useLanguageStore().language === Language.EN ? 'I don\'t know' : 'Je ne sais pas'">
                    <input type="radio" class="radio-input get-ready-input" id="shapes" name="shapes" value="undecided"
                        v-model="generalInputs.shapes" checked />
                </RadioGroupParticle>
            </div>

            <!-- colors -->
            <InputGroupParticle inputName="colors"
                :label="useLanguageStore().language === Language.EN ? 'Pick one to three colors for your visual identity :' : 'Choisissez une à trois couleurs pour votre identité visuelle :'"
                :subtext="useLanguageStore().language === Language.EN ?
                    '(You may enter hexadecimal or hsl values if you wish.)'
                    :
                    '(Vous pouvez entrer les valeurs hexadécimales ou hsl correspondantes si vous le souhaitez.)'">
                <input type="text" class="ig-input get-ready-input" id="colors" name="colors"
                    v-model="generalInputs.colors" />
            </InputGroupParticle>

            <!-- inspirations -->
            <InputGroupParticle inputName="inspirations"
                :label="useLanguageStore().language === Language.EN ? 'Note two to four links to web pages you wish your website could look like :' : 'Notez deux à quatre liens vers des pages web auxquelles vous aimeriez que votre site ressemble :'">
                <!-- links: -->
                <input type="" class="ig-input get-ready-input" id="inspirations" name="inspirations"
                    v-model="generalInputs.inspirations" />
            </InputGroupParticle>

            <!-- inspirations details -->
            <InputGroupParticle inputName="inspirationsDetails"
                :label="useLanguageStore().language === Language.EN ? 'Can you summarize why they inspire you ? ' : 'Pouvez-vous résumer en quoi ces sites vous inspirent ?'">
                <textarea maxlength="255" class="ig-input get-ready-input __textarea" id="inspirationsDetails"
                    name="inspirationsDetails" v-model="generalInputs.inspirationsDetails" />
            </InputGroupParticle>

            <!-- form submission -->
            <div class="get-ready-submit-container">
                <ButtonParticle>{{ useLanguageStore().language === Language.EN ? 'Next Step' : 'Étape suivante' }}
                </ButtonParticle>
            </div>
        </form>


    </div>
</template>

<style lang="scss">
@use '@/styles/theme.scss' as *;
</style>