import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PricesView from '../views/PricesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prices',
      name: 'prix',
      component: PricesView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    // {
    //   path: '/gallery',
    //   name: 'gallery',
    //   component: () => import('@/views/GalleryView.vue')
    // },
    {
      path: '/commitments',
      name: 'commitments',
      component: () => import('@/views/CommitmentsView.vue')
    },
    {
      path: '/tests',
      name: 'tests',
      component: () => import('@/views/TestsView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // always scroll to top position on route change
  },
})

export default router
