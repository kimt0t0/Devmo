<script lang="ts" setup>
    import TrainingItemComponent from '@/components/training/TrainingItemComponent.vue';
</script>

<template>
    <HeroParticle title="My Training, Degrees and Experience" subtitle="If you want to knwo more about my studies and previous experience, this is the right place." />
    <!-- add illustration here -->
    <section class="classic-section">
        <div class="classic-container">
            <ol class="training-list">
                <TrainingItemComponent 
                title="Titre Concepteur Développeur d'Applications"
                subtitle="2022-2023, MyDigitalSchool Nantes" />
        
                <TrainingItemComponent
                title="TOEIC 20/20"
                subtitle="2022-2023, MyDigitalSchool Nantes" />

                <TrainingItemComponent
                title="ANSSI Cybersecurity MOOC"
                subtitle="2022-2023, MyDigitalSchool Nantes" />

                <TrainingItemComponent
                title="Front-End Web Developer"
                subtitle="2022-2023 Studio Floax (Vertou)" />
            </ol>
        </div>
    </section>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .training-list {
        list-style-type: none;
        background-color: $light;
        border: 1px solid transparent;
        border-radius: $radius-xs;
        padding: $space-s $space-xl;
    }
</style>