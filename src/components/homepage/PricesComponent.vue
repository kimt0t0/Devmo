<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import { CurrencyEuroIcon } from '@heroicons/vue/24/outline';
import type { CardContent } from '@/interfaces/CardContent.interface';
import { CardTypes } from '@/enums/CardTypes';

const pricesFr: CardContent[] = [
    // full custom
    {
        title: 'Site-vitrine 100% sur-mesure',
        subtext: 'Votre site vitrine réalisé 100% sur mesure.',
        color: 'secondary'
    },
    {
        title: 'Mise-à-jour des contenus du site',
        subtext: 'Selon les modifications demandées.',
    },
    {
        title: 'Refonte graphique',
        subtext: 'Selon les modifications demandées.'
    },
    // custom strapi
    {
        title: 'Site-vitrine avec un CMS headless',
        subtext: 'Votre interface graphique sur-mesure, clés-en-main pour administrer vous-même le contenu.',
        color: 'tertiary'
    },
    {
        title: 'Mise-à-jour des contenus du site',
        subtext: 'Selon les modifications demandées.',
    },
    {
        title: 'Refonte graphique',
        subtext: 'Selon les modifications demandées.'
    },
    // e-commerce
    {
        title: 'Site e-commerce clés-en-main',
        subtext: 'Un site de vente en ligne sécurisé grâce à un CMS spécialisé, une interface graphique personnlisée.',
        color: 'alert'
    },
    {
        title: 'Mise-à-jour des contenus du site',
        subtext: 'Selon les modifications demandées.',
    },
    {
        title: 'Refonte graphique',
        subtext: 'Selon les modifications demandées.'
    }
]
</script>

<template>
    <section class="classic-section aims-section">
        <div class="classic-container">
            <div class="prices-title-container">
                <CurrencyEuroIcon class="hero-title-icon __neutral" />
                <SectionTitleParticle :title="useLanguageStore().language === Language.FR ? 'Mes tarifs' : 'Pricing'" />
            </div>
            <ol class="prices-list horizontal-container">
                <li class="price-item" v-for="(price, index) of pricesFr" :key="index">
                    <CardParticle :content="price" :cardType="CardTypes.VERTICAL" />
                </li>
            </ol>
            <div class="horizontal-container">
                <p class="text-classic"><strong>Ces forfaits n'incluent pas l'achat du nom de domaine ni la mise en ligne de
                        votre
                        projet.
                    </strong></p>
                <p class="text-classic">Ces éléments sont à discuter entre nous pour faire le choix qui correspondra le
                    mieux à
                    vos besoins.
                    Si vous disposez déjà d'un nom de domaine et/ou d'un hébergement vous n'aurez donc pas besoin d'en
                    racheter
                    un.<br />Dans le cas contraire <strong>nous pourrons choisir la solution qui correspond le mieux à votre
                        budget
                        et à vos
                        engagements (environnement, performance...).
                    </strong></p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.prices-title-container {
    display: flex;
    align-items: center;
}
</style>