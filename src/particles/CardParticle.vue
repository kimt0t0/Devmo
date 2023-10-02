<script lang="ts" setup>
import type { CardContent } from '@/interfaces/CardContent.interface';
import type { CardTypes } from "@/enums/CardTypes";

defineProps<{
    content: CardContent,
    cardType?: CardTypes
}>();
</script>

<template>
    <div :class="'card-particle __' + content.color + ' __' + cardType">
        <div class="cp-illus-container">
            <img v-if="content.illustrationPath" :src="content.illustrationPath" class="cp-illus"
                :alt="'Illustration of ' + content.title" />
        </div>
        <p :class="'card-text __' + content.color">{{ content.title }}</p>
        <p :class="'card-text-xs __' + content.color">{{ content.subtext }}</p>
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
    box-shadow: 2px 2px 3px color($primary, 45);
    margin: $space-l $space-xxl 0 0;
    padding: $space-s $space-m;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.__vertical {
        height: 320px;
        justify-content: flex-start;
    }

    &.__danger {
        border-color: color($danger, 50);
    }

    &.__alert {
        border-color: color($alert, 30);
    }

    &.__primary {
        border-color: color($primary, 35);
    }

    &.__secondary {
        border-color: color($secondary, 35);
    }

    &.__tertiary {
        border-color: color($tertiary, 70);
    }

    @media (max-width: $bp-s) {
        width: 100%;
        margin: $space-m 0;
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

    &.__alert {
        color: color($alert, 30);
    }

    &.__primary {
        color: color($primary, 35);
    }

    &.__secondary {
        color: color($secondary, 35);
    }

    &.__tertiary {
        color: color($tertiary, 70);
    }

}

.card-text-xs {
    text-align: center;
    margin: 0 auto;
    font-weight: 400;
    color: color($neutral, 25);

    &.__danger {
        color: color($danger, 50);
    }

    &.__alert {
        color: color($alert, 30);
    }

    &.__primary {
        color: color($primary, 35);
    }

    &.__secondary {
        color: color($secondary, 35);
    }

    &.__tertiary {
        color: color($tertiary, 70);
    }

}
</style>