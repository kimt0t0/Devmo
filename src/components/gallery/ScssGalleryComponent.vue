<script lang="ts" setup>
    import Magic from './scss/MagicComponent.vue';
    import Rondoudou from './scss/RondoudouComponent.vue';
    import SunCircle from './scss/SunCircleComponent.vue';
</script>

<template>
    <section class="classic-section scss-gallery-section">
        <h3 class="title-ter scss-gallery-title" id="css-scss">Styling Gallery</h3>
        <div class="gallery">
            <SunCircle />
            <Rondoudou />
            <Magic />
        </div>
    </section>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .scss-gallery-title {
        margin-bottom: $space-l;
    }

    .gallery {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: $bp-m) {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
</style>