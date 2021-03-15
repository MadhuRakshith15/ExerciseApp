import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
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
    // component: () => import('../components/userDashboard.vue')
    component: () => import('../components/UserProfile.vue')
    //almost contains home values
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('../components/Friends.vue')
  },
  {
    path: '/admin-page',
    name: 'friends',
    component: () => import('../components/AdminPage.vue')
  },
  {
    path: '/workouts',
    name: 'workouts',
    component: () => import('../components/WorkoutCard.vue'),
    meta: {
      title: 'Workouts',
    },
  },
  {
    path: '/exercise',
    name: 'workouts',
    component: () => import('../components/Exercise.vue'),
    meta: {
      title: 'Exercise',
    },
  },
    {
    path: '/user-profile',
    name: 'user-profile',
    component: () => import('../components/UserProfile.vue'),
    meta: {
      title: 'User-Profile',
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
