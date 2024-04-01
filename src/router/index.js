import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import FeaturedPicks from './modules/Ys-featured-picks.js'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/featuredPicks'
  },
  FeaturedPicks
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
