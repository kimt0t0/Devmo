<script lang="ts" setup>
import { ref } from 'vue';
import { EnvelopeIcon, CheckIcon } from '@heroicons/vue/24/outline';
import type { ContactForm } from '@/interfaces/ContactForm.interface';
import { useValidators } from '@/composables/formValidators';
import { useLanguageStore } from '@/stores/language';
import { Language } from '@/enums/Language';

const {
    validateFirstName,
    validateLastName,
    validateTopic,
    validateHoney
} = useValidators();

const isFormValid = ref<boolean>(false);
let devmail: string = 'kim.robert.dev44@gmail.com';

const formData = ref<ContactForm>({
    firstName: '',
    lastName: '',
    topic: '',
    honey: undefined
});

const validateFormData = (): void => {
    console.log("Démarrage de la validation:");
    let fname = validateFirstName(formData.value.firstName);
    let lname = validateLastName(formData.value.lastName);
    let topic = validateTopic(formData.value.topic);
    let honey = validateHoney(formData.value.honey);

    if (fname === true && lname === true && topic === true && honey === true) {
        isFormValid.value = true;
    } else isFormValid.value = false;
}
</script>

<template>
    <section class="classic-section contact-section">
        <div class="classic-container contact-container contact-form-container">
            <div class="separator-container">
                <div class="contact-separator"></div>
            </div>
            <!-- French form -->
            <form class="contact-form" v-if="useLanguageStore().language === Language.FR">

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="first-name">Prénom :</label>
                        <input type="text" v-model="formData.firstName" class="cf-input" id="first-name" name="first-name"
                            placeholder="Mathieu" />
                    </div>
                    <div class="cf-group">
                        <label class="cf-label" for="last-name">Nom :</label>
                        <input type="text" v-model="formData.lastName" class="cf-input" id="last-name" name="last-name"
                            placeholder="Nebra" />
                    </div>
                </div>

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="topic">Sujet :</label>
                        <input type="text" v-model="formData.topic" class="cf-input" id="topic" name="topic"
                            placeholder="Proposition de projet" />
                    </div>
                </div>

                <div class="cf-line __honey">
                    <div class="cf-group__honey">
                        <label class="cf-label__honey" for="honey">Pot de miel ?</label>
                        <input type="text" class="cf-input __honey" v-model="formData.honey" name="honey"
                            placeholder="Écrivez votre réponse ici" />
                    </div>
                </div>

                <div class="cf-button-container">
                    <ButtonParticle color="neutral" @click="validateFormData">
                        <CheckIcon class="cfb-icon" />
                        Valider le
                        formulaire
                    </ButtonParticle>
                    <a v-if="isFormValid" target="_blank" title="Send your email to the website's owner"
                        class="cf-buttonlink" :href="'mailto:' +
                            devmail +
                            '?subject=' +
                            formData.topic +
                            '%20---%20from%20' +
                            formData.lastName.toUpperCase() +
                            '%20' +
                            formData.firstName +
                            '&body=Write your message here'
                            ">
                        <EnvelopeIcon class="cfb-icon" />
                        Envoyer un e-mail
                    </a>
                </div>
            </form>

            <!-- English Form -->
            <form class="contact-form" v-else>

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="first-name">First Name :</label>
                        <input type="text" v-model="formData.firstName" class="cf-input" id="first-name" name="first-name"
                            placeholder="Mathieu" />
                    </div>
                    <div class="cf-group">
                        <label class="cf-label" for="last-name">Last Name :</label>
                        <input type="text" v-model="formData.lastName" class="cf-input" id="last-name" name="last-name"
                            placeholder="Nebra" />
                    </div>
                </div>

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="topic">Topic :</label>
                        <input type="text" v-model="formData.topic" class="cf-input" id="topic" name="topic"
                            placeholder="Job proposal" />
                    </div>
                </div>

                <div class="cf-line __honey">
                    <div class="cf-group__honey">
                        <label class="cf-label__honey" for="honey">Are you honey ?</label>
                        <input type="text" class="cf-input __honey" v-model="formData.honey" name="honey"
                            placeholder="Write your reply here" />
                    </div>
                </div>

                <div class="cf-button-container">
                    <ButtonParticle color="neutral" @click="validateFormData">
                        <CheckIcon class="cfb-icon" />
                        Check your form
                    </ButtonParticle>
                    <a v-if="isFormValid" target="_blank" title="Send your email to the website's owner"
                        class="cf-buttonlink" :href="'mailto:' +
                            devmail +
                            '?subject=' +
                            formData.topic +
                            '%20---%20from%20' +
                            formData.lastName.toUpperCase() +
                            '%20' +
                            formData.firstName +
                            '&body=Write your message here'
                            ">
                        <EnvelopeIcon class="cfb-icon" />
                        Send e-mail
                    </a>
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
@import '@/styles/theme.scss';

