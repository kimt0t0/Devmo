<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import WarningWipComponent from './components/WarningWipComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <HeaderComponent />
  <WarningWipComponent />
  <main class="main">
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style>
  @import '@/styles/theme.scss';

  .main {
    min-height: 800px;
    padding: 64px 0 0;
  }
</style>
