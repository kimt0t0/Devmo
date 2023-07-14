<script lang="ts" setup>
    import NavbarComponent from './NavbarComponent.vue';
</script>

<template>
    <header class="header">
        <div class="classic-container header-container">
            <div class="header-title-container">
                <h1 class="header-title">DEvMO</h1>
                <p class="header-subtitle">by kimro</p>
            </div>
            <NavbarComponent class="navbar-component" /> 
        </div>
    </header>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .header {
        box-sizing: border-box;
        max-height: 140px;
        padding: $space-s;
        border-bottom: 4px double $primary;
    }

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .header-title-container {
        display: flex;
        flex: 3;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $primary;
        .header-title {
            line-height: 1.5;
            margin: 0;
            font-weight: 800;
        }
        .header-subtitle {
            line-height: 1;
            margin: 0;
        }
    }

    .navbar-component {
        flex: 1;
    }
</style>