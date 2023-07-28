<script lang="ts" setup>
    import SunCircle from './scss/SunCircleComponent.vue';
</script>

<template>
    <section class="classic-section scss-gallery-section">
        <h3 class="title-ter scss-gallery-title">Styling Gallery</h3>
        <SunCircle />
    </section>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .scss-gallery-title {
        margin-bottom: $space-l;
    }
</style>