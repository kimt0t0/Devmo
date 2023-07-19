<template>
    <footer class="footer">
        <div class="classic-container footer-container">
            <div class="footer-content-bloc">
                <p class="footer-txt"><strong>Made by Kim Robert &nbsp;</strong></p>
                <p class="footer-txt">With Vue 3, Pinia and Vite for the front-end application, HeroIcons as icons library and Sass for the style.</p>
            </div>
            <div class="footer-content-bloc">
                <p class="footer-txt __light">Contents and code are protected by French authors rights.</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';
    
    .footer {
        box-sizing: border-box;
        border-top: 5px double $primary;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: $space-s;
    }

    .footer-content-bloc {
        padding: $space-m 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .footer-txt {
        color: $primary;
        font-size: $txt-xs;
        text-align: center;
        font-weight: 400;
        line-height: 1.2;
        margin: 0;
        &.__light {
            font-size: 0.65rem;
            font-weight: 200;
            font-style: oblique;
        }
    }
</style>