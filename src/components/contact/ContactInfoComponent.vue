<script lang="ts" setup></script>

<template>
    <section class="classic-section contact-section">
        <div class="classic-container contact-container">
            <div class="contact-text-box">
                <p class="text-classic">Développeur web front-end à tendance full-stack, je réalise vos sites sur-mesure
                    avec
                    <a href="" target="_blank" title="Cliquez pour découvir Vue 3" class="classic-link">Vue 3</a> et du
                    Scss
                    ou du CSS pour
                    l'interface graphique et <a href="" target="_blank" title="Cliquez pour découvir Strapi"
                        class="classic-link">Strapi</a> ou
                    <a href="" target="_blank" title="Cliquez pour découvir Nest.js" class="classic-link">Nest.js</a> pour
                    la partie back-end,
                    selon
                    vos
                    préférences.
                </p>
            </div>
            <div class="contact-text-box">
                <p class="text-classic">Que vous soyez commerçant, artisan, artiste ou une personne ayant envie de partager
                    ses
                    contenus sur le web, mes offres peuvent vous convenir.</p>
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
    max-height: 280px;

    @media (min-width: $bp-xl) {
        max-height: 180px;
    }
}
</style>