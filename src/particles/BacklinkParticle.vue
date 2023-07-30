<script lang="ts" setup>
    import { ArrowUpIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline';
    defineProps<{
        anchor: string;
        title: string;
        text: string;
        color?: string;
    }>();
</script>

<template>
    <div class="backlinks-group">
        <ButtonLinkParticle class="backlink" path="/" name="Go back to Home Page" :color="color ? color : 'secondary'" size="small">
            <ArrowLeftIcon :class="'backlink-icon __' + color" />
        </ButtonLinkParticle>
        <ButtonLinkParticle class="backlink" :path="anchor" :name="text" :color="color ? color : 'secondary'" size="small">
            <ArrowUpIcon :class="'backlink-icon __' + color" />
        </ButtonLinkParticle>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .backlinks-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: $space-xl 0;

        .backlink {
            margin: $space-s 0;
        }

        .backlink-icon {
                color: $secondary;
                width: $txt-m;
                height: $txt-m;
                margin-right: $space-s;

                &.__alert {
                    color: darken($alert, 35%);
                }

                &.__danger {
                    color: darken($danger, 30%);
                }

                &.__primary {
                    color: $primary;
                }
            }
    }
</style>