<script setup lang="ts">
import { reactive } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { useGetReadyStore } from '@/stores/getready';
import { Language } from '@/enums/Language';
import type { GetReadyStructureInputs } from '@/interfaces/GetReadyStructureInputs.interface';

const userSavedInputs = useGetReadyStore().getReadySummary.structure;
const structureInputs = reactive<GetReadyStructureInputs>(userSavedInputs);

const onSubmitStructure = (e: Event): void => {
    e.preventDefault();
    useGetReadyStore().setUserStructureInputs(structureInputs);
    useGetReadyStore().selectNextSection();
}
</script>

<template>
    <div class="classic-section get-ready-form-section">
        <form class="get-ready-form" @submit="onSubmitStructure($event)">
            <!-- title -->
            <SectionTitleParticle title="Structure" />

            <!-- users paths -->
            <InputGroupParticle
                :label="useLanguageStore().language === Language.EN ?
                    'What would a typical user do on your website exactly ? Which navigation steps would they follow ?'
                    :
                    'Que ferait un·e utilisateur·ice classique sur ce site ? Quelles étapes de navigation suivrait-iel ?'"
                inputName="usersPaths">
                <textarea maxlength="500" class="ig-input get-ready-input __textarea" id="usersPaths" name="usersPaths"
                    v-model="structureInputs.usersPaths" />
            </InputGroupParticle>

            <!-- user accounts -->
            <form class="input-group">
                <legend class="ig-label">
                    {{
                        useLanguageStore().language === Language.EN ?
                        'Do visitors need to authenticate on their account to do certain things ?'
                        :
                        'Ces visiteur·euse·s ont besoin de s\'authentifier avec un compte pour effectuer certaines actions ? '
                    }}
                </legend>
                <RadioGroupParticle inputName="userAccounts"
                    :label="useLanguageStore().language === Language.EN ? 'Yes' : 'Oui'">
                    <input type="radio" class="radio-input get-ready-input" id="userAccounts" name="userAccounts"
                        :value="true" v-model="structureInputs.userAccounts" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="userAccounts"
                    :label="useLanguageStore().language === Language.EN ? 'No' : 'Non'">
                    <input type="radio" class="radio-input get-ready-input" id="userAccounts" name="userAccounts"
                        :value="false" v-model="structureInputs.userAccounts" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="userAccounts"
                    :label="useLanguageStore().language === Language.EN ? 'I don\'t know' : 'Je ne sais pas'">
                    <input type="radio" class="radio-input get-ready-input" id="userAccounts" name="userAccounts"
                        :value="void" v-model="structureInputs.userAccounts" checked />
                </RadioGroupParticle>
            </form>

            <!-- online sells -->
            <form class="input-group">
                <legend class="ig-label">
                    {{
                        useLanguageStore().language === Language.EN ?
                        'Do you plan to sell products or services online ?'
                        :
                        'Prévoyez-vous de vendre des produits ou des services en ligne ?'
                    }}
                </legend>
                <RadioGroupParticle inputName="onlineSells"
                    :label="useLanguageStore().language === Language.EN ? 'Yes' : 'Oui'">
                    <input type="radio" class="radio-input get-ready-input" id="onlineSells" name="onlineSells"
                        :value="true" v-model="structureInputs.onlineSells" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="userAccounts"
                    :label="useLanguageStore().language === Language.EN ? 'No' : 'Non'">
                    <input type="radio" class="radio-input get-ready-input" id="onlineSells" name="onlineSells"
                        :value="false" v-model="structureInputs.onlineSells" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="userAccounts"
                    :label="useLanguageStore().language === Language.EN ? 'I don\'t know' : 'Je ne sais pas'">
                    <input type="radio" class="radio-input get-ready-input" id="onlineSells" name="userAccounts"
                        :value="void" v-model="structureInputs.onlineSells" checked />
                </RadioGroupParticle>
            </form>

            <!-- contents -->
            <InputGroupParticle inputName="contents" :label="useLanguageStore().language === Language.EN ?
                'What kind of contents do you need on your website ?'
                :
                'De quels types de contenus avez-vous besoin sur ce site ?'" :subtext="useLanguageStore().language === Language.EN ?
        '(Examples: texts, images with quality / quantity, videos, and so on.)'
        :
        '(Exemples: textes, images et quantité / qualité, vidéos, etc.)'">
                <textarea maxlength="255" class="ig-input get-ready-input" id="contents" name="contents"
                    v-model="structureInputs.contents" />
            </InputGroupParticle>

            <!-- advanced -->
            <form class="input-group">
                <legend class="ig-label">
                    {{
                        useLanguageStore().language === Language.EN ?
                        'Do you need advanced functionalities ?'
                        :
                        'Avez-vous besoin de fonctionnalités avancées intégrées au site ?'
                    }}
                </legend>
                <p class="ig-subtext">{{
                    useLanguageStore().language === Language.EN ?
                    '(Examples: timer, editable calendar, mailing list subscription, and so on.)'
                    :
                    '(Exemples: chronomètre, calendrier modifiable, souscription à des listes mail, etc.)'
                }}</p>
                <RadioGroupParticle inputName="advanced"
                    :label="useLanguageStore().language === Language.EN ? 'Yes' : 'Oui'">
                    <input type="radio" class="radio-input get-ready-input" id="advanced" name="advanced" :value="true"
                        v-model="structureInputs.advanced" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="advanced"
                    :label="useLanguageStore().language === Language.EN ? 'No' : 'Non'">
                    <input type="radio" class="radio-input get-ready-input" id="advanced" name="advanced" :value="false"
                        v-model="structureInputs.advanced" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="advanced"
                    :label="useLanguageStore().language === Language.EN ? 'I don\'t know' : 'Je ne sais pas'">
                    <input type="radio" class="radio-input get-ready-input" id="advanced" name="advanced" :value="void"
                        v-model="structureInputs.advanced" checked />
                </RadioGroupParticle>
            </form>

            <!-- advanced details -->
            <InputGroupParticle inputName="advancedDetails" :label="useLanguageStore().language === Language.EN ?
                'If you do, can you explain a bit ?'
                :
                'Si oui, pouvez-vous expliquer un peu ?'">
                <textarea maxlength="255" class="ig-input get-ready-input" id="advancedDetails" name="advancedDetails"
                    v-model="structureInputs.advancedDetails" />
            </InputGroupParticle>

            <!-- admin pannel -->
            <form class="input-group">
                <legend class="ig-label">
                    {{
                        useLanguageStore().language === Language.EN ?
                        'Do you need an administration pannel to modify or update your contents regularly ?'
                        :
                        'Avez-vous besoin d\'un panneau d\'administration pour mettre à jour le contenu régulièrement ?'
                    }}
                </legend>
                <RadioGroupParticle inputName="adminPannel"
                    :label="useLanguageStore().language === Language.EN ? 'Yes' : 'Oui'">
                    <input type="radio" class="radio-input get-ready-input" id="adminPannel" name="adminPannel"
                        :value="true" v-model="structureInputs.adminPannel" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="adminPannel"
                    :label="useLanguageStore().language === Language.EN ? 'No' : 'Non'">
                    <input type="radio" class="radio-input get-ready-input" id="adminPannel" name="adminPannel"
                        :value="false" v-model="structureInputs.adminPannel" />
                </RadioGroupParticle>
                <RadioGroupParticle inputName="adminPannel"
                    :label="useLanguageStore().language === Language.EN ? 'I don\'t know' : 'Je ne sais pas'">
                    <input type="radio" class="radio-input get-ready-input" id="adminPannel" name="adminPannel"
                        :value="void" v-model="structureInputs.adminPannel" checked />
                </RadioGroupParticle>
            </form>


            <!-- form submission -->
            <div class="get-ready-submit-container">
                <ButtonParticle>{{ useLanguageStore().language === Language.EN ? 'Next Step' : 'Étape suivante' }}
                </ButtonParticle>
            </div>
        </form>
    </div>
</template>