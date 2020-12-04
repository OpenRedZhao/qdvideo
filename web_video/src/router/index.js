import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Index
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/Shop.vue')
  },
  {
    path: '/me',
    name: 'me',
   component: () => import('@/views/Me.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router
