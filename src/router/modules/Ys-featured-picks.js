import Layout from '@/layout/Layout.vue'

export default {
  path: '/featuredPicks',
  component: Layout,
  children: [
    {
      path: '',
      name: 'FeaturedPicks',
      component: () => import('@/views/FeaturedPicks/index.vue')
    }
  ]
}
