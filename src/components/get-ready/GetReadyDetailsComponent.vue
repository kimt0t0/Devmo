<script setup lang="ts">
import { reactive } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { useGetReadyStore } from '@/stores/getready';
import { Language } from '@/enums/Language';
import type { GetReadyDetailsInputs } from '@/interfaces/GetReadyDetailsInputs.interface';
import { getReady } from '@/composables/getReady.composable';

const userSavedInputs = useGetReadyStore().getReadySummary.details;
const detailsInputs = reactive<GetReadyDetailsInputs>(userSavedInputs);

const addPage = (): void => {
    detailsInputs.pagesList?.push({ title: 'Titre de la page', sections: [{ title: 'Titre de la section' }] });
};

const addSection = (pageIndex: number): void => {
    if (detailsInputs.pagesList) detailsInputs.pagesList[pageIndex].sections?.push({ title: 'Titre de la section' });
}

const removePage = (pageIndex: number): void => {
    if (detailsInputs.pagesList) {
        detailsInputs.pagesList.splice(pageIndex);
    }
}

const removeSection = (pageIndex: number, sectionIndex: number): void => {
    if (detailsInputs.pagesList && detailsInputs.pagesList[pageIndex].sections) detailsInputs.pagesList[pageIndex].sections?.splice(sectionIndex);
}

const onSubmitDetails = (e: Event) => {
    e.preventDefault();
    useGetReadyStore().setUserDetailsInputs(detailsInputs);
    getReady().writeGetReady();
}
</script>

<template>
    <div class="classic-section get-ready-form-section">
        <form class="get-ready-form" @submit="onSubmitDetails($event)">
            <!-- Title -->
            <SectionTitleParticle :title="useLanguageStore().language === Language.EN ? 'Details' : 'Détails'" />

            <!-- Pages List -->
            <div class="pages-list-container">
                <h3 class="pages-list-title">Les Pages</h3>

                <ol class="pages-list">
                    <li class="page-item" v-for="(page, index) of detailsInputs.pagesList" :key="index">
                        <div class="page-item-contents" v-if="detailsInputs.pagesList && detailsInputs.pagesList[index]">
                            <div class="page-header">
                                <h4 class="page-item-title">PAGE "{{ page.title.toUpperCase() }}"</h4>
                                <ButtonParticle type="button" color="dark" size="smaller" @click="removePage(index)">X
                                </ButtonParticle>
                            </div>

                            <!-- title -->
                            <InputGroupParticle :inputName="'page-title-' + index" :label="useLanguageStore().language === Language.EN ?
                                'Page title :'
                                :
                                'Titre de la page :'"
                                :subtext="useLanguageStore().language === Language.EN && index === 0 ?
                                    'Find a main title for each page. It should clearly describe the main role or theme of this page and use one or two key words.'
                                    :
                                    'Trouvez un titre principal pour chaque page. Il devrait décrire clairement son rôle ou thème principal en utilisant un ou deux mots-clés.'">
                                <input type="text" class="ig-input" :id="'page-title-' + index"
                                    :name="'page-title-' + index" v-model="detailsInputs.pagesList[index].title" />
                            </InputGroupParticle>

                            <!-- summary -->
                            <InputGroupParticle :inputName="'page-summary' + index" :label="useLanguageStore().language === Language.EN ?
                                'Summarize its role in one sentence :'
                                :
                                'Résumez en une phrase le rôle de cette page :'">
                                <input type="text" class="ig-input" :id="'page-summary' + index"
                                    :name="'page-summary' + index" v-model="detailsInputs.pagesList[index].summary" />
                            </InputGroupParticle>

                            <!-- sections -->
                            <div class="get-ready-sections-container">
                                <h5 class="get-ready-subsection-title">Sections :</h5>
                                <p class="get-ready-subsection-text">{{
                                    useLanguageStore().language === Language.EN && index === 0 ?
                                    'You can detail bellow the sections you want on this page (titles are mandatory).'
                                    :
                                    'Vous pouvez détailler ci-dessous les sections que à créer (titre obligatoire).'
                                }}</p>
                                <p class="get-ready-subsection-text">{{
                                    useLanguageStore().language === Language.EN && index === 0 ?
                                    'Each page must have at least one section.'
                                    :
                                    'Chaque page doit contenir une section au minimum.'
                                }}</p>

                                <ol class="sections-list">
                                    <li class="section-item" v-for="(section, sectionIndex) of page.sections"
                                        :key="sectionIndex">
                                        <div class="section-item-contents"
                                            v-if="page.sections && page.sections[sectionIndex]">
                                            <div class="section-header">
                                                <h6 class="page-section-title">Section "{{ section.title }}"</h6>
                                                <ButtonParticle type="button" color="dark" size="smaller"
                                                    @click="removeSection(index, sectionIndex)">X</ButtonParticle>
                                            </div>
                                            <!-- (title) -->
                                            <InputGroupParticle :inputName="'page' + index + 'section-title' + sectionIndex"
                                                :label="useLanguageStore().language === Language.EN ?
                                                    'Section\'s title :'
                                                    :
                                                    'Titre de la section :'">
                                                <input type="text" class="ig-input"
                                                    :id="'page' + index + 'section-title' + sectionIndex"
                                                    :name="'page' + index + 'section-title' + sectionIndex"
                                                    v-model="detailsInputs.pagesList[index].sections[sectionIndex].title" />
                                            </InputGroupParticle>
                                            <!-- (summary) -->
                                            <InputGroupParticle
                                                :inputName="'page' + index + 'section-summary' + sectionIndex" :label="useLanguageStore().language === Language.EN ?
                                                    'Summarize this section\'s role in one sentence :'
                                                    :
                                                    'Résumez le rôle de cette section in one sentence :'">
                                                <input type="text" class="ig-input"
                                                    :id="'page' + index + 'section-summary' + sectionIndex"
                                                    :name="'page' + index + 'section-summary' + sectionIndex"
                                                    v-model="detailsInputs.pagesList[index].sections[sectionIndex].summary" />
                                            </InputGroupParticle>
                                            <!-- (contents) -->
                                            <InputGroupParticle
                                                :inputName="'page' + index + 'section-contents' + sectionIndex" :label="useLanguageStore().language === Language.EN ?
                                                    'What kind of contents should be displayed here ?'
                                                    :
                                                    'Quels types de contenus devraient s\'afficher ici ?'">
                                                <input type="text" class="ig-input"
                                                    :id="'page' + index + 'section-contents' + sectionIndex"
                                                    :name="'page' + index + 'section-contents' + sectionIndex"
                                                    v-model="detailsInputs.pagesList[index].sections[sectionIndex].contents" />
                                            </InputGroupParticle>
                                            <!-- (priority) -->
                                            <form class="input-group">
                                                <legend class="ig-label">
                                                    {{
                                                        useLanguageStore().language === Language.EN ?
                                                        'Select the priority level of this section :'
                                                        :
                                                        'Sélectionnez le niveau de priorité de cette section :'
                                                    }}
                                                </legend>

                                                <RadioGroupParticle
                                                    :inputName="'page' + index + 'section-priority' + sectionIndex"
                                                    style="button-like"
                                                    :label="useLanguageStore().language === Language.EN ? 'Low' : 'Faible'">
                                                    <input type="radio" class="radio-input __button-like"
                                                        :id="'page' + index + 'section-priority' + sectionIndex"
                                                        :name="'page' + index + 'section-priority' + sectionIndex"
                                                        :value="1"
                                                        v-model="detailsInputs.pagesList[index].sections[sectionIndex].priority" />
                                                </RadioGroupParticle>

                                                <RadioGroupParticle
                                                    :inputName="'page' + index + 'section-priority' + sectionIndex"
                                                    style="button-like"
                                                    :label="useLanguageStore().language === Language.EN ? 'Medium' : 'Moyen'">
                                                    <input type="radio" class="radio-input __button-like"
                                                        :id="'page' + index + 'section-priority' + sectionIndex"
                                                        :name="'page' + index + 'section-priority' + sectionIndex"
                                                        :value="2" checked
                                                        v-model="detailsInputs.pagesList[index].sections[sectionIndex].priority" />
                                                </RadioGroupParticle>

                                                <RadioGroupParticle
                                                    :inputName="'page' + index + 'section-priority' + sectionIndex"
                                                    style="button-like"
                                                    :label="useLanguageStore().language === Language.EN ? 'High' : 'Élevée'">
                                                    <input type="radio" class="radio-input __button-like"
                                                        :id="'page' + index + 'section-priority' + sectionIndex"
                                                        :name="'page' + index + 'section-priority' + sectionIndex"
                                                        :value="3"
                                                        v-model="detailsInputs.pagesList[index].sections[sectionIndex].priority" />
                                                </RadioGroupParticle>
                                            </form>
                                        </div>
                                    </li>
                                </ol>
                                <div class="get-ready-button-container">
                                    <ButtonParticle type="button" color="alert" size="small" @click="addSection(index)">+
                                        Section</ButtonParticle>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                <div class="get-ready-button-container">
                    <ButtonParticle type="button" color="alert" size="small" @click="addPage()">+ Page</ButtonParticle>
                </div>

            </div>

            <!-- Header -->

            <!-- form submission -->
            <div class="get-ready-submit-container">
                <ButtonParticle>{{ useLanguageStore().language === Language.EN ? 'Finish & Save' : 'Terminer & Enregistrer'
                }}
                </ButtonParticle>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
