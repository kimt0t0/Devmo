<template>
    <div class="gallery-item">
        <div class="frame">
            <div class="circle">
                <div class="sky">
                    <div class="pyramid"></div>
                    <div class="sun"></div>      
                </div>
                <div class="sand">
                    <div class="sand-shadow"></div>
                </div>
            </div>
        </div>
        <h4 class="title-fourth">(Made with CSS)</h4>
    </div>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .title-fourth {
        margin: $space-m 0;
    }

    .frame {
        position: relative;
        width: 200px;
        height: 200px;
        background-color: #272C34;
        border-radius: 0.35em;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: $bp-xs) {
            width: 400px;
            height: 400px;
        }

    }

    .circle {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        animation: fade-effect 5s infinite ease-in-out;
        
        @media (min-width: $bp-xs) {
            width: 180px;
            height: 180px;
        }

    }

    .sky {
        height: 75px;
        background-color: #73CBE6;
        position: relative;
        
        @media (min-width: $bp-xs) {
            height: 150px;
        }

    }

    .pyramid {
        width: 0;
        height: 0;
        content: '';
        border-left: 75px solid #FFFFFF;
        border-top: 65px solid #8A8B8E;
        transform: rotate(45deg);
        position: absolute;
        top: 75%;
        left: 15%;
        animation: pyramid-shadows 5s infinite ease-in-out;
        
        @media (min-width: $bp-xs) {
            border-left: 150px solid #FFFFFF;
            border-top: 130px solid #8A8B8E;
        }

    }

    .sun {
        width: 18px;
        height: 18px;
        border-radius: 100%;
        background-color: #FFEF00;
        position: absolute;
        top: 55%;
        left: -15%;
        animation: sun-move 5s infinite ease-in-out forwards;
        transform-origin: 380% 340%;
        
        @media (min-width: $bp-xs) {
            width: 35px;
            height: 35px;
        }
    }

    .sand {
        z-index: 2;
        height: 35px;
        background-color: #F0DE75;
        position: relative;
        
        @media (min-width: $bp-xs) {
            height: 70px;
        }
    }

    .sand-shadow {
        position: absolute;
        left: 16%;
        width: 72px;
        height: 25px;
        clip-path: polygon(0% 0%, 100% 15%, 90% 0%);
        background: #8C8E93;
        opacity: 0.5;
        animation: sand-shadow-move 5s infinite ease-in-out;
        
        @media (min-width: $bp-xs) {
            width: 145px;
            height: 50px;
        }

    }


    /* KEYFRAMES */
    @keyframes fade-effect {
        100% {
        opacity: 0;
        }
    }

    @keyframes sun-move {
        30% {
        transform: rotate(15deg);
        }
        80% {
        transform: rotate(130deg);
        }
    }

    @keyframes pyramid-shadows {
        90% {
        border-left: 150px solid #8A8B8E;
        border-top: 130px solid #FFFFFF;
        }
    }

    @keyframes sand-shadow-move {
        30% {
        clip-path: polygon(0% 0%, 100% 90%, 90% 0%);
        }
        
        55% {
        clip-path: polygon(0% 0%, 0% 50%, 90% 0%);
        }
        
        58% {
        clip-path: polygon(0% 0%, 0% 30%, 90% 0%);
        }
        
        61% {
        clip-path: polygon(0% 0%, 0% 15%, 90% 0%);
        }
        
        63% {
        clip-path: polygon(0% 0%, 0% 0%, 90% 0%);
        }
    }
</style>