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
            <TagParticle title="Open To Work" subtitle="starting on September 2023" color="primary" />
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
        background-color: $primary;
        border: 1px solid $primary;
        transform: rotate(8deg);
        margin: $space-s $space-s 0 0;

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
        color: $primary;
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
        color: $primary;
        margin: 0;
        &.__secondary {
            color: $secondary;
        }
    }
</style>