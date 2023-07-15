import { ref } from "vue";
import { defineStore } from "pinia";
import type { navlink } from "@/interfaces/navlinks.interface";

export const useNavLinksStore = defineStore('navlinks', () => {
    const navlinks = ref<navlink[]>([
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        }
    ]);

    

    return { navlinks }
})