<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useLegalsStore } from './stores/legals';
import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';
import LanguageMenuComponent from './components/LanguageMenuComponent.vue';
import LegalsComponent from './components/footer/LegalsComponent.vue';
</script>

<template>
  <HeaderComponent />
  <LegalsComponent v-if="useLegalsStore().showLegals" />
  <main class="main">
    <LanguageMenuComponent />
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style>
@import '@/styles/theme.scss';

.main {
  min-height: 800px;
  padding: 240px 0 0;
  position: relative;
}
</style>