.contact-container {
    display: flex;
    justify-content: center;

    @media (max-width: $bp-m) {
        flex-direction: column;
    }
}

.contact-form-container {
    flex-direction: column;
    align-items: center;
    background-image: url('@images/pexels-sea-photo.webp');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
}

/* Separator */
.separator-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $txt-xxl;
    margin-bottom: $space-xxl;
}

.contact-separator {
    width: $txt-xxl;
    height: $txt-s;
    border-radius: 0 $radius-l 0 $radius-l;
    background-color: color($neutral, 25);
    box-shadow: 3px 3px 5px color($neutral, 25);
    position: relative;
    cursor: pointer;

    &:hover {
        animation: rollSeparator 800ms ease-in forwards;
    }
}

@keyframes rollSeparator {

    30% {
        height: $txt-xl;
        border-radius: $radius-l $radius-xxl $radius-l $radius-xxl;
        transform: rotate(98deg);
    }

    50% {
        height: $txt-xxl;
        border-radius: $radius-circle;
        transform: rotate(216deg);
        background-color: color($alert, 40);
        box-shadow: -3px -3px 5px color($alert, 35);
    }

    100% {
        border-radius: $radius-circle;
        transform: rotate(360deg);
        background-color: color($neutral, 25);
        border-radius: 0 $radius-l 0 $radius-l;
    }
}

/* Form */
.contact-form {
    box-sizing: border-box;
    width: 100%;
    max-width: 650px;
    border: 1px solid color($neutral, 15);
    border-radius: $radius-l;
    box-shadow: 0px 0px 5px color($neutral, 15);
    padding: $space-m $space-l;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: $space-xl;

    .cf-group {
        display: flex;
        flex-direction: column;
        margin: $space-m 0;

        .cf-label {
            font-weight: 500;
            color: color($neutral, 68);
        }

        .cf-input {
            margin: $space-s 0;
            padding: $space-s $space-m;
            font-size: $txt-s;
            border: 2px solid color($neutral, 15);
            border-radius: $radius-s;
            color: color($neutral, 15);
            background-color: color($neutral, 68);
        }

    }
}

.__honey {
    opacity: 0;
    height: 0;
}

.cf-button-container {
    margin: $space-m 0;
    display: flex;
    flex-direction: column;

    @media (min-width: $bp-s) {
        flex-direction: row;
        justify-content: center;
    }

    .cf-buttonlink {
        box-sizing: border-box;
        min-width: 100%;
        min-height: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: $space-l 0 0 0;
        padding: $space-xs $space-m;
        border: 2px solid color($alert, 45);
        border-radius: $radius-s;
        color: color($alert, 45);
        background-color: color($alert, 72);
        font-size: $txt-s;
        font-weight: 600;
        text-decoration: none;
        box-shadow: 2px 2px 3px color($primary, 25);
        transition: all 300ms ease-in;

        @media (min-width: $bp-s) {
            justify-content: flex-start;
            min-width: 60px;
            margin: 0 0 0 $space-l;
        }

        .cfb-icon {
            width: $txt-m;
            height: $txt-m;
            margin-right: $space-m;
            color: color($alert, 45);
            transition: all 300ms ease-in;
        }

        &:hover {
            color: color($alert, 70);
            background-color: color($alert, 45);
            box-shadow: 2px 2px 3px color($primary, 10);

            .cfb-icon {
                color: color($alert, 70);
                transform: translateY(-$space-xs) rotate(-35deg);
            }
        }
    }
}
</style>
