<script setup lang="ts">
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import SkillsComponent from '@/components/homepage/SkillsComponent.vue';
import AimsComponent from '@/components/homepage/AimsComponent.vue';

const titleFr = {
  "title": "Bienvenue sur mon site !",
  "subtitle": "Prenez le temps de visiter et contactez-moi si vous avez des questions"
};
const titleEn = {
  "title": "Welcome on my website !",
  "subtitle": "Please take your time to visit and feel free to contact me if you have any question"
};
</script>

<template>
  <HeroParticle v-if="useLanguageStore().language === Language.FR" :title="titleFr.title" :subtitle="titleFr.subtitle" />
  <HeroParticle v-if="useLanguageStore().language === Language.EN" :title="titleEn.title" :subtitle="titleEn.subtitle" />
  <SkillsComponent />
  <AimsComponent />
</template>
