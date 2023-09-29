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
        background-color: color($primary, 50);
    }

    &.__dark {
        background-color: color($dark, 50);
    }

    &.__secondary {
        background-color: color($secondary, 50);
    }

    &.__neutral {
        background-color: color($neutral, 25);
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