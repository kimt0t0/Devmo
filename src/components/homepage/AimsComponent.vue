<script lang="ts" setup>
import { EyeIcon, BriefcaseIcon, AcademicCapIcon, MapPinIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <section class="classic-section aims-section">
        <div class="classic-container">
            <div class="aims-title-container">
                <EyeIcon class="hero-title-icon" />
                <SectionTitleParticle title="What am I looking for ?" />
            </div>
            <div class="aims-container">
                <div class="aims-bloc">
                    <div class="aims-subbloc">
                        <h3 class="title-ter">Wanted Jobs:</h3>
                        <p class="aims-subtitle">"En CDI"</p>
                        <ol class="aims-list">
                            <li class="aim-item">
                                <BriefcaseIcon class="icon-classic" />Front-end web developer
                            </li>
                            <li class="aim-item">
                                <BriefcaseIcon class="icon-classic" />Full-stack web developer
                            </li>
                            <li class="aim-item">
                                <MapPinIcon class="icon-classic" />In (or near) Nantes
                            </li>
                        </ol>
                    </div>
                    <div class="aims-img-container">
                        <img src="@images/nantes_map.webp" alt="a map showing nantes city" class="aims-img" />
                    </div>
                </div>
            </div>
            <div class="aims-container">
                <h4 class="title-fourth">Ideal Job:</h4>
                <ol class="aims-list __jobs">
                    <li class="aims-txt">Lots of front-end with Vue 3</li>
                    <li class="aims-txt">Lots of styling and challenges with Scss</li>
                    <li class="aims-txt">Team work on project's architecture</li>
                    <li class="aims-txt">Regular code reviews (at least twice a month)</li>
                    <li class="aims-txt">Collaboration with a designer or design team</li>
                    <li class="aims-txt">Some back-end (I work with Nest.js and am curious about GraphQL)</li>
                    <li class="aims-txt">Nice and motivating atmosphere !</li>
                </ol>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.aims-title-container {
    display: flex;
    align-items: center;
}

.aims-container {
    padding: $space-m 0;
    border-top: 1px solid $primary;
}

.aims-bloc {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: $bp-m) {
        flex-direction: row;
    }

    .aims-subbloc {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (min-width: $bp-m) {
            width: 50%;
        }
    }
}

.aims-img-container {
    display: flex;
    justify-content: center;

    @media (min-width: $bp-m) {
        width: 50%;
        justify-content: flex-start;
    }

    .aims-img {
        width: 100%;
        max-width: 240px;
        max-height: 350px;
        margin: $space-s 0;
    }
}

.aims-subtitle {
    font-size: $txt-xs;
    font-weight: 200;
    font-style: oblique;
    margin: 0;
    color: $secondary;
}

.aims-list {
    list-style-type: none;
    padding: 0;

    @media (min-width: $bp-m) {
        width: 50%;
    }

    &.__jobs {
        list-style-type: disc;
    }

    .aim-item {
        font-size: $txt-s;
        font-weight: 400;
        line-height: 1.2;
        display: flex;
        align-items: center;
    }
}
</style>