<script lang="ts" setup>
  import AboutMeComponent from '@/components/about/AboutMeComponent.vue';
  import AboutSiteComponent from '@/components/about/AboutSiteComponent.vue';
  import CtasComponent from '@/components/CtasComponent.vue';

  const anchors: { path: string, title: string }[] = [
    {
      path: '#about-me',
      title: '... Me ?'
    },
    {
    path: '#about-site',
    title: '... THE Website ?'
    }
  ]
</script>

<template>
  <HeroParticle title="Want to know more about..." id="index-title" />
  <IndexParticle :anchors="anchors" />
  <div class="classic-container">
    <AboutMeComponent id="about-me" />
    <CtasComponent />
    <AboutSiteComponent id="about-site" />
  </div>
</template>

<style lang="scss">
</style>
