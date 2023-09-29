<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
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
        <p class="warning-txt">
            {{
                useLanguageStore().language === Language.FR ?
                "Site en cours de construction." :
                "This website is a work in progress."
            }}
        </p>
        <button type="button" class="wc-button" @click="hideAlert">
            <XMarkIcon class="wc-button-icon" />
        </button>
    </div>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.warning-container {
    box-sizing: border-box;
    width: 100%;
    padding: $space-s $space-l;
    min-height: 60px;
    background-color: lighten($alert, 40%);
    color: darken($alert, 30%);
    border-bottom: 2px dotted darken($alert, 30%);
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
            color: darken($alert, 30%);
        }

        &:hover,
        &:focus {
            .wc-button-icon {
                color: darken($alert, 50%);
            }
        }
    }
}
</style>