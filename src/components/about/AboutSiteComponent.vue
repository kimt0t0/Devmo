<script lang="ts" setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <section class="classic-section site-section">

        <div class="site-title-container">
            <InformationCircleIcon class="hero-title-icon" />
            <SectionTitleParticle title="... Site ?" />
        </div>

        <div class="site-bloc">
            <p class="site-txt"></p>

        </div>

        <div class="site-bloc">
            <p class="site-txt"></p>
        </div>


        <a href="#index-title" class="secondary-link goback-anchor" title="Go back to top of page">Go back to page title</a>

</section></template>

<style lang="scss">@import '@/styles/theme.scss';

.site-title-container {
    display: flex;
    align-items: center;
}</style>