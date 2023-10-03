<script lang="ts" setup>
import { ref } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';

const showLanguageDropdown = ref<boolean>(false);
const toggleShowLanguageDropdown = (): void => {
    showLanguageDropdown.value = !showLanguageDropdown.value
}
</script>

<template>
    <aside class="language-menu">
        <div class="lm-contents">
            <button class="language-button" type="button" @click="toggleShowLanguageDropdown">
                <flag :iso="useLanguageStore().language" />
            </button>
            <div class="language-dropdown" v-if="showLanguageDropdown">
                <button class="ld-button" type="button" v-for="(lang, index) of Language" :key="index"
                    @click="useLanguageStore().setLanguage(lang)">
                    <flag :iso="lang" /> {{ lang }}
                </button>
            </div>
        </div>
    </aside>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.language-menu {
    position: sticky;
    z-index: 2;
    width: 80px;
    top: 280px;
    right: $space-m;
    margin-left: auto;

    @media (min-width: $bp-m) {
        top: 300px;
    }

    @media (min-width: $bp-l) {
        right: $space-l
    }

    @media (min-width: $bp-xl) {
        right: $space-xl;
    }
}

.lm-contents {
    position: relative;
}

.language-button {
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: $radius-circle;
    text-transform: capitalize;
    background-color: transparent;
    border: 2px solid color($danger, 50);
    background-color: color($neutral, 60);
    color: color($alert, 40);
    font-size: $txt-xs;
    box-shadow: 2px 2px 3px color($primary, 45);
    cursor: pointer;
    transition: all 200ms ease-in;

    .fi {
        border: 1px solid color($dark, 50);
        border-radius: $radius-xs;
    }

    &:hover,
    &:focus {
        background-color: color($danger, 50);
        color: $light;
        box-shadow: 2px 2px 3px color($primary, 30);
    }
}

.language-dropdown {
    position: absolute;
    top: 62px;
    right: 20px;
    width: 80px;
    height: fit-content;
    border: 1px solid color($danger, 50);
    border-radius: $radius-s;
    overflow: hidden;

    .ld-button {
        box-sizing: border-box;
        padding: $space-xs $space-s;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border: 1px solid transparent;
        border-bottom: 1px solid color($danger, 50);
        background-color: color($neutral, 60);
        color: color($danger, 50);
        font-size: $txt-xs;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 200ms ease-in;

        &:hover,
        &:focus {
            background-color: color($danger, 50);
            color: color($neutral, 60);
        }

        .fi {
            margin-right: $space-xs;
            border: 1px solid color($dark, 50);
            border-radius: $radius-xs;
        }
    }
}
</style>