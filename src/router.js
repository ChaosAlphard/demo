import Vue from 'vue'
import Router from 'vue-router'

import HomeView from './views/HomeView.vue'
import Search from './views/SearchView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
