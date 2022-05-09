import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PartyView from '../views/PartyView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/party',
    },
    {
      path: '/party/:id',
      name: 'party',
      component: PartyView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'E404',
      alias: '/E404',
      component: () => import('../views/E404View.vue'),
    },
  ],
});

export default router;
