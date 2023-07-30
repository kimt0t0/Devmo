<script lang="ts" setup>
    defineProps<{
        title: string;
        color?: string;
    }>();
</script>

<template>
    <div class="commitment-category">
        <h3 :class="'title-ter __' + color">{{ title }}</h3>
        <ol class="commitments-list">
            <slot></slot>
        </ol>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .title-ter {
        &.__alert {
            color: darken($alert, 35%);
        }
        &.__danger {
            color: darken($danger, 30%);
        }
        &.__secondary {
            color: darken($secondary, 10%);
        }
    }

    .commitments-list {
        padding: 0;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>