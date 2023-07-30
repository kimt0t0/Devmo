<script lang="ts" setup>
    import { AdjustmentsHorizontalIcon, BarsArrowUpIcon, InboxStackIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
    import CommitmentCategoryComponent from '@/components/commitments/CommitmentCategoryComponent.vue';
    import CommitmentCardComponent from '@/components/commitments/CommitmentCardComponent.vue';

    const anchors = [
    {
        path: '#quality',
        title: 'Quality'
    },
    {
        path: '#accessibility',
        title: 'Accessibility'
    },
    {
        path: '#ecoconception',
        title: 'Eco-conception'
    }
]
</script>

<template>
    <HeroParticle title="Commitments" subtitle="as a web developer" id="commitments-title" />
    <IndexParticle :anchors="anchors" />

    <section class="classic-section">
        <div class="classic-container">
            <!-- Quality -->
            <CommitmentCategoryComponent title="Quality" color="alert" id="quality">

                <CommitmentCardComponent 
                title="Norms & Good Practices"
                description="Including W3C, WCAG and the French RGPD."
                color="alert">
                    <InboxStackIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <CommitmentCardComponent 
                title="Shorter is better" 
                description="Shorter code files are easier to maintain and more efficient for team work."
                color="alert">
                    <BarsArrowUpIcon class="ccc-icon" title="Icon for shorter code" />
                </CommitmentCardComponent>

                <CommitmentCardComponent 
                    title="Reviewing & Refactoring"
                    description="Refactoring code once it is functional is always a good idea to improve its readablity and maintainability. Reviewing code as a team enables to make sure of code's quality."
                    color="alert" >
                    <MagnifyingGlassIcon class="ccc-icon" title="Icon for reviewing and refactoring" />
                </CommitmentCardComponent>

                <CommitmentCardComponent
                title="Checks & Tests"
                description="I usually test my work with Google's Lighthouse. I am also trained to write unit tests with Chai and run end-to-end tests."
                color="alert">
                    <AdjustmentsHorizontalIcon class="ccc-icon" title="Icon for checks and tests" />
                </CommitmentCardComponent>

                 <BacklinkParticle anchor="#commitments-title" title="Go back to top of page" text="Go back to page title" color="alert" />
            
            </CommitmentCategoryComponent>

            <!-- Accessibility -->
            <CommitmentCategoryComponent title="Accessibility" color="secondary" id="accessibility"></CommitmentCategoryComponent>
            <!-- Eco-conception -->
            <CommitmentCategoryComponent title="Eco-conception" id="ecoconception"></CommitmentCategoryComponent>

        </div>
    </section>
</template>