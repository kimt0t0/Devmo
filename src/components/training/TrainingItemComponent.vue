<script lang="ts" setup>
    import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/vue/24/outline';
    defineProps<{
        title: string;
        subtitle: string;
        color?: string;
        icon?: string;
    }>();
</script>

<template>
    <li :class="'training-item __' + color">
        <p :class="'ti-title __' + color">
            <AcademicCapIcon class="ti-icon" v-if="icon === 'degree' || !icon" />
            <BriefcaseIcon class="ti-icon" v-if="icon === 'job'" />
            <strong>{{ title }}</strong>
        </p>
        <p :class="'ti-subtitle __' + color">{{ subtitle }}</p>
    </li>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .training-item {
        margin: $space-m 0;

        .ti-title {
            display: flex;
            align-items: center;
            font-size: $txt-s;
            font-weight: 600;
            margin: 0;
            line-height: 1.5;

            .ti-icon {
                width: $txt-s;
                height: $txt-s;
                margin-right: $space-s;
            }
        }

        .ti-subtitle {
            font-size: $txt-xs;
            font-style: oblique;
            font-weight: 200;
            margin: 0;
        }
    }
</style>