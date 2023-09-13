<script lang="ts" setup>
import Crow from './scss/CrowComponent.vue';
import Magic from './scss/MagicComponent.vue';
import Rondoudou from './scss/RondoudouComponent.vue';
</script>

<template>
    <section class="classic-section scss-gallery-section">
        <h3 class="title-ter scss-gallery-title" id="css-scss">CSS / Scss Gallery</h3>
        <div class="gallery">
            <Rondoudou />
            <Magic />
            <Crow />
        </div>
        <div class="more-container">
            <p class="more-text">Want more ?</p>
            <ButtonLinkParticle path="https://codepen.io/Siaesior" name="Check my Codepen" color="primary" size="small" />
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

.more-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .more-text {
        margin: $space-xs 0;
        font-weight: 600;
    }
}
</style>