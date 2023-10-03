<script lang="ts" setup>
defineProps<{
    routerlink?: boolean;
    path: string;
    name: string;
    color: string;
    size?: string;
}>();
</script>

<template>
    <RouterLink :to="path" :class="'buttonlink __' + color + ' __' + size" v-if="routerlink">
        <slot></slot>{{ name }}
    </RouterLink>
    <a :href="path" :name="name" :class="'buttonlink __' + color + ' __' + size" v-else>
        <slot></slot>{{ name }}
    </a>
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

    &.__neutral {
        border: 1px solid color($neutral, 25);
        color: color($neutral, 25);
        transition: all 200ms ease-in;

        &:hover,
        &:focus {
            background-color: color($neutral, 25);
            color: color($neutral, 65);

            >svg {
                color: color($neutral, 65);
            }
        }
    }

    &.__dark {
        border: 1px solid color($dark, 50);
        color: color($dark, 50);
        transition: all 200ms ease-in;

        &:hover,
        &:focus {
            background-color: color($dark, 50);
            color: $light;

            >svg {
                color: $light;
            }
        }
    }

    &.__primary {
        border: 1px solid color($primary, 40);
        color: color($primary, 40);
        transition: all 200ms ease-in;

        &:hover,
        &:focus {
            background-color: color($primary, 40);
            color: $light;

            >svg {
                color: $light;
            }
        }
    }

    &.__secondary {
        border: 1px solid color($secondary, 30);
        color: color($secondary, 30);
        transition: all 200ms ease-in;

        &:hover,
        &:focus {
            background-color: color($secondary, 30);
            color: color($secondary, 55);

            >svg {
                color: color($secondary, 55);
            }

        }
    }

    &.__tertiary {
        border: 1px solid color($tertiary, 70);
        color: color($tertiary, 70);
        transition: all 200ms ease-in;

        &:hover,
        &:focus {
            background-color: color($tertiary, 70);
            color: color($tertiary, 160);

            >svg {
                color: color($tertiary, 160);
            }

        }
    }

    &.__alert {
        border: 1px solid darken($alert, 35%);
        color: darken($alert, 35%);
        transition: all 200ms ease-in;

        &:hover,
        &:focus {
            background-color: darken($alert, 35%);
            color: $light;

            >svg {
                color: $light;
            }

        }
    }

    &.__danger {
        border: 1px solid color($danger, 55);
        color: color($danger, 55);
        transition: all 200ms ease-in;

        &:hover,
        &:focus {
            background-color: color($danger, 55);
            color: $light;

            >svg {
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
