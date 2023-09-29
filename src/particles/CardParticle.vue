<script lang="ts" setup>
import type { CardContent } from '@/interfaces/CardContent.interface';

defineProps<{
    content: CardContent
}>();
</script>

<template>
    <div class="card-particle">
        <div class="cp-illus-container">
            <img v-if="content.illustrationPath" :src="content.illustrationPath" class="cp-illus"
                :alt="'Illustration of ' + content.title" />
        </div>
        <p class="card-text">{{ content.title }}</p>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.card-particle {
    box-sizing: border-box;
    width: 200px;
    height: 140px;
    border-radius: $radius-m;
    border: 2px solid color($alert, 50);
    margin: $space-s 0 0 $space-m;
}
</style>@/interfaces/CardContent.interface