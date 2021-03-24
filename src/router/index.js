import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    // component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: 'contact-us',
        name: 'ContactUs',
        component: () => import('../views/ContactUs.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue'),
      },
      {
        path: 'help-and-support',
        name: 'HelpAndSupport',
        component: () => import('../views/HelpAndSupport.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
