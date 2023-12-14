<script lang="ts" setup>
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
import { useLanguageStore } from '@/stores/language';
import { useGetReadyStore } from '@/stores/getready';
import { Language } from '@/enums/Language';
import { GetReadyFormSections } from '@/enums/GetReadyFormSections';
import GetReadyGeneralComponent from '@/components/get-ready/GetReadyGeneralComponent.vue';
import GetReadyStructureComponent from '@/components/get-ready/GetReadyStructureComponent.vue';
import GetReadyDetailsComponent from '@/components/get-ready/GetReadyDetailsComponent.vue';
import GetReadySummaryComponent from '@/components/get-ready/GetReadySummaryComponent.vue';

// set selected form section
const setSelectedFormSection = (sectionName: GetReadyFormSections): void => {

}

// select previous section
const selectPreviousSection = (): void => {
    switch (useGetReadyStore().selectedFormSection) {
        case GetReadyFormSections.GENERAL:
            console.error(`Ce comportement n'est pas prévu par l'application.`);
            break;
        case GetReadyFormSections.STRUCTURE:
            useGetReadyStore().setSelectedFormSection(GetReadyFormSections.GENERAL);
            break;
        case GetReadyFormSections.DETAILS:
            useGetReadyStore().setSelectedFormSection(GetReadyFormSections.STRUCTURE);
            break;
        case GetReadyFormSections.SUMMARY:
            useGetReadyStore().setSelectedFormSection(GetReadyFormSections.DETAILS);
            break;
        default:
            useGetReadyStore().setSelectedFormSection(GetReadyFormSections.GENERAL);
            break;
    }
};

// select previous section
const selectNextSection = (): void => {
    switch (useGetReadyStore().selectedFormSection) {
        case GetReadyFormSections.GENERAL:
            useGetReadyStore().setSelectedFormSection(GetReadyFormSections.STRUCTURE);
            break;
        case GetReadyFormSections.STRUCTURE:
            useGetReadyStore().setSelectedFormSection(GetReadyFormSections.DETAILS);
            break;
        case GetReadyFormSections.DETAILS:
            useGetReadyStore().setSelectedFormSection(GetReadyFormSections.SUMMARY);
            break;
        case GetReadyFormSections.SUMMARY:
            console.error(`Ce comportement n'est pas prévu par l'application.`);
            break;
        default:
            useGetReadyStore().setSelectedFormSection(GetReadyFormSections.GENERAL);
            break;
    }
};
</script>

