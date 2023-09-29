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
  <div class="classic-container avatar-container">
    <img src="@images/avatar.webp" class="avatar" alt="An avatar of the website's owner" />
  </div>
  <HeroParticle v-if="useLanguageStore().language === Language.FR" :title="titleFr.title" :subtitle="titleFr.subtitle" />
  <HeroParticle v-if="useLanguageStore().language === Language.EN" :title="titleEn.title" :subtitle="titleEn.subtitle" />
  <SkillsComponent />
  <AimsComponent />
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.avatar-container {
  display: flex;
  justify-content: center;
  margin-top: -$space-xl;
}

.avatar {
  width: 280px;
  height: 280px;
}
</style>
