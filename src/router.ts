import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: { transition: 'fade' }
    },
    {
      path: '/articles',
      component: () => import('./views/Articles.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: '/videos',
      component: () => import('./views/Videos.vue'),
      meta: { transition: 'slide-left' }
    }
  ]
});
