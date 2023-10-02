<script lang="ts" setup>
import { ref } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import { ComputerDesktopIcon, Cog8ToothIcon, BeakerIcon } from '@heroicons/vue/24/outline';
import type { CardContent } from '@/interfaces/CardContent.interface';

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
        title: 'Strapi'
    },
    {
        title: 'A venir: Angular, WordPress, Shopify',
        color: 'primary'
    },
]);

const softskillsFr = ref<CardContent[]>([
    {
        title: 'Compréhension et cadrage de vos besoins',
        color: 'danger'
    },
    {
        title: 'Conseils sur vos projets'
    },
    {
        title: 'Flexibilité'
    },
    {
        title: 'Résolution de problèmes',
        color: 'danger'
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
        title: 'Strapi'
    },
    {
        title: 'Coming soon: Angular, WordPress, Shopify',
        color: 'primary'
    },
]);

const softskillsEn = ref<CardContent[]>([
    {
        title: 'Evaluate and tally with your needs',
        color: 'danger'
    },
    {
        title: 'Advice on your projects'
    },
    {
        title: 'Flexibility'
    },
    {
        title: 'Problems Solver',
        color: 'danger'
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
        <div v-else class="classic-container">
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
</style>@/interfaces/CardContent.interface