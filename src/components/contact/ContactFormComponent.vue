<script lang="ts" setup>
import { ref } from 'vue';
import { EnvelopeIcon } from '@heroicons/vue/24/outline';
import type { ContactForm } from '@/interfaces/ContactForm.interface';
import { useValidators } from '@/composables/formValidators';

const {
    validateFirstName,
    validateLastName,
    validateTopic,
    validateMessage,
    validateHoney
} = useValidators();

const isFormValid = ref<boolean>(false);
let devmail: string = 'kimrobdev44@gmail.com';

const formData = ref<ContactForm>({
    firstName: '',
    lastName: '',
    topic: '',
    message: '',
    honey: undefined
});

const validateFormData = ():void => {
    let fname = validateFirstName(formData.value.firstName);
    let lname = validateLastName(formData.value.lastName);
    let topic = validateTopic(formData.value.topic);
    let message = validateMessage(formData.value.message);
    let honey = validateHoney(formData.value.honey);

    if (fname === true && lname === true && topic === true && message === true && honey === true) {
         isFormValid.value = true;
    } else isFormValid.value = false;
}
</script>

<template>
    <section class="classic-section contact-section">
        <div class="classic-container contact-container">
            <form class="contact-form">

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="first-name">First Name :</label>
                        <input
                            type="text"
                            v-model="formData.firstName"
                            class="cf-input"
                            id="first-name"
                            name="first-name"
                            placeholder="Mathieu"
                        />
                    </div>
                    <div class="cf-group">
                        <label class="cf-label" for="last-name">Last Name :</label>
                        <input
                            type="text"
                            v-model="formData.lastName"
                            class="cf-input"
                            id="last-name"
                            name="last-name"
                            placeholder="Nebra"
                        />
                    </div>
                </div>

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="topic">Topic :</label>
                        <input
                            type="text"
                            v-model="formData.topic"
                            class="cf-input"
                            id="topic"
                            name="topic"
                            placeholder="Job proposal"
                        />
                    </div>
                </div>

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="message">Message :</label>
                        <textarea
                            class="cf-textarea"
                            v-model="formData.message"
                            placeholder="Write your message here"
                        ></textarea>
                    </div>
                </div>

                <div class="cf-line __honey">
                    <div class="cf-group__honey">
                        <label class="cf-label__honey" for="honey">Are you honey ?</label>
                        <input
                            type="text"
                            class="cf-input __honey"
                            v-model="formData.honey"
                            name="honey"
                            placeholder="Write your reply here"
                        />
                    </div>
                </div>

                <div class="cf-button-container" v-if="!formData.honey">
                    <a
                        :href="
                            'mailto:' +
                            devmail +
                            '?subject=' +
                            formData.topic +
                            '%20---%20from%20' +
                            formData.lastName.toUpperCase() +
                            '%20' +
                            formData.firstName +
                            '&body=' +
                            formData.message
                        "
                        target="_blank"
                        title="Send your email to the website's owner"
                        class="cf-buttonlink"
                    >
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
    }

    .contact-form {
        box-sizing: border-box;
        width: 100%;
        max-width: 800px;
        border: 2px solid $primary;
        border-radius: $radius-s;
        background-color: $light;
        padding: $space-m $space-s;

        .cf-group {
            display: flex;
            flex-direction: column;
            margin: $space-m 0;
            .cf-input, .cf-textarea {
                margin: $space-s 0;
                padding: $space-xs $space-s;
                font-size: $txt-s;
                border: 1px solid lighten($primary, 10%);
                border-radius: $radius-xs;
                color: lighten($primary, 15%);
            }
            .cf-textarea {
                min-height: 200px;
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
        justify-content: center;

        .cf-buttonlink {
            box-sizing: border-box;
            width: 200px;
            min-height: 60px;
            padding: $space-xs $space-s;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            border: 1px solid $secondary;
            border-radius: $radius-xs;
            color: $secondary;
            font-size: $txt-s;
            text-decoration: none;
            transition: all 200ms ease-in;
            .cfb-icon {
                width: $txt-s;
                height: $txt-s;
                color: $secondary;
                margin-right: $space-m;
                transition: all 200ms ease-in;
            }
            &:hover, &:focus {
                background-color: $secondary;
                color: $light;
                .cfb-icon {
                    color: $light;
                }
            }
        }
    }

</style>
