<template>
    <div class="ctas-container">
        <SectionTitleParticle title="Want to know more ?" />
        <div class="ctas-container">
            <ButtonLinkParticle class="cta-button" path="/training" name="my training" color="primary" size="larger" />
            <ButtonLinkParticle class="cta-button" path="/commitments" name="my commitments" color="primary" size="larger" />
            <ButtonLinkParticle class="cta-button" path="/contact" name="contact me" color="secondary" size="larger" />
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';
    .ctas-title {
        font-size: $txt-m;
        color: $primary;
    }

    .ctas-container {
        padding-top: 1.5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: $bp-s) {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
        }
        .cta-button {
            margin: $space-xs $space-s $space-xs 0;
            @media (min-width: $bp-l) {
                margin: 0 $space-l 0 0;
            }
        }
    }
</style>