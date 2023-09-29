<script lang="ts" setup>
import NavbarMobileComponent from './NavbarMobileComponent.vue';
import NavbarDesktopComponent from './NavbarDesktopComponent.vue';
</script>

<template>
    <header class="header">
        <div class="classic-container header-container">
            <div class="header-title-container">
                <h1 class="header-title">DEvMO</h1>
                <p class="header-subtitle">by kimro</p>
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

    .header-subtitle {
        line-height: 1;
        margin: 0;
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
        flex: 4;
    }
}</style>