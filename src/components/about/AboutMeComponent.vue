<script lang="ts" setup>
    import { InformationCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>

    <div class="me-title-container"  id="about-me">
        <InformationCircleIcon class="hero-title-icon" />
        <SectionTitleParticle title="... Me ?" />
    </div>

    <div class="me-bloc">
        <p class="me-txt">My name is <strong>Kim ROBERT</strong>. I'm 30 years-old, non-binary (pronouns he / they - or 'il / iel' + masc.) and neuro-atypical (with a 'RQTH').</p>
        <p class="me-txt">I have been <strong>training at My Digital School </strong>and working as a <strong>front-end developer at Studio Floax for a year</strong>. I am now willing to keep training with 
            MyDigitalSchool's <strong><a href="https://www.mydigitalschool.com/mba-architecte-web" class='primary-link' target='_blank' title="Check the degree's details">@Full-Stack Developer MBA</a> and looking for a two years job opportunity 'en alternance'</strong>  (this is a very French word).</p>

    </div>

    <div class="me-bloc">
        <p class="me-txt">For now, I have been mainly experiencing with <strong>JavaScript and TypeScript</strong> - but I am curious to learn other languages too. As a front-end developer, for now <strong>my main and preferred front-end library is Vue 3</strong>. I have tried a bit of React and Angular too. I have also been experiencing some back-end development with Node.js + Express + Mongo, or Nest.js + TypeORM + MySQL. I am also discovering a bit of GraphQL at my current job with Floax.</p>
        <p class="me-txt">In <strong>my ideal next job I would enjoy an upgrade to autonomy as a full-stack developer.</strong> That means increasing my skills with front-end frameworks and getting more autonomy and knowledge as regards API development, databases and deployment.</p>
        <p class="me-txt">I worked in a small team 'en mode agence' this year and would enjoy joining a bigger and more structured team. Hence today I am <strong>more interested in Nantes' ESNs.</strong> I also have an interest in project management - which I have studied a bit at school this year.</p>
    </div>

    <BacklinkParticle anchor="#index-title" title="Go back to top of page" text="Go back to page title" />
    <!-- <a href="#index-title" class="secondary-link goback-anchor" title="Go back to top of page">Go back to page title</a> -->

</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .me-title-container {
        display: flex;
        align-items: center;
    }

    .me-bloc {
        margin: $space-m 0;
    }

    .me-txt {
        font-weight: 200;
        >strong {
            font-weight: 400;
        }
    }
</style>