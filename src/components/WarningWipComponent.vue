<script lang="ts" setup>
    import { ref } from 'vue';
    import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline';

    const showAlert = ref<boolean>(true);

    const hideAlert = () => {
        showAlert.value = false;
    }
</script>

<template>
    <div class="warning-container" v-if="showAlert">
        <ExclamationTriangleIcon class="wc-icon" />
        <p class="warning-txt">Hello there, please be aware that this website is still a work in progress. Hence if some sections are not complete yet they will be filled-up soon.</p>
        <button type="button" class="wc-button" @click="hideAlert"><XMarkIcon class="wc-button-icon" /></button>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .warning-container {
        box-sizing: border-box;
        width: 100%;
        padding: $space-s $space-l;
        min-height: 60px;
        background-color: lighten($danger, 40%);
        color: darken($danger, 30%);
        font-size: $txt-xs;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .wc-icon {
            min-width: $txt-s;
            width: $txt-s;
            min-height: $txt-s;
            height: $txt-s;
            margin-right: $space-m;
        }

        .wc-button {
            cursor: pointer;
            border: 1px solid transparent;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: $space-l;
            top: 35%;
            transition: all 200ms ease-in;

            .wc-button-icon {
                width: $txt-s;
                height: $txt-s;
                color: darken($danger, 30%);
            }

            &:hover, &:focus {
                .wc-button-icon {
                    color: darken($danger, 50%);
                }
            }
        }
    }
</style>