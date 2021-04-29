<template>
  <div class="vue-tempalte">
    <div class="App">
      <nav
        class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
      >
        <div class="container">
          <a
            class="navbar-brand float-left"
            href="https://myappr.herokuapp.com/"
            target="_blank"
          >
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
              <router-link class="nav-link pr-3" to="/login"
                >Sign in</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="btn btn-outline-primary mr-3" to="/signup"
                >Sign up</router-link
              >
            </li>
            <li class="nav-item" style="">
              <router-link class="btn btn-outline-info" to="/admin-login"
                >Admin Login</router-link
              >
            </li>
          </ul>
        </div>
      </nav>

      <!-- <div class="vertical-center"> -->

      <div
        class="bg-Img"
        :style="{
          backgroundImage:
            'url(' +
            require('./assets/luke-chesser-rCOWMC8qf8A-unsplash.jpg') +
            ')',
        }"
      >
        <router-view />
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>
