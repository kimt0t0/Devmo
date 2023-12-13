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
                path: '/a-propos'
            },
            {
                name: 'Mes tarifs',
                path: '/prix'
            },
            {
                name: 'Me préparer',
                path: '/me-preparer'
            },
            {
                name: 'Mes engagements',
                path: '/engagements'
            },
            // {
            //     name: 'Mes réalisations',
            //     path: '/gallery'
            // }
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
                name: 'Pricing',
                path: '/prices'
            },
            {
                name: 'Get Ready',
                path: '/get-ready'
            },
            {
                name: 'Commitments',
                path: '/commitments'
            },
            // {
            //     name: 'My Work',
            //     path: '/gallery'
            // }
        ],
    };



    return { navlinks }
})