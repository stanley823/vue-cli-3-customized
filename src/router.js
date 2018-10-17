import Vue from 'vue'
import Router from 'vue-router'
import About from './pages/About.vue'
import Home from './pages/Home.vue'

Vue.use(Router)

// function loadView (view) {
//   return () => import(/* webpackChunkName: "view-[request]" */ `@/pages/${view}.vue`)
// }

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
    }
  ]
})
