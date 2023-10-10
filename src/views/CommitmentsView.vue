<script lang="ts" setup>
import {
    AdjustmentsHorizontalIcon,
    BarsArrowUpIcon,
    DocumentMagnifyingGlassIcon,
    EyeIcon,
    InboxStackIcon,
    LinkIcon,
    MagnifyingGlassIcon,
    PencilSquareIcon,
    ScaleIcon,
    ServerStackIcon,
    SpeakerWaveIcon
} from '@heroicons/vue/24/outline';
import CommitmentCategoryComponent from '@/components/commitments/CommitmentCategoryComponent.vue';
import CommitmentCardComponent from '@/components/commitments/CommitmentCardComponent.vue';
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';

const anchorsEn = [
    {
        path: '#quality',
        title: 'Quality'
    },
    {
        path: '#accessibility',
        title: 'Accessibility'
    },
    {
        path: '#sustainability',
        title: 'Sustainability'
    }
]

const anchorsFr = [
    {
        path: '#quality',
        title: 'Qualité'
    },
    {
        path: '#accessibility',
        title: 'Accessibilité'
    },
    {
        path: '#sustainability',
        title: 'Environnement & Écoconception'
    }
]
</script>

<template>
    <div class="contents-container" v-if="useLanguageStore().language === Language.FR">
        <HeroParticle title="Mes engagements" id="commitments-title" />
        <IndexParticle :anchors="anchorsFr" />

        <section class="classic-section">
            <div class="classic-container">
                <!-- Quality -->
                <CommitmentCategoryComponent title="Qualité" color="secondary" id="quality">

                    <CommitmentCardComponent title="Normes & Bonnes pratiques"
                        description="Prendre en compte le W3C, le WCAG et le RGPD." color="secondary">
                        <InboxStackIcon class="ccc-icon" title="Icône pour les normes et bonnes pratiques" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Le code court c'est mieux"
                        description="Les fichiers de code de petite taille sont plus faciles à maintenir et plus optimaux pour le travail d'équipe."
                        color="secondary">
                        <BarsArrowUpIcon class="ccc-icon" title="Icône pour du code court" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Relire et réorganiser"
                        description="Réorganiser son code une fois qu'il est fonctionnel est toujours une bonne idée pour améliorer sa lisibilité et sa maintenance. Revoir le code à plusieurs permet de s'assurer de sa bonne qualité."
                        color="secondary">
                        <MagnifyingGlassIcon class="ccc-icon" title="Icon for reviewing and refactoring" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Vérifications & Tests"
                        description="J'ai pour habitude de tester mon code avec Lighthouse (de Google). J'ai également été formé·e à écrire des tests unitaires et à effectuer à la main des tests end-to-end avant la livraison des produits."
                        color="secondary">
                        <AdjustmentsHorizontalIcon class="ccc-icon" title="Icon for checks and tests" />
                    </CommitmentCardComponent>

                    <BacklinkParticle anchor="#commitments-title" text="Revenir au début" color="secondary" />

                </CommitmentCategoryComponent>

                <!-- Accessibility -->
                <CommitmentCategoryComponent title="Accessibilité" color="tertiary" id="accessibility">

                    <CommitmentCardComponent title="... pour les malvoyantEs"
                        description="Je suis les normes d'accessibilité: contrastes, taille des éléments... Et je m'intéresse à l'utilisation des balises Aria pour améliorer encore la lisibilité pour les lecteurs audio."
                        color="tertiary">
                        <EyeIcon class="ccc-icon" title="Icône pour l'accessibilité pour les malvoyantEs" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="... pour les dys*"
                        description="J'utilise de préférence des polices de caractères les plus simples et lisibles (souvent les sans-serif)."
                        color="tertiary">
                        <PencilSquareIcon class="ccc-icon" title="Icône pour l'accessibilité pour les dys*" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="... pour les handicaps physiques"
                        description="Je m'assure que le site est lisible et utilisable avec un clavier et un lecteur audio."
                        color="tertiary">
                        <SpeakerWaveIcon class="ccc-icon"
                            title="Icône pour l'accessibilité pour les handicapé·e·s physiques" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="... et de façon générale"
                        description="Je me documente régulièrement sur l'accessibilité (étant moi-même handicapé·e) et utilise la checklist du WCAG. Vérifications supplémentaires au besoin (Wave, etc)."
                        color="tertiary">
                        <DocumentMagnifyingGlassIcon class="ccc-icon" title="Icône pour l'accessibilité en général" />
                    </CommitmentCardComponent>

                    <BacklinkParticle anchor="#commitments-title" text="Revenir au début" color="tertiary" />

                </CommitmentCategoryComponent>


                <!-- Eco-conception -->
                <CommitmentCategoryComponent title="Environnement & Éco-conception" color="neutral" id="sustainability">

                    <CommitmentCardComponent title="Un code léger"
                        description="Cela nécessite moins d'énergie pour charger une page. Il est plus soutenable et améliore l'expérieuce des utilisateur·ice·s qui ont une connexion internet limitée (mobile, campagne, réseau saturé...)."
                        color="neutral">
                        <ScaleIcon class="ccc-icon" title="Icône pour l'éco-conception avec du code léger" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Moins de dépendances"
                        description="Réduire le nombre de dépendances rend le projet plus léger. De plus, ce choix améliore les performances lors du chargement des pages et la maintenabilité."
                        color="neutral">
                        <LinkIcon class="ccc-icon" title="IIcône pour l'éco-conception avec moins de dépendances" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="L'hébergement 'vert'"
                        description="L'hébergement a un impact important sur les émissions carbones d'un projet web. Je propose toujours la recherche de solutions locales et qui utilisent au moins en partie des énergies renouvelables."
                        color="neutral">
                        <ServerStackIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Les 100 règles"
                        description="Lorsque j'ai un doute ou sur mon temps libre, j'aime m'appuyer sur ce livre de référence: Ecoconception Web, les 115 bonnes pratiques (de Frederic Bordage)."
                        color="neutral">
                        <img class="ccc-icon __vertical" src="@images/commitments_sustainability.webp"
                            alt="Book cover of Ecoconception Web, les 115 bonnes pratiques" />
                    </CommitmentCardComponent>

                    <BacklinkParticle anchor="#commitments-title" text="Revenir au début" color="neutral" />

                </CommitmentCategoryComponent>
            </div>
        </section>
    </div>

    <div class="contents-container" v-else>
        <HeroParticle title="My Commitments" id="commitments-title" />
        <IndexParticle :anchors="anchorsEn" />

        <section class="classic-section">
            <div class="classic-container">
                <!-- Quality -->
                <CommitmentCategoryComponent title="Quality" color="secondary" id="quality">

                    <CommitmentCardComponent title="Norms & Good Practices"
                        description="Including W3C, WCAG and the French RGPD." color="secondary">
                        <InboxStackIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Shorter is better"
                        description="Shorter code files are easier to maintain and more efficient for team work."
                        color="secondary">
                        <BarsArrowUpIcon class="ccc-icon" title="Icon for shorter code" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Reviewing & Refactoring"
                        description="Refactoring code once it is functional is always a good idea to improve its readablity and maintainability. Reviewing code as a team enables to make sure of code's quality."
                        color="secondary">
                        <MagnifyingGlassIcon class="ccc-icon" title="Icon for reviewing and refactoring" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Checks & Tests"
                        description="I usually test my work with Google's Lighthouse. I am also trained to write unit tests with Chai and run end-to-end tests."
                        color="secondary">
                        <AdjustmentsHorizontalIcon class="ccc-icon" title="Icon for checks and tests" />
                    </CommitmentCardComponent>

                    <BacklinkParticle anchor="#commitments-title" text="Back to top" color="secondary" />

                </CommitmentCategoryComponent>

                <!-- Accessibility -->
                <CommitmentCategoryComponent title="Accessibility" color="tertiary" id="accessibility">

                    <CommitmentCardComponent title="... for sight difficulties"
                        description="I follow accessibility norms in terms of contrasts and elements sizes and am curious about learning Aria to improve my HTML."
                        color="tertiary">
                        <EyeIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="... for dys* disabilities"
                        description="I use simpler and more readable fonts (sans-serif fonts)." color="tertiary">
                        <PencilSquareIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="... for motor difficulties"
                        description="I take care that the website is readable with a keyboard and audio reader."
                        color="tertiary">
                        <SpeakerWaveIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="... and more generally"
                        description="Being disabled myself, I document myself on accessibility regularly and use official WCAG checklists. When necessary I do additional checks (with Wave for example)."
                        color="tertiary">
                        <DocumentMagnifyingGlassIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <BacklinkParticle anchor="#commitments-title" text="Back to top" color="tertiary" />

                </CommitmentCategoryComponent>


                <!-- Eco-conception -->
                <CommitmentCategoryComponent title="Sustainability" color="neutral" id="sustainability">

                    <CommitmentCardComponent title="Lighter code is better"
                        description="Lighter code costs less energy to load pages. It is more sustainable and improves user experience for those who have a bad internet connexion (mobile, countryside...)."
                        color="neutral">
                        <ScaleIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Less dependencies is lighter"
                        description="Less dependencies make the code lighter. In addition this choice improves loading performances and maintanability for simple projects."
                        color="neutral">
                        <LinkIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="Green hosting matters"
                        description="Hosting has a huge impact on a website's carbon emissions. Hence when I have a choice I prefer local hosts that use at least partly renewable energies."
                        color="neutral">
                        <ServerStackIcon class="ccc-icon" title="Icon for norms and good practices" />
                    </CommitmentCardComponent>

                    <CommitmentCardComponent title="The 100 rules"
                        description="When I have a doubt or some free time, I like to check this reference book: Ecoconception Web, les 115 bonnes pratiques (by Frederic Bordage)."
                        color="neutral">
                        <img class="ccc-icon __vertical" src="@images/commitments_sustainability.webp"
                            alt="Book cover of Ecoconception Web, les 115 bonnes pratiques" />
                    </CommitmentCardComponent>

                    <BacklinkParticle anchor="#commitments-title" text="Back to top" color="neutral" />

                </CommitmentCategoryComponent>

            </div>
        </section>
    </div>
</template>