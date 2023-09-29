<script lang="ts" setup>
defineProps<{
    title: string;
    color?: string;
}>();
</script>

<template>
    <div class="section-title-container">
        <h2 :class="'section-title __' + color">{{ title }}</h2>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.section-title {
    margin: 0;
    font-family: Lato, Raleway, Arial, Helvetica, sans-serif;
    font-size: $txt-xl;
    font-weight: 700;
    color: color($dark, 50);

    &.__secondary {
        color: $secondary;
    }
}
</style>