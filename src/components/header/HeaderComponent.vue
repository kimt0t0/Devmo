<script lang="ts" setup>
import NavbarMobileComponent from './NavbarMobileComponent.vue';
import NavbarDesktopComponent from './NavbarDesktopComponent.vue';

</script>

<template>
    <header class="header">
        <div class="classic-container header-container">
            <div class="header-title-container">
                <h1 class="header-title"><span class="__accent">K</span>im<span class="__accent __sec">D</span>ev</h1>
            </div>
            <NavbarMobileComponent class="navbar-component" />
            <NavbarDesktopComponent class="navbar-desktop-component" />
        </div>
    </header>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.header {
    position: fixed;
    z-index: 2;
    background-color: color($neutral, 60);
    width: 100%;
    box-sizing: border-box;
    min-height: 100px;
    padding: $space-xs;

    &::after {
        content: "";
        background-color: color($neutral, 45);
        width: 140%;
        height: 60px;
        border-radius: 0 0 50% 50%;
        position: absolute;
        top: 120px;
        left: -20%;
        box-shadow: 0 5px 8px color($dark, 70);

    }

    @media (max-width: $bp-xs) {
        padding: 0;
        border-bottom: 6px solid color($neutral, 45);
        box-shadow: 0 5px 8px color($dark, 70);

        &::after {
            display: none;
        }
    }
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
    font-family: Lato, Raleway, Arial, Helvetica, sans-serif;

    .header-title {
        color: color($dark, 50);
        line-height: 1.5;
        margin: 0;
        font-weight: 1000;
        font-size: $txt-l;

        .__accent {
            color: color($neutral, 35);
            border-left: 4px solid color($neutral, 35);
            border-bottom: 4px solid color($neutral, 35);
            padding-left: $space-s;
            margin-left: $space-xs;
            border-radius: $radius-xl;

            &.__sec {
                color: color($alert, 50);
                border-left: 4px solid color($alert, 50);
                border-bottom: 4px solid color($alert, 50);
            }
        }
    }

}

.navbar-component {
    flex: 1;

    @media (min-width: $bp-l) {
        display: none;
    }

    @media (max-width: $bp-xs) {
        margin-top: $space-m;
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