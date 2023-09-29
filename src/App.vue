<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/header/HeaderComponent.vue';
import WarningWipComponent from './components/WarningWipComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LanguageMenuComponent from './components/LanguageMenuComponent.vue';
</script>

<template>
  <HeaderComponent />
  <WarningWipComponent />
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
  padding: 64px 0 0;
  position: relative;
}
</style>
