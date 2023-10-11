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
    <Transition name="slide-fade">
      <RouterView />
    </Transition>
  </main>
  <FooterComponent />
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.main {
  min-height: 800px;
  padding: 140px 0 80px;
  position: relative;
}

/* Transition effect */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
