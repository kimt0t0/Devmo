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

                <LineSeparatorParticle />

                <TrainingItemComponent
                title="English Teacher (Middle School)"
                subtitle="2018-2021 - Versailles' area"
                icon="job" />

                <TrainingItemComponent
                title="English Capes"
                subtitle="2018 - As an external candidate" />

                <TrainingItemComponent
                title="High School Monitor"
                subtitle="2017-2018 - Coëtlogon High School (Rennes)"
                icon="job" />

                <TrainingItemComponent
                title="Master Degree in English (LLCE) - Good"
                subtitle="2017 - Paris 8 University" />

                <TrainingItemComponent
                title="Bachelor Degree in English (LLCE)"
                subtitle="2015 - Rennes 2 University" />

                <TrainingItemComponent
                title="Literary Preparatory Class"
                subtitle="2011-2013 - Kerichen (Brest)" />

                <TrainingItemComponent
                title="Scientific Baccalaureate - Good"
                subtitle="2011 - Jacques Cartier High School (St Malo)" />
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