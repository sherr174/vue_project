import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue';
import multiplication_table from '../views/multiplication_table.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/multiplication_table',
      name: 'MultiplicationTable',
      component: multiplication_table
    }
  ]
})

export default router
