<script lang="ts" setup>
    import { ref } from 'vue';
    import { Bars3Icon, EnvelopeIcon } from '@heroicons/vue/24/outline';

    const showNav = ref<boolean>(false);
    const toggleNav = (): void => {
        showNav.value = !showNav.value;
    }
</script>

<template>
    <div class="nav-container">
        <nav class="navbar">
            <div class="navmenu-container">
                <button type="button" class="nav-button __toggle" @click="toggleNav"><Bars3Icon class="nav-icon __toggle" /></button>
                <ol class="navmenu" v-if="showNav">
                    <li class="navitem">Menu de navigation</li>
                </ol>
            </div>
            <RouterLink to="/contact" class="nav-button __contact">
                <EnvelopeIcon class="nav-icon __user" />
            <BeakerIcon class="nav-icon" /></RouterLink>
        </nav>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .navbar {
        max-width: 240px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .navmenu-container {
        max-width: 120px;
        position: relative;
    }

    .nav-button {
        width: 60px;
        height: 60px;
        margin: $space-xs;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background-color: transparent;
        color: $primary;
        border-radius: $radius-s;
        border: 1px solid $primary;
        padding: $space-s;
        transition: all 200ms ease-in;

        .nav-icon {
            cursor: pointer;
            height: 1.5rem;
            width: auto;
            color: $primary;
        }

        &:hover, &:focus {
            background-color: $primary;
            .nav-icon {
                color: $light;
            }
        }
    }
    
</style>