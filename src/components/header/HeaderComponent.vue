<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import NavbarMobileComponent from './NavbarMobileComponent.vue';
import NavbarDesktopComponent from './NavbarDesktopComponent.vue';

const titleFr = "DEvMO de Kim"
const titleEn = "Kim's DEvMO"
</script>

<template>
    <header class="header">
        <div class="classic-container header-container">
            <div class="header-title-container">
                <p class="header-title">{{
                    useLanguageStore().language === Language.EN ? titleEn : titleFr }}</p>
            </div>
            <NavbarMobileComponent class="navbar-component" />
            <NavbarDesktopComponent class="navbar-desktop-component" />
        </div>
    </header>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.header {
    box-sizing: border-box;
    min-height: 140px;
    padding: $space-s;
    border-bottom: 5px double $primary;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.header-title-container {
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $primary;
    font-family: Lato, Raleway, Arial, Helvetica, sans-serif;

    .header-title {
        line-height: 1.5;
        margin: 0;
        font-weight: 800;
        font-size: $txt-xl;
    }

}

.navbar-component {
    flex: 1;

    @media (min-width: $bp-l) {
        display: none;
    }
}

.navbar-desktop-component {
    display: none;

    @media (min-width: $bp-l) {
        display: flex;
        flex: 5;
    }
}
</style>