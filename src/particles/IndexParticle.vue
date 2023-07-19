<script lang="ts" setup>
     import { EyeIcon } from '@heroicons/vue/24/outline';

    defineProps<{
        anchors: {path: string, title: string}[];
    }>()
</script>

<template>
    <div class="classic-container">
        <ol class="index-list">
            <li class="index-item" v-for="(anchor, index) of anchors" :key="index">
                <ButtonLinkParticle :path="anchor.path" :name="anchor.title" color="secondary" size="small">
                    <EyeIcon class="ii-icon" />
                </ButtonLinkParticle>
            </li>
        </ol>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .index-list {
        box-sizing: border-box;
        list-style-type: none;
        padding: $space-s;
        width: 100%;
        border-radius: $radius-s;
        background-color: $light;
        @media (min-width: $bp-s) {
            width: fit-content;
        }
        .index-item {
            margin: $space-m 0;
        }
        .ii-icon {
            width: $txt-s;
            height: $txt-s;
            margin-right: $space-s;
            color: $secondary;
        }
    }
</style>