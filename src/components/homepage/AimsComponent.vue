<script lang="ts" setup>
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
import { SparklesIcon, PaintBrushIcon, BuildingStorefrontIcon, StarIcon, MapPinIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <section class="classic-section aims-section">
        <div class="classic-container">
            <div class="aims-title-container">
                <SparklesIcon class="hero-title-icon" />
                <SectionTitleParticle
                    :title="useLanguageStore().language === Language.FR ? 'Ma mission idéale' : 'My Dream Job'" />
            </div>
            <div class="aims-container">
                <div class="aims-bloc">
                    <ol class="aims-list">
                        <li class="aim-item  __tertiary">
                            <PaintBrushIcon class="icon-classic __tertiary" />Graphic Interface - with customized and
                            responsive
                            styling
                        </li>
                        <li class="aim-item __alert">
                            <BuildingStorefrontIcon class="icon-classic __alert" />Small or Medium Businesses
                        </li>
                        <li class="aim-item __neutral">
                            <MapPinIcon class="icon-classic __neutral" />A Nantes ou 100% à distance
                        </li>
                        <li class="aim-item __secondary">
                            <StarIcon class="icon-classic __secondary" />Bonus: Has a link with the environment, arts,
                            sports,
                            music or minorities rights.
                        </li>
                    </ol>
                    <div class="aims-img-container">
                        <img src="@images/nantes_map.webp" alt="a map showing nantes city" class="aims-img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.aims-title-container {
    display: flex;
    align-items: center;
}

.aims-container {
    padding: $space-m 0;
    border-top: 1px solid color($dark, 50);
}

.aims-bloc {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: $bp-m) {
        flex-direction: row;
    }

    .aims-subbloc {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (min-width: $bp-m) {
            width: 50%;
        }
    }
}

.aims-img-container {
    display: flex;
    justify-content: center;

    @media (min-width: $bp-m) {
        width: 50%;
        justify-content: flex-start;
    }

    .aims-img {
        width: 100%;
        max-width: 240px;
        max-height: 350px;
        margin: $space-s 0;
        border: 1px solid color($neutral, 45);
        box-shadow: 2px 2px 3px color($primary, 45);
    }
}

.aims-subtitle {
    font-size: $txt-xs;
    font-weight: 200;
    font-style: oblique;
    margin: 0;
    color: $secondary;
}

.aims-list {
    list-style-type: none;
    padding: 0;

    @media (min-width: $bp-m) {
        width: 80%;
        margin: $space-xxl 0 $space-m;
    }

    &.__jobs {
        list-style-type: disc;
    }

    .aim-item {
        font-size: $txt-s;
        font-weight: 400;
        line-height: 1.2;
        white-space: pre-line;
        display: flex;
        align-items: center;
        margin: $space-m 0;

        &.__secondary {
            color: color($secondary, 35);
        }

        &.__tertiary {
            color: color($tertiary, 70);
        }

        &.__alert {
            color: color($alert, 30);
        }

        &.__neutral {
            color: color($neutral, 40);
        }
    }
}
</style>