<script lang="ts" setup>
    defineProps<{
        path: string;
        name: string;
        color: string;
        size?: string;
    }>();
</script>

<template>
    <a :href="path" :name="name" :class="'buttonlink __' + color + ' __' + size"><slot></slot>{{ name }}</a>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .buttonlink {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: $radius-s;
        text-transform: capitalize;

        /* Colors */

        &.__primary {
            border: 1px solid $primary;
            color: $primary;
            transition: all 200ms ease-in;

            &:hover, &:focus {
                background-color: $primary;
                color: $light;

                > svg {
                    color: $light;
                }
            }
        }

        &.__secondary {
            border: 1px solid $secondary;
            color: $secondary;
            transition: all 200ms ease-in;

            &:hover, &:focus {
                background-color: $secondary;
                color: $light;

                > svg {
                    color: $light;
                }
            }
        }

        /* Sizes */
        &.__small {
            width: fit-content;
            padding: $space-xs $space-s;
        }

        &.__medium {
            width: 200px;
            height: 60px;
        }

        &.__large {
            font-size: $txt-m;
            width: fit-content;
            padding: $space-s $space-m;
        }

        &.__larger {
            width: 100%;
            height: 250px;
            font-size: $txt-l;
            @media (min-width: $bp-s) {
                width: 250px;
            }
        }
    }
</style>