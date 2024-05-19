// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './page/home.vue';
// import  from './views/About.vue';
import Lond from './page/lond.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lond/:user_id',
    name: 'About',
    component: Lond,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
