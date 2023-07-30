<template>
    <div class="gallery-item">
        <div class="rd-frame">
            <!-- R's body -->
            <div class="r-body pink">
                <div class="r-body-cover pink"></div>
                <!-- ears -->
                <div class="ear-border earb-left"></div>
                <div class="ear-border earb-right"></div>
                <div class="ear-inside eari-left"></div>
                <div class="ear-inside eari-right"></div>
                <!-- hair -->
                <div class="hair-top pink"></div>
                <div class="hair-bottom pink"></div>
                <!-- eyes -->
                <div class="eye-border eb-left white"></div>
                <div class="eye-border eb-right white"></div>
                <div class="eye-inside ei-left white"></div>
                <div class="eye-inside ei-right white"></div>
                <div class="eye-pupil ep-left white"></div>
                <div class="eye-pupil ep-right white"></div>
                <!-- mouth -->
                <div class="mouth red"></div>
                <!-- arms -->
                <div class="arm-left pink"></div>
                <div class="arm-right pink"></div>
                <!-- feet -->
                <div class="foot-left pink"></div>
                <div class="foot-right pink"></div>
                <!-- floor shadow -->
                <div class="shadow"></div>
            </div>
        </div>
        <h4 class="title-fourth __rondoudou">(Made with CSS)</h4>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .title-fourth.__rondoudou {
        margin: $space-xl 0;
    }

    .rd-frame {
        box-sizing: border-box;
        width: 200px;
        height: 200px;

        @media (min-width: $bp-xs) {
            width: 290px;
            height: 320px;
        }
    }

        /* GÉNÉRAL */
    /* Colors */
    :root {
    --white: #FFFFFF;
    --black: #000000;
    --yellow: #DDCA7E;
    --pink: #FBDCE2;
    --pink-darker: #F0BAD2;
    --red: #F25556;
    --blue-light: #78E0EF;
    --blue-grey: #3F757F;
    --blue-darker: #092C34;
    }

    .pink {
        background-color: var(--pink);
    }

    .white {
        background-color: var(--white);
    }

    .red {
        background-color: var(--red);
    }

    .yellow {
        background-color: var(--yellow);
    }

    /* Display */

    .poke-circle {
        box-sizing: border-box;
        width: 12rem;
        height: 12rem;
        border-radius: 100%;
        box-shadow: 0 0 1rem 2rem var(--yellow);
        background-color: var(--yellow);
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: $bp-xs) {
            width: 18rem;
            height: 18rem;
        }
    }



    /* RONDOUDOU CHARACTER */

    /* Body */
    .r-body {
        z-index: 2;
        box-sizing: border-box;
        width: 10rem;
        height: 10rem;
        border-radius: 100%;
        position: relative;

        @media (min-width: $bp-xs) {
            width: 15rem;
            height: 15rem;
        }
    }

    .r-body-cover {
        z-index: 3;
        box-sizing: border-box;
        width: 10rem;
        height: 10rem;
        border-radius: 100%;
        box-shadow: 1rem -1.5rem 0.5rem var(--pink-darker) inset;
        position: absolute;

        @media (min-width: $bp-xs) {
            width: 15rem;
            height: 15rem;
        }
    }

    /* Ears */
    /* (borders) */
    .ear-border {
        z-index: 1;
        content:'';
        box-sizing: border-box;
        width: 0;
        height: 0;
        border: var(--pink) solid;
        border-width: 3.5rem 3rem 0 0;
        position: absolute;
    }

    .earb-left {
        top: 0.35rem;
        left: 0.65rem;
        transform: rotate(6deg);

        @media (min-width: $bp-xs) {
            top: 0.5rem;
            left: 1rem;
        }

    }

    .earb-right {
        top: 0.53rem;
        right: 0;
        border-width: 5rem 5rem 0 0;
        transform: rotate(2deg);
        
        @media (min-width: $bp-xs) {
            top: 0.8rem;
            right: 0em;
        }
    }

    /* (inside) */
    .ear-inside{
        z-index: 1;
        width: 0;
        height: 0;
        border: var(--black) solid;
        border-width: 3rem 2.5rem 0 0;
        position: absolute;
    }

    .eari-left {
        top: 0.8rem;
        left: 1rem;
        transform: rotate(6deg);

        @media (min-width: $bp-xs) {
            top: 1.2rem;
            left: 1.5rem;
        }

    }

    .eari-right {
        top: 1rem;
        right: 0.33em;
        border-width: 4rem 4rem 0 0;
        transform: rotate(2deg);

        @media (min-width: $bp-xs) {
            top: 1.5rem;
            right: 0.5em;
        }

    }

    /* Hair */
    .hair-top {
        z-index: 6;
        width: 2.5rem;
        height: 3.4rem;
        border-radius: 100%;
        border-left: 1px solid  var(--pink-darker);
        box-shadow: 0.5rem 0rem 0.5rem var(--pink-darker);
        position: absolute;
        top: -0.34rem;
        left: 2.85rem;

        @media (min-width: $bp-xs) {
            width: 3.8rem;
            height: 5rem;
        }
    }

    .hair-bottom { //rendu ici, enlever 1/3 sur width height et positions en rem
        z-index: 5;
        border-left: 1px solid var(--pink-darker);
        border-bottom: 1px solid var(--pink-darker);
        width: 2rem;
        height: 1.85rem;
        border-radius: 100% 5% 100% 100%;
        transform: rotate(20deg);
        box-shadow: 0.5rem 0.15rem 0.25rem var(--pink-darker);
        position: absolute;
        top: 2.15rem;
        left: 3.35rem;

        @media (min-width: $bp-xs) {
            width: 3rem;
            height: 2.8rem;
            top: 3.25rem;
            left: 5rem;
        }
    }

    /* Eyes */
    .eye-border {
        z-index: 4;
        box-sizing: border-box;
        width: 2.65em;
        height: 2.65rem;
        border-radius: 100%;
        box-shadow: 0.05rem 0.1rem 0.5rem rgba(0, 0, 0, 0.4) inset;
        position: absolute;

        @media (min-width: $bp-xs) {
            width: 4em;
            height: 4rem;
        }
    }

    .eb-left {
        top: 3.15rem;
        left: 1rem;

        @media (min-width: $bp-xs) {
            top: 4.75rem;
            left: 1.5rem;
        }

    }

    .eb-right {
        width: 2.75rem;
        height: 2.75rem;
        top: 3.1rem;
        right: 1.5rem;

        @media (min-width: $bp-xs) {
            width: 4.15rem;
            height: 4.15rem;
            top: 4.65rem;
            right: 2.25rem;
        }
    }

    .eye-inside {
        z-index: 5;
        width: 2.35rem;
        height: 2.35rem;
        border-radius: 100%;
        background: linear-gradient(125deg, #092C34 35%, #78E0EF);
        position: absolute;

        @media (min-width: $bp-xs) {
            width: 3.5rem;
            height: 3.5rem;
        }
    }

    .ei-left {
        top: 3.15rem;
        left: 1.08rem;

        @media (min-width: $bp-xs) {
            top: 4.75rem;
            left: 1.62rem;
        }

    }

    .ei-right {
        top: 3.15rem;
        right: 1.83rem;

        @media (min-width: $bp-xs) {
            top: 4.70rem;
            right: 2.75rem;
        }

    }

    .eye-pupil {
        z-index: 5;
        width: 0.66rem;
        height: 0.66rem;
        border-radius: 100%;
        border: 1px solid var(--blue-darker);
        position: absolute;
        top: 3.35rem;

        @media (min-width: $bp-xs) {
            width: 1rem;
            height: 1rem;
            top: 5rem;
        }
    }

    .ep-left {
        left: 1.5rem;
        
        @media (min-width: $bp-xs) {
            left: 2.25rem;
        }

    }

    .ep-right {
        right: 3rem;

        @media (min-width: $bp-xs) {
            right: 4.5rem;
        }

    }

    /* Mouth */
    .mouth {
        z-index: 5;
        box-sizing: border-box;
        width: 1.5rem;
        height: 1.67rem;
        border-radius: 0.25rem 0.25rem 3rem 0.5rem;
        box-shadow: 0.25rem 0.75rem 0.5rem rgba(0, 0, 0, 0.8) inset;
        transform: rotate(-3deg);
        position: absolute;
        bottom: 2.17rem;
        left: 3.83rem;

        @media (min-width: $bp-xs) {
            width: 2.25rem;
            height: 2.5rem;
            bottom: 3.25rem;
            left: 5.75rem;
        }

    }


    /* Arms */
    .arm-left {
        z-index: 2;
        width: 1.85rem;
        height: 1.5rem;
        border-radius: 0.5rem 0rem 0rem 3.5rem;
        box-shadow: 0.05rem -0.5rem 0.25rem var(--pink-darker) inset;
        transform: rotate(18deg);
        position: absolute;
        top: 4rem;
        left: -1.33rem;

        @media (min-width: $bp-xs) {
            width: 3.5rem;
            height: 2.25rem;
            top: 6rem;
            left: -2rem;
        }
    }

    .arm-right {
        z-index: 3;
        width: 1.85rem;
        height: 1.67rem;
        border-radius: 0rem 0.5rem 3.5rem 0rem;
        box-shadow: -0.25rem -0.25rem 0.35rem var(--pink-darker) inset;
        transform: rotate(-16deg);
        position: absolute;
        bottom: 2.67rem;
        right: -1rem;

        @media (min-width: $bp-xs) {
            width: 3.5rem;
            height: 2.5rem;
            bottom: 4rem;
            right: -1.90rem;
        }

    }

    /* Feet */
    .foot-left {
        z-index: 6;
        width: 3rem;
        height: 1.83rem;
        border-radius: 50%;
        box-shadow: -0.75rem 0.5rem 0.25rem var(--pink-darker) inset;
        position: absolute;
        bottom: 1.25rem;
        transform: rotate(48deg);

        @media (min-width: $bp-xs) {
            width: 4.5rem;
            height: 2.75rem;
        }

    }

    .foot-right {
        z-index: 2;
        width: 3rem;
        height: 1.83rem;
        border-radius: 50%;
        box-shadow: -0.75rem 0.5rem 0.25rem var(--pink-darker) inset;
        position: absolute;
        bottom: 0.10rem;
        right: 1.33rem;
        transform: rotate(75deg);

        @media (min-width: $bp-xs) {
            width: 4.5rem;
            height: 2.75rem;
            bottom: 0.15rem;
            right: 2rem;
        }

    }

    /* SHADOW */
    .shadow {
        box-sizing: border-box;
        width: 4rem;
        height: 1rem;
        border-radius: 50%;
        background-color: var(--blue-grey);
        position: absolute;
        bottom: -1.75rem;
        left: 6rem;
        opacity: 0.6;
        
        @media (min-width: $bp-xs) {
            bottom: -2.25rem;
            left: 10rem;
        }

    }

</style>