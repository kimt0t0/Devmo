<script lang="ts" setup>
import ScssGallery from '@/components/gallery/ScssGalleryComponent.vue';
import RepositoriesGallery from '@/components/gallery/RepositoriesGalleryComponent.vue';
const anchors = [
    {
        path: '#css-scss',
        title: 'CSS and Scss fun'
    },
    {
        path: '#repositories',
        title: 'Repositories'
    },
]
</script>

<template>
    <HeroParticle title="Check my gallery !" />
    <IndexParticle :anchors="anchors" />
    <div class="classic-container gallery-container">
        <ScssGallery />
        <RepositoriesGallery />
    </div>
</template>