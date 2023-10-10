<script lang="ts" setup>
import { ArrowUpIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { useLanguageStore } from '@/stores/language';
import {
    Language
} from '@/enums/Language';
defineProps<{
    anchor: string;
    text: string;
    color?: string;
}>();
</script>

<template>
    <div class="backlinks-group">
        <ButtonLinkParticle class="backlink" path="/"
            :name="useLanguageStore().language === Language.FR ? 'Revenir à l\'accueil' : 'Back to Homepage'"
            :color="color ? color : 'secondary'" size="small">
            <ArrowLeftIcon :class="'backlink-icon __' + color" />
        </ButtonLinkParticle>
        <ButtonLinkParticle class="backlink" :path="anchor" :name="text" :color="color ? color : 'secondary'" size="small">
            <ArrowUpIcon :class="'backlink-icon __' + color" />
        </ButtonLinkParticle>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.backlinks-group {
    width: 100%;
    display: flex;
    margin: $space-s 0 $space-xxl;

    .backlink {
        margin: 0 $space-s;
    }

    .backlink-icon {
        color: $secondary;
        width: $txt-m;
        height: $txt-m;
        margin-right: $space-s;

        &.__alert {
            color: color($alert, 50);
        }

        &.__danger {
            color: color($danger, 50);
        }

        &.__dark {
            color: color($dark, 50);
        }

        &.__neutral {
            color: color($neutral, 25);
        }

        &.__primary {
            color: color($primary, 40);
        }

        &.__secondary {
            color: color($secondary, 30);
        }

        &.__tertiary {
            color: color($tertiary, 70);
        }
    }

    @media (max-width: $bp-s) {
        flex-direction: column;
        /* align-items: center; */

        .backlink {
            margin: $space-s 0;
        }
    }
}
</style>