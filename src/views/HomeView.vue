<script setup lang="ts">
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import SkillsComponent from '@/components/homepage/SkillsComponent.vue';
import AimsComponent from '@/components/homepage/AimsComponent.vue';

const titleFr = {
  "title": "Bienvenue !",
  "subtitle": "Je suis développeur·e we front-end et full-stack. Besoin d'un site personnel ou professionnel ? D'un blog ? Vous êtes au bon endroit."
};
const titleEn = {
  "title": "Welcome !",
  "subtitle": "I'm a front-end and full-stack web developer. If you need a personal or professional website, or a blog, you're in the right place."
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
  <!-- Add prices component -->
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
