<template>
    <div class="vue-template">
     <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://myappr.herokuapp.com/" target="_blank">
           Fitness Freak
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <!-- <li class="nav-item">
            <router-link class="nav-link pr-3" to="/workouts">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-5" to="/exercise">Exercises</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary mr-3" to="/signup">Sign up</router-link>
          </li>
          <!-- <li class="nav-item" style="">
            <router-link class="btn btn-outline-info" to="/admin-login">Admin Login</router-link>
          </li> -->
        </ul>
      </div>
    </nav>
        <div class="inner-block">
            <div class="vertical-center">
        <form id="signup-form">
            <h3 class="pt-5">Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <!-- <input type="text" class=""/> -->
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Your Full name"
                  required
                  v-model.trim="user.fullname"
                />
            </div>

            <div class="form-group">
                <label>Email address</label>
                <!-- <input type="email" class="form-control form-control-lg" /> -->
                <input
                type="text"
                class="form-control form-control-lg "
                placeholder="Email"
                v-model.trim="user.username"
                required
              />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Your password"
                v-model.trim="user.password"
              />
                
            </div>

            <div class="form-group">
                <label>Age</label>
                <input
                type="number"
                class="form-control form-control-lg"
                placeholder="Age"
                v-model.trim="user.age"
              />
            </div>

            <div class="form-group">
                <label>Weight(lbs)</label>
                <input
                type="number"
                class="form-control form-control-lg"
                placeholder="Weight"
                v-model.trim="user.weight"
              />
                
            </div>

            <div class="form-group">
                <label>Height"</label>
                <input
                type="number"
                class="form-control form-control-lg"
                placeholder="Weight"
                v-model.trim="user.height"
              />
            </div>

            <div class="form-group">
             <p class="help is-danger">
            {{ error }}
             </p>
           </div>

            <a @click="registerClicked()">
            <button type="submit" class="btn btn-primary btn-lg btn-block">
                Signup
            </button>
                </a>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
        </div>
        </div>
    </div>
</template>



<style scoped>
.w-100,
.field {
  width: 100%;
}
.h-100perc {
  height: 100%;
}
</style>