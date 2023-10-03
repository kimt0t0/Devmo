<script lang="ts" setup>
defineProps<{
    title: string;
    description?: string;
    color?: string;
}>();
</script>

<template>
    <div :class="'commitment-card __' + color">
        <div class="cc-illus-container">
            <slot></slot>
            <!-- add icon here -->
        </div>
        <div class="cc-contents">
            <h4 class="cc-title">{{ title }}</h4>
            <p class="cc-txt">{{ description }}</p>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.commitment-card {
    box-sizing: border-box;
    width: 100%;
    padding: $space-l $space-m;
    border-radius: $radius-s;
    margin: $space-m 0;
    background: lighten($primary, 50%);
    color: darken($primary, 10%);
    border: 2px solid $primary;
    box-shadow: 2px 2px 3px color($primary, 45);

    @media (min-width: $bp-m) {
        width: 500px;
        height: 380px;
    }

    @media (min-width: $bp-xl) {
        width: 280px;
    }

    &.__dark {
        background-color: color($dark, 130);
        color: color($dark, 50);
        border: 2px solid color($dark, 50);
    }

    &.__neutral {
        background-color: color($neutral, 62);
        color: color($neutral, 25);
        border: 2px solid color($neutral, 25);
    }

    &.__secondary {
        background-color: color($secondary, 55);
        color: color($secondary, 30);
        border: 2px solid color($secondary, 30);
    }

    &.__tertiary {
        background-color: color($tertiary, 160);
        color: color($tertiary, 70);
        border: 2px solid color($tertiary, 70);
    }
}

.cc-illus-container {
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: $bp-xl) {
        height: 70px;
    }

    .ccc-icon {
        width: $txt-xxxl;
        height: $txt-xxxl;

        &.__vertical {
            height: 90px;
            border-radius: $radius-xs;
        }

        @media (min-width: $bp-l) {
            width: $txt-xxl;
            height: $txt-xxl;
        }
    }
}

.cc-contents {
    font-size: $txt-s;
    text-align: center;

    .cc-title {
        text-transform: uppercase;
        margin: $space-m 0;
    }
}
</style>