import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/content.vue'
import ContentSecond from '../components/content-second.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Content
  },
  {
    path: '/about',
    name: 'About',
    component: ContentSecond
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
