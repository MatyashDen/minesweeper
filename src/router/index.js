import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from "../views/Menu"
import Game from "../views/Game"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/new-game',
    name: 'NewGame',
    component: Game,
    props: { shouldGenerate: true }
  }, {
    path: '/load-game',
    name: 'LoadGame',
    component: Game,
    props: { shouldGenerate: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
