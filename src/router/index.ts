import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CarrotView from '@/views/CarrotView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Le royaume des lapins',
      component: () => import ("@/views/HomeView.vue").then(m => HomeView),
    },
    {
      path: '/a-propos-des-lapins',
      name: 'À propos des lapins',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue').then(m => AboutView),
    },
    {
      path: '/balance-une-carotte',
      name: 'Balance une carotte',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CarrotView.vue').then(m => CarrotView),
    },
  ],
})

export default router
