<script lang="ts" setup>
import { Language } from '@/enums/Language';
import { useLanguageStore } from '@/stores/language';
</script>

<template>
    <section class="classic-section classic-container">
        <!-- Title -->
        <HeroParticle
            :title="useLanguageStore().language === Language.EN ? 'Get ready for your project' : 'Préparez votre projet'" />
        <!-- English introduction -->
        <div v-if="useLanguageStore().language === Language.EN" class="get-ready-intro">
            <p class="classic-text get-ready-intro">
                <strong>Preliminary suggestion:</strong>
            </p>
            <p class="classic-text get-ready-intro">Please be aware that if
                you are willing to do this professionally you will need two or three hours to complete the full process.
            </p>
            <p class="classic-text get-ready-intro">Unfortunately, for financial reasons this website doesn't allow you to
                save your work (yet). If you need to split this task in multiple sessions, you may simply take notes on your
                own. Then if you are willing to work with me you can email it to me in the format that best suits you.
                Otherwise, you will be able to send me a complete document at the end of this form.
            </p>
            <p class="classic-text get-ready-intro">If this task is too hard for you, just do what you can and I will help
                you with the remainder ! It's perfectly normal if you don't have all the answers yet.</p>
            <p class="classic-text get-ready-intro">Of course, your ideas are yours. I will not copy them or use them for my
                own purposes. I will not either publish or share them with anyone without your written permission.</p>
        </div>
        <!-- French introduction -->
        <div v-else class="get-ready-intro">
            <p class="classic-text get-ready-intro"><strong>Conseils préalables:</strong></p>
            <p class="classic-text get-ready-intro">Si vous souhaitez réalisez cette tâche de façon professionnelle, vous
                aurez probablement besoin de deux ou trois heures pour réaliser toutes les étapes et compléter l'ensemble.
            </p>
            <p class="classic-text get-ready-intro">Pour le moment, pour des raisons financières, ce site ne permet pas
                (encore) de sauvegarder votre travail. Si vous avez besoin de découper ce travail en plusieurs sessions,
                vous pouvez simplement prendre des notes de votre côté. Ainsi si vous souhaitez travailler avec moi vous
                pourrez simplement me les envoyer par e-mail dans le format qui vous convient. Si vous faites tout en une
                session, vous pourrez m'envoyer votre document complété directement à la fin du formulaire.</p>
            <p class="classic-text get-ready-intro">Si vous rencontrez des difficultés, faites ce que vous pouvez et je vous
                aiderai pour le reste ! Rassurez-vous: c'est tout à fait normal si vous n'avez pas encore toutes les
                réponses.</p>
            <p class="classic-text get-ready-intro">Il va de soi que vos idées vous appartiennent: je m'engage à ne pas les
                copier ni les utiliser pour mon bénéfice personnel. Je ne les publierai ni ne les partagerai avec personne
                sans votre autorisation écrite préalable.</p>
        </div>
        <!-- Form contents -->
        <h2>{{
            useLanguageStore().language === Language.EN ?
            'Sorry, this form is still in construct. It will be available in a few days!'
            :
            'Désolé·e, ce formulaire est en cours de construction. Il sera en ligne dans quelques jours!'
        }}</h2>
    </section>
</template>

<style lang="scss">
@use '@/styles/theme.scss' as *;

.get-ready-intro {
    text-align: justify;

    >strong {
        font-weight: 500;
        text-decoration: underline;
        line-height: 2;
    }
}
</style>