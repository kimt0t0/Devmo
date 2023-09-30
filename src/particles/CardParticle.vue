<script lang="ts" setup>
import type { CardContent } from '@/interfaces/CardContent.interface';

defineProps<{
    content: CardContent
}>();
</script>

<template>
    <div :class="'card-particle __' + content.color">
        <div class="cp-illus-container">
            <img v-if="content.illustrationPath" :src="content.illustrationPath" class="cp-illus"
                :alt="'Illustration of ' + content.title" />
        </div>
        <p :class="'card-text __' + content.color">{{ content.title }}</p>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.card-particle {
    box-sizing: border-box;
    width: 240px;
    height: 140px;
    border-radius: $radius-m;
    border: 2px solid color($neutral, 25);
    margin: $space-l $space-xxl 0 0;
    padding: $space-s $space-m;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.__danger {
        border: 2px solid color($danger, 50);
    }

    &.__primary {
        border-color: color($primary, 35);
    }
}

.card-text {
    text-align: center;
    font-size: $txt-s;
    font-weight: 600;
    color: color($neutral, 25);

    &.__danger {
        color: color($danger, 50);
    }

    &.__primary {
        color: color($primary, 35);
    }
}
</style>