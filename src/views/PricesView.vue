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
        title: 'Conseil, cadrage de projet aide à la conception',
        subtitle: '50€ /1h30',
        subtext: 'On prend rendez-vous et on en parle ? Pour anticiper, consultez la page "Me préparer" ! Rendez-vous possibles en visio-conférence ou en physique.',
        color: 'secondary'
    },
    {
        title: 'Site Vitrine avec un CMS au choix',
        subtitle: 'à partir de 250€',
        subtext: 'Un site vitrine avec les pages de base, utilisant un CMS de votre choix parmi WordPress, Strapi et Webflow.',
    },
    {
        title: 'Refonte graphique, mise-à-jour, rédaction de contenu...',
        subtitle: 'à partir de 50€',
        subtext: 'Redonnez un coup de neuf visuel à votre site quand vous voulez ! Prix fixé en fonction de votre demande, fixé par contrat avec un forfait fixe.'
    },
    // custom
    {
        title: 'Site-vitrine 100% sur-mesure',
        subtitle: 'à partir de 350€',
        subtext: '4 pages de base: accueil, à propos, conditions légales, contact.',
        color: 'tertiary'
    },
    {
        title: 'Refonte graphique, mise-à-jour, rédaction de contenu...',
        subtitle: 'à partir de 50€',
        subtext: 'Redonnez un coup de neuf visuel à votre site quand vous voulez ! Prix fixé en fonction de votre demande, fixé par contrat avec un forfait fixe.',
    },
    {
        title: 'Site full-stack 100% sur-mesure',
        subtitle: 'à partir de 600€',
        subtext: '8 pages de base: accueil, connexion, inscription, identifiants oubliés, mon compte, à propos, conditions légales, contact'
    },
    // e-commerce
    {
        title: 'Site e-commerce clés-en-main',
        subtitle: 'à partir de 350€',
        subtext: 'Un site de vente en ligne sécurisé grâce à un CMS spécialisé (PrestaShop, Shopify) avec un thème graphique officiel de la plateforme.',
        color: 'alert'
    },
    {
        title: 'Site e-commece clés-en-main avec interface 100% sur-mesure',
        subtitle: 'à partir de 500€',
        subtext: 'Tous les avantages du site e-commence clés-en-main, avec une interface graphique codée sur-mesure !'
    },
    {
        title: 'Mise-à-jour des contenus du site',
        subtitle: 'à partir de 50€',
        subtext: 'Demandez une mise-à-jour de vos contenus quand vous voulez !',
    },
    // improvements
    {
        title: 'Maintenance sur un site existant',
        subtitle: 'à partir de 50€',
        subtext: 'Pensez à la sécurité et à la modernité de votre site: je réalise les opérations de maintenance courantes sur votre site (sauvegarde de données, mise-à-jour, revue du paramétrage...).',
        color: 'secondary'
    },
    {
        title: 'Réferencement & Accessibilité',
        subtitle: 'à partir de 100€',
        subtext: 'Améliorez le référencement et/ou l\'accessibilité de votre site web ! Je m\'assure de la qualité de vos contenus et du respect des bonnes pratiques du web.',
    },
    {
        title: 'Rédaction & Traduction',
        subtitle: 'à partir de 50€',
        subtext: 'Besoin d\'aide pour rédiger vos contenus ? D\'une traduction français/anglais ? Je suis aussi diplômé·e en langues et cultures étrangères !'
    }
]

const pricesEn: CardContent[] = [
    // one-page
    {
        title: 'Advice and guidance on your project',
        subtitle: '50€ / 1h30',
        subtext: 'Let\'s meet and talk ! You may visit the "Get Ready" section of this website to make ready. Available online or IRL.',
        color: 'secondary'
    },
    {
        title: 'Showcase website with a chosen CDN',
        subtitle: 'from 250€',
        subtext: 'Get showcase webseite with classic pages using a CDN like WordPress, Strapi or Webflow.',
    },
    {
        title: 'Redesign, update, contents writing...',
        subtitle: 'from 50€',
        subtext: 'Get a fresh look for your website whenever you need ! Prices evolve according to your needs and are set with a contract and fixed billing.',
    },
    // custom
    {
        title: '100% customized showcase website',
        subtitle: 'from 350€',
        subtext: '4 classic pages: landing page, about, legal notices, contact.',
        color: 'tertiary'
    },
    {
        title: 'Redesign, update, contents writing...',
        subtitle: 'from 50€',
        subtext: 'Get a fresh look for your website whenever you need ! Prices evolve according to your needs and are set with a contract and fixed billing.',
    },
    {
        title: '100% customized full-stack website',
        subtitle: 'from 600€',
        subtext: '8 classic pages: landing page, login, signup, forgotten credentials, my account, about, legal notices, contact.'
    },
    // e-commerce
    {
        title: 'Ready-to-use e-commerce',
        subtitle: 'from 350€',
        subtext: 'A secured online sales website relying on a specialized CDN like PrestaShop or Shopify. You\'ll get an official design from the platform !',
        color: 'alert'
    },
    {
        title: '100% customized ready-to-use e-commerce',
        subtitle: 'from 500€',
        subtext: 'All the pros of a ready-to-use e-commerce website, adding a 100% custom-made design.'
    },
    {
        title: 'Contents update',
        subtitle: 'from 50€',
        subtext: 'Get a contents update whenever you want !',
    },
    // improvements
    {
        title: 'Maintainance on an existing website',
        subtitle: 'from 50€',
        subtext: 'Increase your site\'s security and modernity with current maintenance actions: data saves, updates, parameters review...',
        color: 'secondary'
    },
    {
        title: 'SEO & Accessibility',
        subtitle: 'from 100€',
        subtext: 'Improve your website\'s SEO and/or accessibility ! I take care of your contents\' quality and check the web good practices.',
    },
    {
        title: 'Writing & Translations',
        subtitle: 'from 50€',
        subtext: 'Do you need help to write your online contents ? A French / English translation ? I also have an academic master degree in English history, culture and literature !'
    }
]

// Conditions
const conditionsFr: string[] = [
    'Vous pouvez ajouter des pages aux forfaits de base: le prix varie selon la complexité de votre demande (nombre de pages, fonctionnalités...).',
    'Un rendez-vous de conseil et cadrage préalable à l\'établissement de votre contrat est offert avec chaque forfait. Si votre projet est peu défini, vous aurez peut-être besoin de plusieurs de ces rendez-vous: ils seront dans ce cas ajoutés à votre facture. Vous en serez toujours informé·e·s préalablement.',
    'L\'achat d\'un nom de domaine, d\'un hébergement et de fonctionnalités supplémentaires chez votre hébergeur, etc restent à votre charge.',
    'Le démarrage d\'un projet (design, code) est conditionné au versement d\'un acompte de 35% de la facture établie le jour de la signature du contrat.',
    'En cas de problème dont je serais responsable sur votre site, les rectifications sont évidemment gratuites.'
]

const conditionsEn: string[] = [
    'You can get additional pages with your package. Prices evolve according to you project\'s technical details.',
    'A free guidance-and-advice meeting is included in every package. If your project is a bit blurry, you may need more than one of those meetings. Those will be billed additionally. I will inform you previously.',
    'You are financially and legally responsible for the domain name, hosting and additional functionalities with your hosting service.',
    'Coding starts when you pay a deposit of 35% of the bill edited with your contract.',
    'If there is any issue I am accountable for on your website, fixes are obviously free.'
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