import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import { watch } from 'vue';

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';


const routes = [
  {path: '/', component: HomeView, name: 'Home view', meta: {requiresAuth: false, title: "GSTGRL"}},
  {path: "/login", component: LoginView, name: 'Login view', meta: { requiresAuth: true, title: "LOGIN"}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protezione delle rotte
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Aspetta che il controllo dell'autenticazione sia completato
  if (authStore.loading) {
    const unwatch = watch(
      () => authStore.loading,
      (newVal) => {
        if (!newVal) {
          unwatch();
          proceed();
        }
      }
    );
  } else {
    proceed();
  }

  function proceed() {
    if (to.meta.requiresAuth && !authStore.user) {
      // Se la route richiede autenticazione ma l'utente non è loggato, vai al login
      next("/");
    } else if (authStore.user && to.path === "/login") {
      // Se l'utente è già loggato e cerca di andare al login, reindirizzalo alla dashboard
      next("/dashboard");
    } else {
      // Se tutto è ok, permetti la navigazione
      next();
    }
  }
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title'; // Cambia il titolo della scheda
});


export default router
