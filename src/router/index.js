import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView'
import GameView from '@/views/GameView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  }
]

const router = new VueRouter({
  routes
})

export default router
