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
  <section class="classic-section">
    <div class="classic-container">
      <AboutMeComponent />
      <CtasComponent />
      <AboutSiteComponent />
    </div>
  </section>
</template>
