import { ref } from "vue";
import { defineStore } from "pinia";
import type { navlink } from "@/interfaces/navlinks.interface";

export const useNavLinksStore = defineStore('navlinks', () => {
    const navlinks = ref<navlink[]>([
        {
            name: 'Accueil',
            path: '/'
        },
        {
            name: 'A propos',
            path: '/a-propos'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ]);

    

    return { navlinks }
})