<template>
    <section class="classic-section classic-container">
        <!-- Title -->
        <HeroParticle
            :title="useLanguageStore().language === Language.EN ? 'Get ready for your project' : 'Préparez votre projet'" />
        <!-- English introduction -->
        <div v-if="useLanguageStore().language === Language.EN" class="get-ready-intro">
            <p class="classic-text">
                <strong>Preliminary suggestion:</strong>
            </p>
            <p class="classic-text">Please be aware that if
                you are willing to do this professionally you will need two or three hours to complete the full process.
            </p>
            <p class="classic-text">Unfortunately, for financial reasons this website doesn't allow you to
                save your work (yet). If you need to split this task in multiple sessions, you may simply take notes on your
                own. Then if you are willing to work with me you can email it to me in the format that best suits you.
                Otherwise, you will be able to send me a complete document at the end of this form.
            </p>
            <p class="classic-text">If this task is too hard for you, just do what you can and I will help
                you with the remainder ! It's perfectly normal if you don't have all the answers yet.</p>
            <p class="classic-text">Of course, your ideas are yours. I will not copy them or use them for my
                own purposes. I will not either publish or share them with anyone without your written permission.</p>
        </div>
        <!-- French introduction -->
        <div v-else class="get-ready-intro">
            <p class="classic-text"><strong>Conseils préalables:</strong></p>
            <p class="classic-text">Si vous souhaitez réalisez cette tâche de façon professionnelle, vous
                aurez probablement besoin de deux ou trois heures pour réaliser toutes les étapes et compléter l'ensemble.
            </p>
            <p class="classic-text">Pour le moment, pour des raisons financières, ce site ne permet pas
                (encore) de sauvegarder votre travail. Si vous avez besoin de découper ce travail en plusieurs sessions,
                vous pouvez simplement prendre des notes de votre côté. Ainsi si vous souhaitez travailler avec moi vous
                pourrez simplement me les envoyer par e-mail dans le format qui vous convient. Si vous faites tout en une
                session, vous pourrez m'envoyer votre document complété directement à la fin du formulaire.</p>
            <p class="classic-text">Si vous rencontrez des difficultés, faites ce que vous pouvez et je vous
                aiderai pour le reste ! Rassurez-vous: c'est tout à fait normal si vous n'avez pas encore toutes les
                réponses.</p>
            <p class="classic-text">Il va de soi que vos idées vous appartiennent: je m'engage à ne pas les
                copier ni les utiliser pour mon bénéfice personnel. Je ne les publierai ni ne les partagerai avec personne
                sans votre autorisation écrite préalable.</p>
        </div>
        <!-- Form navigation -->
        <div class="get-ready-form-nav-buttons">
            <!-- previous button -->
            <ButtonParticle animation='' @click="selectPreviousSection"
                :disabled="useGetReadyStore().selectedFormSection === GetReadyFormSections.GENERAL">
                <ArrowLeftIcon />
            </ButtonParticle>
            <!-- follow steps bar -->
            <div class="follow-steps-bar">
                <div class="fsb-item"
                    :style="useGetReadyStore().selectedFormSection === GetReadyFormSections.GENERAL ? { backgroundColor: '#E25E3E' } : { backgroundColor: 'transparent' }">
                </div>
                <div class="fsb-item"
                    :style="useGetReadyStore().selectedFormSection === GetReadyFormSections.STRUCTURE ? { backgroundColor: '#E25E3E' } : { backgroundColor: 'transparent' }">
                </div>
                <div class="fsb-item"
                    :style="useGetReadyStore().selectedFormSection === GetReadyFormSections.DETAILS ? { backgroundColor: '#E25E3E' } : { backgroundColor: 'transparent' }">
                </div>
                <div class="fsb-item"
                    :style="useGetReadyStore().selectedFormSection === GetReadyFormSections.SUMMARY ? { backgroundColor: '#E25E3E' } : { backgroundColor: 'transparent' }">
                </div>
            </div>
            <!-- next button -->
            <ButtonParticle @click="selectNextSection" animation=''
                :disabled="useGetReadyStore().selectedFormSection === GetReadyFormSections.SUMMARY">
                <ArrowRightIcon />
            </ButtonParticle>
        </div>
        <!-- Form contents -->
        <GetReadyGeneralComponent v-if="useGetReadyStore().selectedFormSection === GetReadyFormSections.GENERAL" />
        <GetReadyStructureComponent v-if="useGetReadyStore().selectedFormSection === GetReadyFormSections.STRUCTURE" />
        <GetReadyDetailsComponent v-if="useGetReadyStore().selectedFormSection === GetReadyFormSections.DETAILS" />
        <GetReadySummaryComponent v-if="useGetReadyStore().selectedFormSection === GetReadyFormSections.SUMMARY" />
        <p>Le contenu de ce formulaire est encore en construction. Il sera utilisable dans quelques jours !</p>
    </section>
</template>

<style lang="scss">
@use '@/styles/theme.scss' as *;

/* introduction */
.get-ready-intro {
    text-align: justify;
    padding-bottom: $space-xxl;

    >strong {
        font-weight: 500;
        text-decoration: underline;
        line-height: 2;
    }
}

/* form navigation */
.get-ready-form-nav-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .button-particle {
        border-radius: $radius-circle;

        >svg {
            margin: 0;
        }

        &:disabled {
            cursor: auto;
            background-color: color($danger, 82);
            color: color($danger, 70);
            border-color: color($danger, 70);
            box-shadow: 2px 2px 3px color($primary, 55);

            &:hover {
                box-shadow: 2px 2px 3px color($primary, 55);
            }
        }
    }

    .follow-steps-bar {
        width: 60%;
        display: flex;

        .fsb-item {
            display: flex;
            flex: 1;
            height: $space-s;
            margin: 0 $space-xxs;
            border: 2px solid color($danger, 50);
            border-radius: $radius-m;
            transition: all 300ms ease-in;
        }
    }
}
</style>