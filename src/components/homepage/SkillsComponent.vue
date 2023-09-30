<script lang="ts" setup>
import { ref } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import { ComputerDesktopIcon, Cog8ToothIcon, BeakerIcon } from '@heroicons/vue/24/outline';
import type { CardContent } from '@/interfaces/CardContent.interface';
import CardParticle from '@/particles/CardParticle.vue';

const servicesFr = ref<CardContent[]>([
    {
        illustrationPath: '',
        title: 'Intégration de pages web'
    },
    {
        illustrationPath: '',
        title: 'Sites vitrine ou e-commerce'
    },
    {
        illustrationPath: '',
        title: 'Responsive',
        color: 'danger'
    },
    {
        illustrationPath: '',
        title: 'Traductions (anglais) et rédaction'
    },
    {
        illustrationPath: '',
        title: 'Référencement, Performances, Éco-conception'
    },
    {
        illustrationPath: '',
        title: 'Accessibilité',
        color: 'danger'
    },
]);

const technologiesFr = ref<CardContent[]>([
    {
        title: 'Vue 3 + Vite + Pinia',
        color: 'danger'
    },
    {
        title: 'HTML sémantique'
    },
    {
        title: 'CSS & Sass'
    },
    {
        title: 'Nest.js',
        color: 'danger'
    },
    {
        title: 'WordPress'
    },
    {
        title: 'Shopify'
    },
]);

const softskillsFr = ref<CardContent[]>([
    {
        title: 'Compréhension et cadrage de vos besoins',
        color: 'primary'
    },
    {
        title: 'Conseils sur vos projets'
    },
    {
        title: 'Flexibilité'
    },
    {
        title: 'Résolution de problèmes',
        color: 'primary'
    },
    {
        title: 'Rédaction de documentation'
    },
    {
        title: 'Écoute & Ouverture d\'esprit'
    }
]);

const servicesEn = ref<CardContent[]>([
    {
        illustrationPath: '',
        title: 'Web Integration'
    },
    {
        illustrationPath: '',
        title: 'Showcase and E-commerce Websites'
    },
    {
        illustrationPath: '',
        title: 'Responsive',
        color: 'danger'
    },
    {
        illustrationPath: '',
        title: 'Writing & Translations (French, English)'
    },
    {
        illustrationPath: '',
        title: 'SEO, Performances, Green Conception'
    },
    {
        illustrationPath: '',
        title: 'Accessibility',
        color: 'danger'
    },
]);

const technologiesEn = ref<CardContent[]>([
    {
        title: 'Vue 3 + Vite + Pinia',
        color: 'danger'
    },
    {
        title: 'Semantic HTML'
    },
    {
        title: 'CSS & Sass'
    },
    {
        title: 'Nest.js',
        color: 'danger'
    },
    {
        title: 'WordPress'
    },
    {
        title: 'Shopify'
    },
]);

const softskillsEn = ref<CardContent[]>([
    {
        title: 'Evaluate and tally with your needs',
        color: 'primary'
    },
    {
        title: 'Advice on your projects'
    },
    {
        title: 'Flexibility'
    },
    {
        title: 'Problems Solver',
        color: 'primary'
    },
    {
        title: 'Write resources for you'
    },
    {
        title: 'Attentive and Open-minded'
    }
]);
</script>

