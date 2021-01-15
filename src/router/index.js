import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import('../views/Berita.vue')
  },
  {
    path: '/galeri',
    name: 'Galeri',
    component: () => import('../views/Galeri.vue')
  },
  {
    path: '/lapor',
    name: 'Lapor',
    component: () => import('../views/Lapor.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
