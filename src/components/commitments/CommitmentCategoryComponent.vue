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
    &.__dark {
        color: color($dark, 50);
    }

    &.__neutral {
        color: color($neutral, 25);
    }

    &.__secondary {
        color: color($secondary, 30);
    }

    &.__tertiary {
        color: color($tertiary, 70);
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