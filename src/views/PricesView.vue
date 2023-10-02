<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import { CurrencyEuroIcon } from '@heroicons/vue/24/outline';
import type { CardContent } from '@/interfaces/CardContent.interface';
import { CardTypes } from '@/enums/CardTypes';


// Prices
const pricesFr: CardContent[] = [
    // one-page
    {
        title: 'Site One-Page',
        subtitle: '200€ à 300€',
        subtext: 'Une page unique réalisée sur mesure.',
        color: 'secondary'
    },
    {
        title: 'Mise-à-jour des contenus du site',
        subtitle: '50€ à 200€',
        subtext: 'Demandez une mise-à-jour de vos contenus quand vous voulez, sans devoir payer un forfait mensuel.',
    },
    {
        title: 'Refonte graphique',
        subtitle: '50€ à 200€',
        subtext: 'Redonnez un coup de neuf visuel à votre site quand vous voulez !'
    },
    // custom
    {
        title: 'Site-vitrine 100% sur-mesure',
        subtitle: '500€ à 1000€',
        subtext: '4 pages + contact, interface sur-mesure. Possibilité d\'ajouter des pages au forfait.',
        color: 'tertiary'
    },
    {
        title: 'Mise-à-jour des contenus du site',
        subtitle: '50€ à 500€',
        subtext: 'Demandez une mise-à-jour de vos contenus quand vous voulez, sans devoir payer un forfait mensuel.',
    },
    {
        title: 'Refonte graphique',
        subtitle: '50€ à 600€',
        subtext: 'Redonnez un coup de neuf visuel à votre site quand vous voulez !'
    },
    // e-commerce
    {
        title: 'Site e-commerce clés-en-main',
        subtitle: '800€ à 1 200€',
        subtext: 'Un site de vente en ligne sécurisé grâce à un CMS spécialisé avec son interface graphique réalisée sur-mesure.',
        color: 'alert'
    },
    {
        title: 'Mise-à-jour des contenus du site',
        subtitle: '50€ à 500€',
        subtext: 'Demandez une mise-à-jour de vos contenus quand vous voulez, sans devoir payer un forfait mensuel.',
    },
    {
        title: 'Refonte graphique',
        subtitle: '50€ à 600€',
        subtext: 'Redonnez un coup de neuf visuel à votre site quand vous voulez !'
    },
    // improvements
    {
        title: 'Réferencement & Accessibilité',
        subtitle: '50€ à 400€',
        subtext: 'Améliorez le référencement et/ou l\'accessibilité de votre site web par l\'utilisation du HTML sémantique, la qualité de vos contenus et le respect des bonnes pratiques web.',
        color: 'secondary'
    },
    {
        title: 'Rédaction de contenus & Traductions',
        subtitle: '50€ à 200€',
        subtext: 'Besoin d\'aide pour rédiger vos contenus ? D\'une traduction français/anglais ? Je suis aussi diplômé·e en langues et cultures étrangères !'
    }
]

const pricesEn: CardContent[] = [
    // one-page
    {
        title: 'One-Page Website',
        subtitle: '200€ à 300€',
        subtext: 'A unique and customized page.',
        color: 'secondary'
    },
    {
        title: 'Update Contents',
        subtitle: '50€ à 200€',
        subtext: 'Ask a contents update whenever you want. Pay-as-you-need, no monthly subscription !',
    },
    {
        title: 'Refresh Interface Design',
        subtitle: '50€ à 200€',
        subtext: 'Give a fresh look to your website whenever you feel like it !'
    },
    // custom
    {
        title: '100% Custom Showcase Website',
        subtitle: '500€ à 1000€',
        subtext: '4 pages + contact,  customized web interface. And you can add optional pages to this package !',
        color: 'tertiary'
    },
    {
        title: 'Update Contents',
        subtitle: '50€ à 500€',
        subtext: 'Ask for a contents update whenever you want. Pay-as-you-need, no monthly subscription !',
    },
    {
        title: 'Refresh Interface Design',
        subtitle: '50€ à 600€',
        subtext: 'Give a fresh look to your website whenever you feel like it !'
    },
    // e-commerce
    {
        title: 'Ready-to-use E-shop',
        subtitle: '800€ à 1 200€',
        subtext: 'Un site de vente en ligne sécurisé grâce à un CMS spécialisé avec son interface graphique réalisée sur-mesure.',
        color: 'alert'
    },
    {
        title: 'Update Contents',
        subtitle: '50€ à 500€',
        subtext: 'Ask for a contents update whenever you want. Pay-as-you-need, no monthly subscription !',
    },
    {
        title: 'Refresh Interface Design',
        subtitle: '50€ à 600€',
        subtext: 'Give a fresh look to your website whenever you feel like it !'
    },
    // improvements
    {
        title: 'Accessibility and SEO',
        subtitle: '50€ à 400€',
        subtext: 'Improve your SEO and/or accessibility with semantic HTML, contents quality and good practices.',
        color: 'secondary'
    },
    {
        title: 'Contents Writing & Translations',
        subtitle: '50€ à 200€',
        subtext: 'Need help to write your contents or a French/English translation ? I also graduated in an English literature and history curriculum at University !'
    }
]

