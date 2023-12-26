import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import FlagIcon from 'vue-flag-icon';

import BacklinkParticle from './particles/BacklinkParticle.vue'
import ButtonLinkParticle from '@/particles/ButtonLinkParticle.vue';
import ButtonParticle from '@/particles/ButtonParticle.vue';
import CardParticle from '@/particles/CardParticle.vue';
import HeroParticle from '@/particles/HeroParticle.vue';
import IndexParticle from '@/particles/IndexParticle.vue';
import InputGroupParticle from './particles/InputGroupParticle.vue';
import LineSeparatorParticle from '@/particles/LineSeparatorParticle.vue';
import RadioGroupParticle from './particles/RadioGroupParticle.vue';
import SectionTitleParticle from '@/particles/SectionTitleParticle.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(FlagIcon)

app
    .component('BacklinkParticle', BacklinkParticle)
    .component('ButtonLinkParticle', ButtonLinkParticle)
    .component('ButtonParticle', ButtonParticle)
    .component('CardParticle', CardParticle)
    .component('HeroParticle', HeroParticle)
    .component('IndexParticle', IndexParticle)
    .component('InputGroupParticle', InputGroupParticle)
    .component('LineSeparatorParticle', LineSeparatorParticle)
    .component('RadioGroupParticle', RadioGroupParticle)
    .component('SectionTitleParticle', SectionTitleParticle)

app.mount('#app')
