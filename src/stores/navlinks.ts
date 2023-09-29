import { ref } from "vue";
import { defineStore } from "pinia";
import type { NavLink } from "@/interfaces/NavLink.interface";

export const useNavLinksStore = defineStore('navlinks', () => {
    const navlinks = {
        'fr': [
            {
                name: 'Accueil',
                path: '/'
            },
            {
                name: 'A propos',
                path: '/about'
            },
            {
                name: 'Ma formation',
                path: '/training'
            },
            {
                name: 'Mes engagements',
                path: '/commitments'
            },
            {
                name: 'Mes réalisations',
                path: '/gallery'
            }
        ],
        'en': [
            {
                name: 'Home',
                path: '/'
            },
            {
                name: 'About',
                path: '/about'
            },
            {
                name: 'My Training',
                path: '/training'
            },
            {
                name: 'Commitments',
                path: '/commitments'
            },
            {
                name: 'My Work',
                path: '/gallery'
            }
        ],
    };



    return { navlinks }
})