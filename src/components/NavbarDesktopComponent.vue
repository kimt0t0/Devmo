<script lang="ts" setup>
    import type { navlink } from "@/interfaces/navlinks.interface";
    import { EnvelopeIcon } from '@heroicons/vue/24/outline';
    import { useNavLinksStore } from '@/stores/navlinks';

    const navlinks: navlink[] = useNavLinksStore().navlinks;
</script>

<template>
    <div class="nav-container-desktop">
        <nav class="navbar-desktop">
            <ol class="navmenu-desktop">
                <li class="navitem-desktop" v-for="(navlink, index) of navlinks" :key="index">
                    <RouterLink class="navlink-desktop" :to="navlink.path" :name="navlink.name">{{ navlink.name }}</RouterLink>
                </li>
            </ol>
            <RouterLink to="/contact" class="nav-button __contact">
                <EnvelopeIcon class="nav-icon __user" />
            </RouterLink>
        </nav>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .nav-container-desktop {
        width: 100%;
        justify-content: center;
    }

    .navbar-desktop {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navmenu-desktop {
        width: 100%;
        padding: 0;
        list-style-type: none;
        display: flex;

        .navitem-desktop {
            padding: 0 $space-m;
            margin: 0;
            transition: all 200ms ease-in;

            .navlink-desktop {
                color: $primary;
                font-weight: 600;
                &:hover, &:focus {
                    text-decoration: none;
                }
            }
        }
    }
</style>