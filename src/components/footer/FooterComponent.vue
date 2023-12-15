<script lang="ts" setup>
import { useLegalsStore } from '@/stores/legals';
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';
</script>

<template>
    <footer class="footer">
        <!-- French version -->
        <div class="classic-container footer-container" v-if="useLanguageStore().language === Language.FR">
            <p class="footer-txt __bold">Réalisé par Kim Robert</p>
            <div class="footer-actions">
                <button class="footer-action" type="button" @click="useLegalsStore().toggleLegals">Mentions légales</button>
            </div>
            <p class="footer-txt __light">Code et contenus protégés par le droit d'auteur.</p>
        </div>
        <!-- English version -->
        <div class="classic-container footer-container" v-else>
            <p class="footer-txt __bold">Made by Kim Robert</p>
            <div class="footer-actions">
                <button class="footer-action" type="button" @click="useLegalsStore().toggleLegals">Legal Notices
                    (Fr)</button>
            </div>
            <p class="footer-txt __light">Code and contents are protected by French authors rights laws.</p>
        </div>
    </footer>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.footer {
    box-sizing: border-box;
    border-top: 1px solid color($dark, 80);
    box-shadow: -5px 0 5px 5px color($dark, 80);
    background-color: color($neutral, 55);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $space-s;
}

.footer-txt {
    color: color($dark, 50);
    font-size: $txt-xs;
    text-align: center;
    font-weight: 500;
    line-height: 1.2;

    &.__bold {
        font-weight: 600;
    }

    &.__light {
        font-weight: 400;
    }
}

.footer-actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: color($danger, 50);
}

.footer-action {
    border: 1px solid transparent;
    background-color: transparent;
    font-size: $txt-xs;
    text-decoration: none;
    color: color($danger, 50);
    font-weight: 400;
    padding: $space-s $space-m;
    margin: $space-s 0 $space-m;
    border-bottom: 1px solid color($danger, 50);
    cursor: pointer;
    transition: all 300ms ease-in;

    &:hover {
        background-color: color($danger, 50);
        color: color($neutral, 70);
    }
}
</style>