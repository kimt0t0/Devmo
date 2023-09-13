<script lang="ts" setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <div class="me-title-container" id="about-me">
        <InformationCircleIcon class="hero-title-icon" />
        <SectionTitleParticle title="... Me ?" />
    </div>

    <div class="me-bloc">
        <p class="me-txt">My name is <strong>Kim ROBERT</strong>. I'm French, 30 years-old, non-binary (pronouns he / they -
            or 'il
            / iel' + masc.) and neuro-atypical (with a 'RQTH').</p>
        <p class="me-txt">I have been <strong>training at My Digital School </strong>and working as a <strong>front-end
                developer at Studio Floax for a year</strong>.</p>
        <p class="me-txt">I am now looking for a <strong>job opportunity as a JavaScript/TypeScript web developer</strong>.
            I am mainly specialized with <strong>Vue 3 and Nest.js</strong> and ideally I would love to keep working with
            these two. I can also work with React and Angular (but may be a bit slower during the two first weeks).</p>
    </div>

    <div class="me-bloc">
        <p class="me-txt">For now, I have been mainly experiencing with <strong>JavaScript and TypeScript</strong> - but I
            am curious to learn other languages too. As a front-end developer, for now <strong>my main and preferred
                front-end library is Vue 3</strong>. I have tried a bit of React and Angular too. I have also been
            experiencing some back-end development with Node.js + Express + Mongo, or Nest.js + TypeORM + MySQL. I am also
            discovering a bit of GraphQL at my current job with Floax.</p>
        <p class="me-txt">In <strong>my ideal next job I would enjoy an upgrade to autonomy as a full-stack
                developer.</strong> That means increasing my skills with front-end frameworks and getting more autonomy and
            knowledge as regards API development, databases and deployment.</p>
        <p class="me-txt">I worked in a small team 'en mode agence' this year and would enjoy joining a bigger and more
            structured team. Hence today I am <strong>more interested in Nantes' ESNs.</strong></p>
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
    font-weight: 400;

    >strong {
        font-weight: 500;
    }
}
</style>