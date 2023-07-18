<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { ContactForm } from '@/interfaces/ContactForm.interface';
import { useValidators } from '@/composables/formValidators';

const {
    validateFirstName,
    validateLastName,
    validateEmail,
    validateTopic,
    validateMessage,
    validateHoney
} = useValidators();

const isFormValid = ref<boolean>(false);
let devmail: string = 'kimrobdev44@gmail.com';

const formData = ref<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: '',
    honey: undefined
});

const validateFormData = ():void => {
    let fname = validateFirstName(formData.value.firstName);
    let lname = validateLastName(formData.value.lastName);
    let email = validateEmail(formData.value.email);
    let topic = validateTopic(formData.value.topic);
    let message = validateMessage(formData.value.message);
    let honey = validateHoney(formData.value.honey);

    if (fname === true && lname === true && email === true && topic === true && message === true && honey === true) {
         isFormValid.value = true;
    } else isFormValid.value = false;
}
</script>

<template>
    <section class="classic-section contact-section">
        <div class="classic-container">
            <form class="contact-form">
                {{ devmail }}

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="first-name">First Name :</label>
                        <input
                            type="text"
                            v-model="formData.firstName"
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
                            id="last-name"
                            name="last-name"
                            placeholder="Nebra"
                        />
                    </div>
                </div>

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="email">Email :</label>
                        <input
                            type="text"
                            v-model="formData.email"
                            id="email"
                            name="email"
                            placeholder="matneb@zero.fr"
                        />
                    </div>
                </div>

                <div class="cf-line">
                    <div class="cf-group">
                        <label class="cf-label" for="topic">Topic :</label>
                        <input
                            type="text"
                            v-model="formData.topic"
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

                <div class="cf-mail-container" v-if="!formData.honey">
                    <a
                        :href="
                            'mailto:' +
                            devmail +
                            '?subject=' +
                            formData.topic +
                            '&body=' +
                            formData.email +
                            '%20' +
                            formData.lastName.toUpperCase() +
                            '%20' +
                            formData.firstName +
                            '%20___' +
                            formData.message
                        "
                        target="_blank"
                        title="Send your email to the website's owner"
                        class="cf-mail"
                    >
                        Send e-mail
                    </a>
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
.__honey {
    opacity: 0;
}
</style>
