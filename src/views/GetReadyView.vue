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

</script>

<template>
    <section class="get-ready-section">
        <div class="classic-section classic-container">
            <!-- Title -->
            <HeroParticle
                :title="useLanguageStore().language === Language.EN ? 'Get ready for your project' : 'Préparez votre projet'" />
            <!-- English introduction -->
            <div v-if="useLanguageStore().language === Language.EN" class="get-ready-intro">
                <p class="classic-text __subtitle">
                    Preliminary suggestion:
                </p>
                <p class="classic-text">Please be aware that if
                    you are willing to do this professionally you will need <strong>two or three hours</strong> to complete
                    the
                    full process.
                </p>
                <p class="classic-text">Unfortunately, for financial reasons <strong>this website doesn't allow you to
                        save your progress (yet).</strong> If you need to split this task in multiple sessions, <strong>you
                        may
                        simply take notes</strong> on
                    your
                    own. Then if you are willing to work with me <RouterLink to="/contact" class="classic-link">you can
                        email it
                        to me</RouterLink> in the format that best suits you.
                    <strong>Otherwise, no need to take notes:</strong> you will be able to send me a complete document at
                    the
                    end of this form.
                </p>
                <p class="classic-text"><strong>If this task is difficult for you, just do what you can and I will help
                        you with the remainder !</strong> It's perfectly normal if you don't have all the answers yet.</p>
                <p class="classic-text">Of course, your ideas are yours. I will not copy them or use them for my
                    own purposes. I will not either publish or share them with anyone without your written permission.</p>
            </div>
            <!-- French introduction -->
            <div v-else class="get-ready-intro">
                <p class="classic-text __subtitle">Conseils préalables:</p>
                <p class="classic-text">Si vous souhaitez réaliser cette tâche de façon professionnelle, vous
                    aurez probablement besoin de <strong>deux ou trois heures</strong> pour compléter l'ensemble.
                </p>
                <p class="classic-text">Pour le moment, pour des raisons financières, <strong>ce site ne permet pas
                        (encore) de sauvegarder votre avancement.</strong> Si vous avez besoin de découper ce travail en
                    plusieurs sessions,
                    vous pouvez simplement <strong>prendre des notes de votre côté.</strong> Ainsi si vous souhaitez
                    travailler
                    avec moi vous
                    pourrez simplement <RouterLink to="/contact" class="classic-link">me les envoyer par e-mail</RouterLink>
                    dans le format qui vous convient. <strong>Si vous faites tout en une
                        session, pas la peine:</strong> vous pourrez m'envoyer votre document complété directement à la fin
                    du
                    formulaire.</p>
                <p class="classic-text"><strong>Si vous rencontrez des difficultés, faites ce que vous pouvez et je vous
                        aiderai pour le reste !</strong> Rassurez-vous: c'est tout à fait normal si vous n'avez pas encore
                    toutes les
                    réponses.</p>
                <p class="classic-text">Il va de soi que vos idées vous appartiennent: je m'engage à ne pas les
                    copier ni les utiliser pour mon bénéfice personnel. Je ne les publierai ni ne les partagerai avec
                    personne
                    sans votre autorisation écrite préalable.</p>
            </div>
        </div>
        <div class="get-ready-form-container">
            <div class="grfc-decorator __left"></div>
            <div class="grfc-decorator __right"></div>
            <div class="classic-section classic-container">
                <!-- Form navigation -->
                <div class="get-ready-form-nav">
                    <!-- previous button -->
                    <ButtonParticle animation='' @click="useGetReadyStore().selectPreviousSection()"
                        :disabled="useGetReadyStore().selectedFormSection === GetReadyFormSections.GENERAL">
                        <ArrowLeftIcon />
                    </ButtonParticle>
                    <!-- follow steps bar -->
                    <div class="follow-steps-bar">
                        <div class="fsb-item"
                            :style="useGetReadyStore().formProgress >= 0 ? { backgroundColor: '#E25E3E' } : { backgroundColor: 'transparent' }">
                        </div>
                        <div class="fsb-item"
                            :style="useGetReadyStore().formProgress > 0 ? { backgroundColor: '#E25E3E' } : { backgroundColor: 'transparent' }">
                        </div>
                        <div class="fsb-item"
                            :style="useGetReadyStore().formProgress > 1 ? { backgroundColor: '#E25E3E' } : { backgroundColor: 'transparent' }">
                        </div>
                        <div class="fsb-item"
                            :style="useGetReadyStore().formProgress > 2 ? { backgroundColor: '#E25E3E' } : { backgroundColor: 'transparent' }">
                        </div>
                    </div>
                    <!-- next button -->
                    <ButtonParticle @click="useGetReadyStore().selectNextSection()" animation=''
                        :disabled="useGetReadyStore().selectedFormSection === GetReadyFormSections.SUMMARY">
                        <ArrowRightIcon />
                    </ButtonParticle>
                </div>
                <!-- Form contents -->
                <p :style="{ textAlign: 'center' }"><strong>Attention: Le contenu de ce formulaire est encore en construction.
                        Il sera utilisable dans
                        quelques jours !</strong></p>
                <GetReadyGeneralComponent
                    v-if="useGetReadyStore().selectedFormSection === GetReadyFormSections.GENERAL" />
                <GetReadyStructureComponent
                    v-if="useGetReadyStore().selectedFormSection === GetReadyFormSections.STRUCTURE" />
                <GetReadyDetailsComponent
                    v-if="useGetReadyStore().selectedFormSection === GetReadyFormSections.DETAILS" />
                <GetReadySummaryComponent
                    v-if="useGetReadyStore().selectedFormSection === GetReadyFormSections.SUMMARY" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/styles/theme.scss' as *;

.get-ready-section {
    margin-bottom: -80px;

    >.classic-container {
        padding-bottom: $space-xl;
    }
}

.get-ready-form-container {
    background-color: color($alert, 70);
    padding: 80px 0;
    margin-top: $space-xl;
    position: relative;

    .grfc-decorator {
        width: 40%;
        height: 200px;
        border-radius: $radius-circle;
        position: absolute;
        z-index: 0;

        &.__left {
            background-color: color($neutral, 60);
            top: -140px;
            left: 10.5%;
            transform: rotate(3deg);
        }

        &.__right {
            background-color: color($alert, 70);
            top: -100px;
            right: 10.5%;
            transform: rotate(-4deg);
        }

        @media (max-width: 1100px) {
            height: 160px;

            &.__left {
                top: -111px;
            }

            &.__right {
                top: -79px;
            }
        }

        @media (max-width: 900px) {
            height: 120px;

            &.__left {
                top: -83.5px;
            }

            &.__right {
                top: -59px;
            }
        }

        @media (max-width: 620px) {
            height: 90px;

            &.__left {
                top: -63px;
            }

            &.__right {
                top: -44px;
            }
        }

        @media (max-width: 400px) {
            height: 60px;

            &.__left {
                top: -34px;
            }

            &.__right {
                top: -23.5px;
            }
        }

        @media (max-width: 280px) {
            height: 40px;

            &.__left {
                top: -22px;
            }

            &.__right {
                top: -16px;
            }
        }
    }
}

/* introduction */
.get-ready-intro {
    text-align: justify;
    padding-bottom: $space-xxl;


    .classic-text {
        font-size: $txt-xs;

        &.__subtitle {
            font-weight: 500;
            text-decoration: underline;
            line-height: 2;
        }

        >strong {
            font-weight: 500;
        }
    }
}

/* form navigation */
.get-ready-form-nav {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $space-m;

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
}</style>