@use '@/styles/theme.scss' as *;

.pages-list-container {
    border-radius: $radius-xs;
    background-color: color($neutral, 60);
    padding: $space-m $space-s;
    width: fit-content;
    margin: $space-m 0 $space-xl;

    .pages-list-title {
        margin: 0;
        line-height: 1.5;
        font-weight: 600;
    }

    .page-header,
    .section-header {
        display: flex;
        justify-content: space-between;
    }

    .page-item-contents {
        border-radius: $radius-xs;
        background-color: color($neutral, 55);
        padding: $space-s;
        margin: $space-s 0;

        .page-item-title {
            width: fit-content;
            padding: $space-xs $space-l $space-xs 0;
            border-bottom: 2px solid color($dark, 55);
            font-weight: 500;
            line-height: 1;
            margin: 0 0 $space-m;
        }

        .input-group {
            margin: $space-m 0;

            .ig-label {
                font-size: $txt-xs;
            }

            .ig-input {
                font-size: $txt-xs;
            }
        }

        .get-ready-sections-container {
            margin-top: $space-xl;
            border-top: 2px solid color($dark, 50);
            padding: $space-m 0;
        }

        .page-section-title {
            font-size: $txt-xxs;
            margin: $space-m 0 0;
            border-bottom: 2px solid color($dark, 50);
            width: fit-content;
        }

        .section-item-contents {

            .ig-label,
            .ig-input,
            .radio-label,
            .radio-input {
                font-size: $txt-xxs;
            }
        }
    }
}
</style>