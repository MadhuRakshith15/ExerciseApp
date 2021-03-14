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
       <div class="vertical-center">
        <div class="inner-block">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

            <!-- <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p> -->

        </form>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>