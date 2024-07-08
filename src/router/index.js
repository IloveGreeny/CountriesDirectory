import { createRouter, createWebHistory } from 'vue-router';
import SearchBar from "../components/SearchBar/SearchBar.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

    },
    {
      path: '/about',
      name: 'about',
      component: SearchBar
    }
  ]
})

export default router
