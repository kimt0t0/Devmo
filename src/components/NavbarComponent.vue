<script lang="ts" setup>
    import { ref } from 'vue';

    const showNav = ref<boolean>(false);
    const toggleNav = (): void => {
        showNav.value = !showNav.value;
    }
</script>

<template>
    <div class="nav-container">
        <nav class="navbar">
            <div class="navmenu-container">
                <button type="button" class="nav-button __toggle" @click="toggleNav">*</button>
                <ol class="navmenu" v-if="showNav">
                    <li class="navitem">Menu de navigation</li>
                </ol>
            </div>
            <RouterLink to="/contact" class="nav-button __contact">¤</RouterLink>
        </nav>
    </div>
</template>