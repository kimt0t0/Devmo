<script setup lang="ts">
defineProps<{
    inputName: string;
    label: string;
}>()
</script>

<template>
    <div class="radio-group">
        <slot></slot>
        <label class="radio-label" :for="inputName">{{ label }}</label>
    </div>
</template>

<style lang="scss">
@use '@/styles/theme.scss' as *;


.radio-group {
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: $space-xs 0;

    .radio-label {
        padding-left: $space-xs;
        font-weight: 600;
        font-size: $txt-xs;
    }

    input[type="radio"].radio-input {
        appearance: none;
        background-color: transparent;
        margin: 0;
        font: inherit;
        color: color($dark, 50);
        width: $txt-xs;
        height: $txt-xs;
        border: 3px solid color($dark, 50);
        border-radius: $radius-circle;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 300ms ease-in;
        cursor: pointer;

        &:checked::before {
            content: "";
            width: 70%;
            height: 70%;
            border-radius: $radius-circle;
            background-color: color($dark, 50);
        }
    }
}
</style>