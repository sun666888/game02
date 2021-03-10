import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '掷骰子，向前进，领好礼'
    },
    component: () => import('./views/Home.vue')
  },
  {
    path: '/game',
    name: 'home',
    meta: {
      title: '掷骰子，向前进，领好礼'
    },
    component: () => import('./views/game.vue')
  },
  {
    path: '/prize',
    name: 'prize',
    meta: {
      title: '我的奖品'
    },
    component: () => import('./views/prize.vue')
  },
  {
    path: '/preferential',
    name: 'preferential',
    meta: {
      title: '特惠专场'
    },
    component: () => import('./views/preferential.vue')
  }
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
