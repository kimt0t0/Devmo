import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ButtonLinkParticle from '@/particles/ButtonLinkParticle.vue';
import HeroParticle from '@/particles/HeroParticle.vue';
import IndexParticle from '@/particles/IndexParticle.vue';
import LineSeparatorParticle from '@/particles/LineSeparatorParticle.vue';
import SectionTitleParticle from '@/particles/SectionTitleParticle.vue';
import TagParticle from '@/particles/TagParticle.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app
    .component('ButtonLinkParticle', ButtonLinkParticle)
    .component('HeroParticle', HeroParticle)
    .component('IndexParticle', IndexParticle)
    .component('LineSeparatorParticle', LineSeparatorParticle)
    .component('SectionTitleParticle', SectionTitleParticle)
    .component('TagParticle', TagParticle)

app.mount('#app')
