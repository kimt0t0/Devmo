<script lang="ts" setup>
    import CtasComponent from '@/components/CtasComponent.vue';
    import { AcademicCapIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <section class="classic-section skills-section">
        <div class="classic-container">
            <div class="skills-title-container">
                <AcademicCapIcon class="hero-title-icon" /><SectionTitleParticle title="My Skills" />
            </div>
            <div class="skills-container">
                <article class="ability-box __dev">
                    <h4 class="ability-title __dev">Development</h4>
                    <p class="ability-item __dev __smaller __1">HTML</p>
                    <p class="ability-item __dev __smaller __2">CSS & Scss</p>
                    <p class="ability-item __dev __smaller __3">JS</p>
                    <p class="ability-item __dev __main __4">TS</p>
                    <p class="ability-item __dev __main __5">Vue 3</p>
                    <p class="ability-item __dev __smaller __6">React</p>
                    <p class="ability-item __dev __smaller __7">Angular</p>
                    <p class="ability-item __dev __main __8">Mongo</p>
                    <p class="ability-item __dev __smaller __9">MySql</p>
                    <p class="ability-item __dev __smaller __10">Node & Express</p>
                    <p class="ability-item __dev __main __11">Nest.js</p>
                </article>
                <article class="ability-box __coworking">
                    <h4 class="ability-title __coworking">Coworking and Organizing</h4>
                    <p class="ability-item __coworking __smaller __12">Git</p>
                    <p class="ability-item __coworking __main __13">GitHub</p>
                    <p class="ability-item __coworking __smaller __14">GitLab</p>
                    <p class="ability-item __coworking __main __15">Figma</p>
                    <p class="ability-item __coworking __smaller __16">Slack</p>
                    <p class="ability-item __coworking __main __17">Notion</p>
                    <p class="ability-item __coworking __main __18">Asana</p>
                    <p class="ability-item __coworking __main __19">TOEIC 20/20</p>
                </article>
            </div>
            <CtasComponent />
        </div>
    </section>
</template>

<style lang="scss">
    @import '@/styles/theme.scss';

    .skills-title-container {
        display: flex;
        align-items: center;
    }
    .skills-container {
        padding: $space-xxl 0;
        border: 1px solid transparent;
        border-radius: $radius-xs;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: $space-xxxl;
    }

    .ability-box {
        box-sizing: border-box;
        width: 100%;
        min-width: 250px;
        max-width: 500px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .ability-title {
        box-sizing: border-box;
        color: $light;
        width: 160px;
        height: 160px;
        border-radius: $radius-circle;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: $txt-m;
        &.__dev {
            background-color: $primary;
        }
        &.__coworking {
            background-color: $secondary;
        }
    }

    .ability-item {
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: $radius-circle;
        color: lighten($light, 2%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;
        position: absolute;
        
        &.__dev {
            background-color: $primary;
        }

        &.__coworking {
            background-color: $secondary;
        }

        &.__main {
            width: 80px;
            height: 80px;
            font-size: $txt-s;
        }

        &.__smaller {
            width: 60px;
            height: 60px;
            font-size: $txt-xs;
        }

        &.__1 {
            top: 18%;
            right: 0;
        }

        &.__2 {
            font-size: 14px;
            top: 4%;
            right: 26%;
        }

        &.__3 {
            top: 8%;
            left: 20%;
        }

        &.__4 {
            top: 20%;
            left: -2%;
        }

        &.__5 {
            bottom: 24%;
            left: 0;
        }

        &.__6 {
            bottom: 12%;
            left: 18%;
        }

        &.__7 {
            font-size: 14px;
            bottom: 8%;
            left: -2%;
        }

        &.__8 {
            bottom: 25%;
            right: 0;
        }

        &.__9 {
            bottom: 10%;
            right: 11%;
        }

        &.__10 {
            font-size: 14px;
            bottom: -6%;
            right: 23%;
        }

        &.__11 {
            bottom: 2%;
        }

        &.__12 {
            top: -2%;
            left: 34%;
        }

        &.__13 {
            top: 8%;
            left: 14%;
        }

        &.__14 {
            top: -6%;
            left: 8%;
        }

        &.__15 {
            top: 12%;
            right: 0;
        }

        &.__16 {
            right: -2%;
            bottom: 35%;
        }

        &.__17 {
            left: -3%;
            bottom: 30%;
        }

        &.__18 {
            left: 10%;
            bottom: 9%;
        }

        &.__19 {
            bottom: 0;
            right: 26%;
        }
    }
</style>