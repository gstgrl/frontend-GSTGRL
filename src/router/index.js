import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { watch } from 'vue';

import HomeView from '@/pages/home/HomeView.vue';


const routes = [
  {path: '/', component: HomeView, name: 'Home view', meta: {title: "GSTGRL"}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || 'GSTGRL'; // Cambia il titolo della scheda
});

export default router
