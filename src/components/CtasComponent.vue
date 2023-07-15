<template>
    <section class="classic-section ctas-section">
        <SectionTitleParticle title="Get more about..." />
        <div class="ctas-container">
            <ButtonLinkParticle class="cta-button" path="/training" name="my training" color="primary" size="larger" />
            <ButtonLinkParticle class="cta-button" path="/commitments" name="my commitments" color="primary" size="larger" />
            <ButtonLinkParticle class="cta-button" path="/contact" name="contact me" color="secondary" size="larger" />
        </div>
    </section>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';
    .ctas-title {
        font-size: $txt-m;
        color: $primary;
    }

    .ctas-container {
        display: flex;
        flex-wrap: wrap;
        .cta-button {
            margin: $space-xs $space-s $space-xs 0;
            @media (min-width: $bp-l) {
                margin: 0 $space-l 0 0;
            }
        }
    }
</style>