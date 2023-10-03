<script lang="ts" setup>
import { EyeIcon } from '@heroicons/vue/24/outline';

defineProps<{
    anchors: { path: string, title: string }[];
}>()
</script>

<template>
    <div class="classic-container">
        <ol class="index-list">
            <li class="index-item" v-for="(anchor, index) of anchors" :key="index">
                <ButtonLinkParticle :path="anchor.path" :name="anchor.title" color="danger" size="small">
                    <EyeIcon class="ii-icon" />
                </ButtonLinkParticle>
            </li>
        </ol>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.index-list {
    display: flex;

    @media (max-width: $bp-s) {
        flex-direction: column;
        align-items: center;
    }

    .index-item {
        margin: 0 $space-s;

        @media (max-width: $bp-s) {
            margin: $space-m 0;
        }
    }
}
</style>