<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <HeaderComponent />
  <main class="main">
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style>
  @import '@/styles/theme.scss';

  .main {
    min-height: 800px;
  }
</style>
