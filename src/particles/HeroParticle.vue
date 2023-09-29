<script lang="ts" setup>
import TagParticle from './TagParticle.vue';

defineProps<{
    title: string;
    subtitle?: string;
    color?: string;
}>();
</script>

<template>
    <div :class="'hero-particle __' + color">
        <div class="classic-container hero-container">
            <TagParticle title="Open To Work" color="neutral" />
            <div class="hero-title-container">
                <div class="hero-decorator"></div>
                <div class="hero-title-contents">
                    <h2 :class="'hero-title __' + color">{{ title }}</h2>
                    <p :class="'hero-subtitle __' + color" v-if="subtitle">{{ subtitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.hero-title-container {
    padding: $space-l 0;
    display: flex;
    /* font-family: Lato, Raleway, Arial, Helvetica, sans-serif; */
}

.hero-decorator {
    width: 30px;
    height: 20px;
    border-radius: $radius-xs $radius-l $radius-xs $radius-l;
    background-color: color($neutral, 25);
    border: 1px solid color($neutral, 10);
    box-shadow: 4px 2px 3px color($dark, 50);
    transform: rotate(8deg);
    margin: $space-s $space-s 0 0;
    position: relative;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
        transform: rotate(-25deg);
        background-color: color($neutral, 28);

        &::after {
            content: "";
            width: 20px;
            height: 15px;
            border-radius: $radius-xs $radius-l $radius-xs $radius-l;
            background-color: color($danger, 35);
            border: 1px solid color($neutral, 15);
            position: absolute;
            animation: dropLeaf 1000ms linear forwards;
        }
    }

    &.__secondary {
        background-color: $secondary;
        border: 1px solid $secondary;
    }

    @media (max-width: $bp-xs) {
        display: none;
    }

    @media (min-width: $bp-m) {
        transform: rotate(22deg);
    }
}

.hero-title {
    font-size: $txt-xl;
    color: color($dark, 50);
    margin: 0;
    line-height: 1.2;

    @media (min-width: $bp-xs) {
        font-size: $txt-xxl;
    }

    &.__secondary {
        color: $secondary;
    }
}

.hero-subtitle {
    font-size: $txt-s;
    color: color($dark, 50);
    margin: 0;

    &.__secondary {
        color: $secondary;
    }
}

@keyframes dropLeaf {

    0% {
        opacity: 0;
    }

    15% {
        transform: translate(-6px, 8px) rotate(-16deg);
        opacity: 0.85;
    }

    30% {
        transform: translate(-8px, 16px) rotate(-4deg);
        opacity: 1;
    }

    35% {
        transform: translate(-4px, 24px);
        background-color: color($alert, 45);
        opacity: 1;
    }

    55% {
        transform: translate(0px, 34px) rotate(22deg);
        opacity: 1;
    }

    80% {
        transform: translate(-12px, 48px) rotate(48deg);
        background-color: color($alert, 30);
        opacity: 0.8;
    }

    100% {
        transform: translate(-32px, 52px);
        opacity: 0;
    }
}
</style>