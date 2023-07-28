<script lang="ts" setup>
    import ScssGallery from '@/components/gallery/ScssGalleryComponent.vue';
    const anchors = [
        {
            path: '#css-scss',
            title: 'CSS and Scss fun'
        },
        {
            path: '#vue-at-work',
            title: 'Vue (work experience)'
        },
        {
            path: '#nest-js',
            title: 'Nest.js & TypeOrm (work experience)'
        },
        {
            path: '#basic-security',
            title: 'Basic security (Node & Express & Mongo)'
        },
        {
            path: '#basic-tdd',
            title: 'Basic Test Driven Development'
        }
    ]
</script>

<template>
    <HeroParticle title="Check my gallery !" />
    <IndexParticle :anchors="anchors" />
    <div class="classic-container gallery-container">
        <ScssGallery />
    </div>
</template>