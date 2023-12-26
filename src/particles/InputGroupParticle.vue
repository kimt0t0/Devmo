<script setup lang="ts">
defineProps<{
    inputName: string;
    label: string;
    subtext?: string;
}>()
</script>

<template>
    <div class="input-group">
        <label class="ig-label" :for="inputName">{{ label }}</label>
        <p class="ig-subtext" v-if="subtext">{{ subtext }}</p>
        <slot></slot>
    </div>
</template>

<style lang="scss">
@use '@/styles/theme.scss' as *;

.input-group {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: $space-l 0 $space-xl;

    .ig-label {
        font-weight: 500;
        padding-bottom: $space-xs;
        white-space: pre-line;
    }

    .ig-subtext {
        font-size: $txt-xs;
        font-weight: 400;
        margin: 0 0 $space-m 0;
    }

    .ig-input {
        background-color: color($alert, 68);
        border: 2px solid color($dark, 50);
        border-radius: $radius-s;
        color: color($dark, 50);
        font-family: Raleway, Arial, Helvetica, sans-serif;
        font-size: $txt-s;
        font-weight: 500;

        &:focus {
            background-color: color($alert, 65);
            color: color($dark, 45);
        }
    }
}
</style>