<script lang="ts" setup>
    defineProps<{
        title: string;
        color?: string;
    }>();
</script>

<template>
    <div class="section-title-container">
        <h2 :class="'section-title __' + color">{{ title }}</h2>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .section-title {
        font-size: $txt-xl;
        font-weight: 600;
        color: $primary;
    }
</style>