<template>
    <section class="classic-section skills-section">
        <!-- French version -->
        <div v-if="useLanguageStore().language === Language.FR" class="classic-container">
            <!-- Services -->
            <div class="class-container skills-container">
                <div class="skills-title-container">
                    <ComputerDesktopIcon class="hero-title-icon" />
                    <SectionTitleParticle title="Mes services" />
                </div>
                <div class="horizontal-container">
                    <CardParticle v-for="(service, index) of servicesFr" :key="index" :content="service" />
                </div>
            </div>
            <!-- Tech -->
            <div class="class-container skills-container">
                <div class="skills-title-container">
                    <Cog8ToothIcon class="hero-title-icon" />
                    <SectionTitleParticle title="Mes technos" />
                </div>
                <div class="horizontal-container">
                    <CardParticle v-for="(tech, index) of technologiesFr" :key="index" :content="tech" />
                </div>
            </div>
            <!-- Soft Skills -->
            <div class="class-container skills-container">
                <div class="skills-title-container">
                    <BeakerIcon class="hero-title-icon" />
                    <SectionTitleParticle title="Mes Soft Skills" />
                </div>
                <div class="horizontal-container">
                    <CardParticle v-for="(softskill, index) of softskillsFr" :key="index" :content="softskill" />
                </div>
            </div>
        </div>
        <!-- English version -->
        <div v-else>
            <!-- Services -->
            <div class="class-container skills-container">
                <div class="skills-title-container">
                    <ComputerDesktopIcon class="hero-title-icon" />
                    <SectionTitleParticle title="Services" />
                </div>
                <div class="horizontal-container">
                    <CardParticle v-for="(service, index) of servicesEn" :key="index" :content="service" />
                </div>
            </div>
            <!-- Tech -->
            <div class="class-container skills-container">
                <div class="skills-title-container">
                    <Cog8ToothIcon class="hero-title-icon" />
                    <SectionTitleParticle title="Techs" />
                </div>
                <div class="horizontal-container">
                    <CardParticle v-for="(tech, index) of technologiesEn" :key="index" :content="tech" />
                </div>
            </div>
            <!-- Soft Skills -->
            <div class="class-container skills-container">
                <div class="skills-title-container">
                    <BeakerIcon class="hero-title-icon" />
                    <SectionTitleParticle title="Soft Skills" />
                </div>
                <div class="horizontal-container">
                    <CardParticle v-for="(softskill, index) of softskillsEn" :key="index" :content="softskill" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.skills-title-container {
    display: flex;
    align-items: center;
}

.skills-container {
    display: block;
    margin: $space-xxl 0;
}

.ability-box {
    box-sizing: border-box;
    width: 100%;
    min-width: 250px;
    max-width: 500px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.ability-title {
    box-sizing: border-box;
    color: $light;
    width: 160px;
    height: 160px;
    border-radius: $radius-circle;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: $txt-m;

    &.__dev {
        background-color: $primary;
    }

    &.__coworking {
        background-color: $secondary;
    }
}

.ability-item {
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: $radius-circle;
    color: lighten($light, 2%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    position: absolute;

    &.__dev {
        background-color: $primary;
    }

    &.__coworking {
        background-color: $secondary;
    }

    &.__main {
        width: 80px;
        height: 80px;
        font-size: $txt-s;
    }

    &.__smaller {
        width: 60px;
        height: 60px;
        font-size: $txt-xs;
    }

    &.__1 {
        top: 18%;
        right: 0;
    }

    &.__2 {
        font-size: 14px;
        top: 4%;
        right: 26%;
    }

    &.__3 {
        top: 8%;
        left: 20%;
    }

    &.__4 {
        top: 20%;
        left: -2%;
    }

    &.__5 {
        bottom: 24%;
        left: 0;
    }

    &.__6 {
        bottom: 12%;
        left: 18%;
    }

    &.__7 {
        font-size: 14px;
        bottom: 8%;
        left: -2%;
    }

    &.__8 {
        bottom: 25%;
        right: 0;
    }

    &.__9 {
        bottom: 10%;
        right: 11%;
    }

    &.__10 {
        font-size: 14px;
        bottom: -6%;
        right: 23%;
    }

    &.__11 {
        bottom: 2%;
    }

    &.__12 {
        top: -2%;
        left: 34%;
    }

    &.__13 {
        top: 8%;
        left: 14%;
    }

    &.__14 {
        top: -6%;
        left: 8%;
    }

    &.__15 {
        top: 12%;
        right: 0;
    }

    &.__16 {
        right: -2%;
        bottom: 35%;
    }

    &.__17 {
        left: -3%;
        bottom: 30%;
    }

    &.__18 {
        left: 10%;
        bottom: 9%;
    }

    &.__19 {
        bottom: 0;
        right: 26%;
    }
}
</style>@/interfaces/CardContent.interface