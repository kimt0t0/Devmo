<script lang="ts" setup>
    defineProps<{
        title: string;
        description?: string;
        color?: string;
        illustration: string;
    }>();
</script>

<template>
    <li :class="'commitment-card __' + color">
        <div class="cc-illus-container">
            <slot></slot>
            <!-- add icon here -->
        </div>
        <div class="cc-contents">
            <h4 class="cc-title">{{ title }}</h4>
            <p class="cc-txt">{{ description }}</p>
        </div>
    </li>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .commitment-card {
        box-sizing: border-box;
        width: 100%;
        max-height: 400px;
        padding: $space-l $space-m;
        border-radius: $radius-s;
        margin: $space-m 0;
        color: $primary;
        border: 2px solid $primary;

        @media (min-width: $bp-m) {
            width: 500px;
            height: 350px;
        }

        @media (min-width: $bp-xl) {
            width: 280px;
            height: 800px;
        }
        
        &.__alert {
            background-color: lighten($alert, 35%);
            color: darken($alert, 35%);
            border: 2px solid darken($alert, 35%);
        }

        &.__danger {
            background-color: lighten($danger, 40%);
            color: darken($danger, 30%);
            border: 2px solid darken($danger, 30%);
        }

        &.__secondary {
            background-color: lighten($secondary, 50%);
            color: darken($secondary, 10%);
            border: 2px solid darken($secondary, 35%);
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
        }
    }
</style>