import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('../components/Signup.vue')
  // },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/admin-login',
    name: 'admin-login',
    component: () => import('../components/AdminLogin.vue')
  },
  {
    path: '/user-dashboard',
    name: 'user-dashboard',
    component: () => import('../components/userDashboard.vue')
  },
  // {
  //   path: '/exercises',
  //   name: 'exercises',
  //   component: () => import('../components/AdminLogin.vue'),
  //   meta: {
  //     title: 'Exercises',
  //   },
  // },
  // {
  //   path: '/workouts',
  //   name: 'workouts',
  //   component: () => import('../components/AdminLogin.vue'),
  //   meta: {
  //     title: 'Workouts',
  //   },
  // },
  // {
  //   path: '/start/:workout_id',
  //   name: 'start',
  //   component: () => import('../components/AdminLogin.vue'),
  //   meta: {
  //     title: 'Start',
  //   },
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
