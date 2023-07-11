import { createRouter, createWebHistory } from 'vue-router'
import BetaView from '../views/BetaView.vue'
import HomeView from '../views/HomeView.vue'
import NightlyView from '../views/NightlyView.vue'
import TeletypeView from '../views/TeletypeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'atom',
      component: HomeView
    },
    {
      path: '/beta',
      name: 'beta',
      component: BetaView
    },
    {
      path: '/nightly',
      name: 'nightly',
      component: NightlyView
    },
    {
      path: '/teletype',
      name: 'teletype',
      component: TeletypeView
    }
  ]
})

export default router