// Conditions
const conditionsFr: string[] = [
    'Ces tarifs sont susceptibles d\'être augmentés par l\'achat d\'un nom de domaine, de plugins ou de fonctionnalités selon vos demandes.',
    'Chaque page ajoutée en plus des pages prévues dans le forfait ajoute un coût à ce forfait.',
    'Je prends le temps d\'échanger et identifier vos besoins avant le démarrage de chaque pour anticiper ces coûts et éviter les mauvaises surprises.',
    'Le démarrage d\'un projet (design, code) est conditionné au versement d\'un acompte de 30% de votre forfait.',
    'En cas de problème dont je serais responsable sur votre site, les rectifications sont évidemment gratuites.'
]

const conditionsEn: string[] = [
    'Pricing might be increased if you need to buy a domain name, plugins or features, depending on your project\'s needs.',
    'Any additional page that is not included in the initial package may result in a price raise.',
    'Je prends le temps d\'échanger et identifier vos besoins avant le démarrage de chaque pour anticiper ces coûts et éviter les mauvaises surprises.',
    'Le démarrage d\'un projet (design, code) est conditionné au versement d\'un acompte de 30% de votre forfait.',
    'En cas de problème dont je serais responsable sur votre site, les rectifications sont évidemment gratuites.'
]

</script>

<template>
    <section class="classic-container">
        <!-- Title -->
        <div class="prices-title-container">
            <CurrencyEuroIcon class="hero-title-icon __neutral" />
            <SectionTitleParticle :title="useLanguageStore().language === Language.FR ? 'Mes tarifs' : 'Pricing'" />
        </div>
        <!-- Cards lists -->
        <ol class="prices-list horizontal-container" v-if="useLanguageStore().language === Language.FR">
            <li class="price-item" v-for="(price, index) of pricesFr" :key="index">
                <CardParticle :content="price" :cardType="CardTypes.VERTICAL" />
            </li>
        </ol>
        <ol class="prices-list horizontal-container" v-else>
            <li class="price-item" v-for="(price, index) of pricesEn" :key="index">
                <CardParticle :content="price" :cardType="CardTypes.VERTICAL" />
            </li>
        </ol>
        <div class="conditions-container" v-if="useLanguageStore().language === Language.FR">
            <h3 class="conditions-title">Conditions:</h3>
            <div class="conditions-contents">
                <ol class="conditions-list">
                    <li class="cl-item" v-for="(condition, index) of conditionsFr" :key="index">{{ condition }}</li>
                </ol>
                <img class="conditions-illustration" src="@images/contract.webp" alt="Contract illustration" />
            </div>
        </div>
        <div class="conditions-container" v-else>
            <h3 class="conditions-title">Conditions:</h3>
            <div class="conditions-contents">
                <ol class="conditions-list">
                    <li class="cl-item" v-for="(condition, index) of conditionsEn" :key="index">{{ condition }}</li>
                </ol>
                <img class="conditions-illustration" src="@images/contract.webp" alt="Contract illustration" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.prices-title-container {
    display: flex;
    align-items: center;
}

.price-item {
    width: fit-content;

    @media (max-width: $bp-s) {
        width: 100%;
    }
}

.conditions-container {
    margin: $space-xxl auto;
}

.conditions-contents {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: $bp-m) {
        flex-direction: column-reverse;
    }
}

.conditions-title {
    margin: $space-l 0;
    border-bottom: 1px solid color($dark, 50);
}

.conditions-illustration {
    width: 45%;
    max-width: 440px;
    max-height: 520px;
    image-rendering: optimizeSpeed;
    border-radius: $radius-xs;
    border: 1px solid color($neutral, 45);
    box-shadow: 2px 2px 3px color($primary, 40);

    @media (max-width: $bp-m) {
        max-width: initial;
        max-height: 250px;
        width: auto;
        margin: 0 auto;
    }
}

.conditions-list {
    margin: $space-xl 0;
    font-size: $txt-xs;
    font-weight: 500;

    .cl-item {
        max-width: 640px;
        margin: $space-s 0;

        &::before {
            content: 'o';
            font-size: $txt-s;
            margin-right: $space-xs;
            color: color($secondary, 30);
            cursor: pointer;

            &:hover {
                animation: jumpDot 1500ms linear forwards;
            }

        }
    }
}

@keyframes jumpDot {
    30% {
        transform: translateY($space-l);
    }

    40% {
        transform: translateY(0px);
    }

    60% {
        transform: translateY($space-m);
    }

    70% {
        transform: translateY(0);
    }

    80% {
        transform: translateY($space-xs);
    }

    85% {
        transform: translateY(0);
    }

    90% {
        transform: translateY($space-xs);
    }

    100% {
        transform: translateY(0);
    }
}
</style>