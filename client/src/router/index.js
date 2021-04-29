import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/exercise',
      name: 'exercise',
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
    component: () => import('../components/userDashboard.vue')
  },

  {
    path: '/friends',
    name: 'friends',
    component: () => import('../components/Friends.vue')
  },
  {
    path: '/friends/add',
    name: 'friendsadd',
    component: () => import('../components/AddFriend.vue')
  },



  {
    path: '/post',
    name: 'post',
    component: () => import('../components/Post.vue')
    },
  {
    path: '/post/add',
    name: 'addpost',
    component: () => import('../components/AddPost.vue')
  },

//admin manage user

  {
    path: '/admin-page',
    name: 'admin',
    component: () => import('../components/AdminPage.vue')
  },
  {
    path: '/admin-page/manage-users',
    name: 'manage-users',
    component: () => import('../components/Manageusers.vue')
  },
  {
    path: '/admin-page/manage-users/add',
    name: 'adduser',
    component: () => import('../components/AddUser.vue'),
    meta: {
      title: 'Addfriend',
    },
  },


//manage exercise
  {
    path: '/admin-page/manage-exercise',
    name: 'manage-exercise',
    component: () => import('../components/ManageExercise.vue')
  },
  {
    path: '/admin-page/manage-exercise/add',
    name: 'manage-exercise_add',
    component: () => import('../components/AddExercise.vue')
    },
  
  
//manage workout
  {
    path: '/admin-page/manageworkout',
    name: 'manage-exercise',
    component: () => import('../components/Workoutmanage.vue')
  },
  {
    path: '/admin-page/manageworkout/add',
    name: 'manage-exercise_add',
    component: () => import('../components/AddWorkout.vue')
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
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
