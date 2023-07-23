<script lang="ts" setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>

    <div class="site-title-container" id="about-site">
        <InformationCircleIcon class="hero-title-icon" />
        <SectionTitleParticle title="... Site ?" />
    </div>

    <div class="site-bloc">
        <p class="site-txt"><strong>I made this mobile-first website with Vue 3 (composition option)</strong>, Vite and Pinia to show my front-end abilities. You may find my GitHub Repository <a href="https://github.com/kimt0t0/Devmo" target="_blank" title="Check my repo !" class="primary-link">@here !</a></p>
        <p class="site-txt">If you want the latest developments you should probably check on the #development branch. Also, please remember my work is protected with French authors rights). My aim by doing so is to find a new training job for two years (and more on the long term ?)</p>
    </div>

    <div class="site-bloc __list">
        <p class="site-txt">Other tools I used include:</p>
        <ul class="classic-list">
            <li class="cl-item"><a href="https://coolors.co/" class="primary-link" title="Visit Coolors" target="_blank">@Coolors</a> and <a href="https://webdi.fr/couleur-hexa.php" class="primary-link" title="Visit Webdi" target="_blank">@Webdi</a> for the colors,</li>
            <li class="cl-item"><a href="https://www.tpgi.com/color-contrast-checker/" class="primary-link" title="Get Colour Contrast Analyzer for free" target="_blank">@Colour Contrast Analyzer</a> to check my colors choices in terms of accessibility,</li>
            <li class="cl-item"><a href="https://heroicons.com/" class="primary-link" title="Visit HeroIcons" target="_blank">@HeroIcons</a> as the icons library,</li>
            <li class="cl-item"><a href="https://www.fontsquirrel.com/" class="primary-link" title="Visit FontSquirrel" target="_blank">@FontSquirrel</a> as a free and open-source fonts library,</li>
            <li class="cl-item"><a href="https://squoosh.app/" class="primary-link" title="Visit Squoosh" target="_blank">@Squoosh</a> to optimize images for the web.</li>
        </ul>
    </div>


    <BacklinkParticle anchor="#index-title" title="Go back to top of page" text="Go back to page title" />

</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .site-title-container {
        margin-top: $space-xxxl;
        display: flex;
        align-items: center;
    }

    .site-bloc {
        margin: $space-m 0;
        &.__list {
            margin-top: $space-xl;
            .cl-item {
                line-height: 1.5;
            }
        }
    }

</style>