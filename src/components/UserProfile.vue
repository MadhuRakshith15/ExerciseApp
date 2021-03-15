<template>
    <div>
     <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://myappr.herokuapp.com/" target="_blank">
           Fitness Freak
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/user-dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/workouts">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/exercise">Exercises</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/friends">Friends</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mr-4" to="/user-profile">Profile</router-link>
          </li>
          <li class="nav-item" style="">
            <button class="btn btn-outline-danger">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
    <br />
    <br />
    <br />
    <br />
    <h1>This a profile Page</h1>
   </div> 
</template>