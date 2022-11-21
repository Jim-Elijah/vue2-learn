import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import AgoraDemo from '../components/agoraDemo/index.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HelloWorld,
  },
  {
    path: '/AgoraDemo',
    component: AgoraDemo,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router