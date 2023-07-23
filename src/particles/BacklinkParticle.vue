<script lang="ts" setup>
    import { ArrowUpIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline';
    defineProps<{
        anchor: string;
        title: string;
        text: string;
    }>();
</script>

<template>
    <div class="backlinks-group">
        <ButtonLinkParticle class="backlink" path="/" name="Go back to Home Page" color="secondary" size="small">
            <ArrowLeftIcon class="backlink-icon" />
        </ButtonLinkParticle>
        <ButtonLinkParticle class="backlink" :path="anchor" :name="text" color="secondary" size="small">
            <ArrowUpIcon class="backlink-icon" />
        </ButtonLinkParticle>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .backlinks-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: $space-xxl 0;

        .backlink {
            margin: $space-s 0;
        }

        .backlink-icon {
                color: $secondary;
                width: $txt-m;
                height: $txt-m;
                margin-right: $space-s;
            }
    }
</style>