<script lang="ts" setup>
    import { EyeIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <section class="classic-section aims-section">
        <div class="classic-container">
            <div class="aims-title-container">
                <EyeIcon class="hero-title-icon" />
                <SectionTitleParticle title="What am I looking for ?" />
            </div>
            <div class="aims-container">
                <h3 class="title-ter">Wanted Jobs:</h3>
                <p class="aims-subtitle">"En alternance"</p>
                <ol class="aims-list">
                    <li class="aim-item"><BriefcaseIcon class="icon-classic" />Full-stack web developer</li>
                    <li class="aim-item"><BriefcaseIcon class="icon-classic" />Front-end web developer</li>
                </ol>
            </div>
            <div class="aims-container">
                <h4 class="title-fourth">Aimed Degree:</h4>
                <p class="aims-txt"><AcademicCapIcon class="icon-classic" />Full-Stack Developer MBA at <a href='' target='' class='classic-link'>@MyDigitalSchool Nantes</a>.</p>
                <p class="aims-txt __lighter">(Or other equivalent degree)</p>
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
        border-top: 1px solid $primary;
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
        .aim-item {
            font-size: $txt-s;
            font-weight: 400;
            line-height: 1.2;
            display: flex;
            align-items: center;
        }
    }
</style>