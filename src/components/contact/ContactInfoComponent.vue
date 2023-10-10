<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
</script>

<template>
    <section class="classic-section contact-section">
        <!-- French Information -->
        <div class="classic-container contact-container" v-if="useLanguageStore().language === Language.FR">
            <div class="contact-text-box">
                <p class="text-classic">Bonjour ! Développeur web front-end localisé à Nantes, je réalise vos sites
                    sur-mesure
                    avec
                    <a href="" target="_blank" title="Cliquez pour découvir Vue 3" class="classic-link">Vue 3</a> et du
                    Scss
                    ou du CSS pour
                    l'interface graphique.
                    Ayant également un attrait pour le full-strack, je vous propose un tableau d'utilisation simple et
                    intuitif réalisé avec <a href="" target="_blank" title="Cliquez pour découvir Strapi"
                        class="classic-link">Strapi</a> ou un back-end sur-mesure avec
                    <a href="" target="_blank" title="Cliquez pour découvir Nest.js" class="classic-link">Nest.js</a>.
                </p>
            </div>
            <div class="contact-text-box">
                <p class="text-classic">Que vous soyez commerçant, artisan, artiste ou une personne ayant envie de partager
                    ses
                    contenus sur le web, avec ou sans ventes en ligne, mes offres peuvent vous convenir.</p>
            </div>
            <div class="contact-text-box">
                <p class="text-classic">Vous ne savez pas exactement ce que vous cherchez ? Prenez le temps de vous
                    documenter, comparez les offres,
                    <RouterLink to='/tests' class="classic-link" target="_blank">faites les tests</RouterLink> du site
                    (gratuit et sans demande de vos informations de contact) et/ou contactez-moi
                    directement :
                </p>
            </div>
        </div>
        <!-- English Information -->
        <div class="classic-container contact-container" v-else>
            <div class="contact-text-box">
                <p class="text-classic">Hi ! I am a front-end web developer located in Nantes. I develop customized websites
                    with
                    <a href="" target="_blank" title="Cliquez pour découvir Vue 3" class="classic-link">Vue 3</a> and
                    Scss
                    or CSS for the GUI.
                    I enjoy full-stack development too, so I may also offer you a simple and intuitive dashboard made with
                    <a href="" target="_blank" title="Cliquez pour découvir Strapi" class="classic-link">Strapi</a> or a
                    customized back-end coded with
                    <a href="" target="_blank" title="Cliquez pour découvir Nest.js" class="classic-link">Nest.js</a>.
                </p>
            </div>
            <div class="contact-text-box">
                <p class="text-classic">Whether you are a shopkeeper, creator, artist or an individual willing to share your
                    contents online, with or without online selling, my offers may suit you well !</p>
            </div>
            <div class="contact-text-box">
                <p class="text-classic">You don't really know what you are looking for ? Take some time to make inquiries,
                    compare offers, and
                    <RouterLink to='/tests' class="classic-link" target="_blank">try the tests</RouterLink> of my website
                    (they're free and you don't need to give your personal information) and/or contact me directly :
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.contact-text-box {
    display: flex;
    flex-wrap: wrap;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    padding: $space-xs $space-s;
    max-height: 300px;

    @media (min-width: $bp-xl) {
        max-height: 180px;
    }
}
</style>