<script lang="ts" setup>
    const anchors = [
        {
            path: '#css-scss',
            title: 'CSS and Scss fun'
        },
        {
            path: '#vue-at-work',
            title: 'Vue at work'
        },
        {
            path: '#nest-js',
            title: 'Nest.js & TypeOrm at work'
        },
        {
            path: '#basic-security',
            title: 'Basic security (Node & Express & Mongo)'
        },
        {
            path: '#online',
            title: 'Full front online examples from school'
        }
    ]
</script>

<template>
    <HeroParticle title="Check my gallery !" />
    <IndexParticle :anchors="anchors" />
</template>