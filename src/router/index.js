import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Welcome.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../views/Loading.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/Favorite.vue')
    },
  ]
})

export default router
