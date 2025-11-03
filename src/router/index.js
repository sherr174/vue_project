import {createRouter, createWebHistory} from 'vue-router'
import home from '../views/home.vue';
import multiplication_table from '../views/multiplication_table.vue';
import about_me from '../views/about_me.vue';
import all_items from "@/views/portfolio/all_items.vue";
import portfolio_item_details from '@/views/portfolio/portfolio_item_details.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/multiplication_table',
      name: 'multiplication_table',
      component: multiplication_table
    },
    {
      path: '/about_me',
      name: 'about_me',
      component: about_me
    },
    {
      path: '/examples/portfolio',
      children: [
        {
          path: '',
          name: 'portfolio_landing_page',
          component: all_items
        },
        {
          path: ':portfolio_id',
          name: 'portfolio_item_details',
          component: portfolio_item_details,
        }
      ]
    }
  ]
})

export default router
