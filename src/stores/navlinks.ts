import { ref } from "vue";
import { defineStore } from "pinia";
import type { NavLink } from "@/interfaces/NavLink.interface";

export const useNavLinksStore = defineStore('navlinks', () => {
    const navlinks = ref<NavLink[]>([
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