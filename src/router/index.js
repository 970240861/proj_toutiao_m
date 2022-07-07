import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // 路由懒加载.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
