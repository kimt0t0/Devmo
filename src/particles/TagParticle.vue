<script lang="ts" setup>
    defineProps<{
        title: string;
        subtitle?: string;
        color: string;
    }>();
</script>

<template>
    <div :class="'tag-particle __' + color">
        <p class="tag-title">{{ title }}</p>
        <p class="tag-subtitle" v-if="subtitle">{{ subtitle }}</p>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .tag-particle {
        box-sizing: border-box;
        width: fit-content;
        border: 1px solid transparent;
        border-radius: $radius-xs;
        padding: $space-s $space-m;
        /* font-family: Lato, Raleway, Arial, Helvetica, sans-serif; */
        color: $light;

        &.__primary {
            background-color: $primary;
        }

        &.__secondary {
            background-color: $secondary;
        }

        &.__dark {
            background-color: $dark;
        }

        &.alert {
            background-color: $alert;
        }

        &.danger {
            background-color: $danger;
        }

        .tag-title {
            font-size: $txt-s;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
        }
        .tag-subtitle {
            font-size: $txt-xs;
            font-weight: 200;
            line-height: 1;
            margin: 0;
        }
    }
</style>