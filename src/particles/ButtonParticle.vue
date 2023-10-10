<script lang="ts" setup>
defineProps<{
    color?: string;
    size?: string;
}>();
</script>

<template>
    <button type="button" :class="'button-particle __' + color + ' __' + size">
        <slot></slot>
    </button>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.button-particle {
    min-width: 60px;
    min-height: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: $space-xs $space-m;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    font-size: $txt-s;
    font-weight: 600;
    background-color: transparent;
    color: color($danger, 50);
    border: 1px solid color($danger, 50);
    border-radius: $radius-s;
    box-shadow: 2px 2px 3px color($primary, 45);
    transition: all 300ms ease-in;
    cursor: pointer;

    >svg {
        width: $txt-m;
        height: $txt-m;
        margin-right: $space-s;
        transition: all 450ms ease-in;
    }

    @media (min-width: $bp-s) {
        justify-content: flex-start;
    }

    &:hover {
        color: color($danger, 85);
        background-color: color($danger, 50);
        box-shadow: 2px 2px 3px color($primary, 20);

        >svg {
            transform: rotate(-360deg);
        }
    }

    &.__neutral {
        color: color($neutral, 30);
        background-color: color($neutral, 68);
        border-color: color($neutral, 30);
        box-shadow: 2px 2px 2px color($primary, 20);

        &:hover {
            color: color($neutral, 65);
            background-color: color($neutral, 25);
            border-color: color($neutral, 25);
            box-shadow: 2px 2px 2px color($primary, 15);
        }
    }

}
</style>