<script lang="ts" setup>
import {
    AdjustmentsHorizontalIcon,
    BarsArrowUpIcon,
    DocumentMagnifyingGlassIcon,
    EyeIcon,
    InboxStackIcon,
    LinkIcon,
    MagnifyingGlassIcon,
    PencilSquareIcon,
    ScaleIcon,
    ServerStackIcon,
    SpeakerWaveIcon
} from '@heroicons/vue/24/outline';
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
        path: '#sustainability',
        title: 'Sustainability'
    }
]
</script>

<template>
    <HeroParticle title="My Commitments" id="commitments-title" />
    <IndexParticle :anchors="anchors" />

    <section class="classic-section">
        <div class="classic-container">
            <!-- Quality -->
            <CommitmentCategoryComponent title="Quality" color="secondary" id="quality">

                <CommitmentCardComponent title="Norms & Good Practices"
                    description="Including W3C, WCAG and the French RGPD." color="secondary">
                    <InboxStackIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="Shorter is better"
                    description="Shorter code files are easier to maintain and more efficient for team work."
                    color="secondary">
                    <BarsArrowUpIcon class="ccc-icon" title="Icon for shorter code" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="Reviewing & Refactoring"
                    description="Refactoring code once it is functional is always a good idea to improve its readablity and maintainability. Reviewing code as a team enables to make sure of code's quality."
                    color="secondary">
                    <MagnifyingGlassIcon class="ccc-icon" title="Icon for reviewing and refactoring" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="Checks & Tests"
                    description="I usually test my work with Google's Lighthouse. I am also trained to write unit tests with Chai and run end-to-end tests."
                    color="secondary">
                    <AdjustmentsHorizontalIcon class="ccc-icon" title="Icon for checks and tests" />
                </CommitmentCardComponent>

                <BacklinkParticle anchor="#commitments-title" text="Back to top" color="secondary" />

            </CommitmentCategoryComponent>

            <!-- Accessibility -->
            <CommitmentCategoryComponent title="Accessibility" color="tertiary" id="accessibility">

                <CommitmentCardComponent title="... for sight difficulties"
                    description="I follow accessibility norms in terms of contrasts and elements sizes and am curious about learning Aria to improve my HTML."
                    color="tertiary">
                    <EyeIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="... for dys* disabilities"
                    description="I use simpler and more readable fonts (sans-serif fonts)." color="tertiary">
                    <PencilSquareIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="... for motor difficulties"
                    description="I take care that the website is readable with a keyboard and audio reader."
                    color="tertiary">
                    <SpeakerWaveIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="... and more generally"
                    description="I document myself on accessibility and use official WCAG checklists. When necessary I do additional checks (with Wave for example)."
                    color="tertiary">
                    <DocumentMagnifyingGlassIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <BacklinkParticle anchor="#commitments-title" text="Back to top" color="tertiary" />

            </CommitmentCategoryComponent>


            <!-- Eco-conception -->
            <CommitmentCategoryComponent title="Sustainability" color="neutral" id="sustainability">

                <CommitmentCardComponent title="Lighter code is better"
                    description="Lighter code costs less energy to load pages. It is more sustainable and improves user experience for those who have a bad internet connexion (mobile, countryside...)."
                    color="neutral">
                    <ScaleIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="Less dependencies is lighter"
                    description="Less dependencies make the code lighter. In addition this choice improves loading performances and maintanability for simple projects."
                    color="neutral">
                    <LinkIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="Green hosting matters"
                    description="Hosting has a huge impact on a website's carbon emissions. Hence when I have a choice I prefer local hosts that use at least partly renewable energies."
                    color="neutral">
                    <ServerStackIcon class="ccc-icon" title="Icon for norms and goot practices" />
                </CommitmentCardComponent>

                <CommitmentCardComponent title="The 100 rules"
                    description="When I have a doubt or some free time, I like to check this reference book: Ecoconception Web, les 115 bonnes pratiques (by Frederic Bordage)."
                    color="neutral">
                    <img class="ccc-icon __vertical" src="@images/commitments_sustainability.webp"
                        alt="Book cover of Ecoconception Web, les 115 bonnes pratiques" />
                </CommitmentCardComponent>

                <BacklinkParticle anchor="#commitments-title" text="Back to top" color="neutral" />

            </CommitmentCategoryComponent>

        </div>
    </section>
</template>