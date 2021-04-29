<template>
  <div>
    <topnavbar />
    <div class="sidenav">
      <br />
      <br />
      <br />
      <br />

      <ul class="default-responsive-navlinks" style="opacity:0.95">
        <h3><center>DashBoard</center></h3>

        <li>
          <router-link class="nav-link pr-4" to="/admin-page/manage-users"
            ><center>Manage Users</center></router-link
          >
        </li>
        <li>
          <router-link class="nav-link pr-4" to="/admin-page/manage-exercise"
            ><center>Manage Exercise</center></router-link
          >
        </li>
        <li>
          <router-link class="nav-link pr-4" to="/admin-page/manageworkout"
            ><center>Manage Workout</center></router-link
          >
        </li>
      </ul>
    </div>
    <div class="routerview">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap";

.routerview {
  width: 100%;
}

.default-responsive-navlinks {
  position: relative;
  top: 10px;
  width: 100%;
  list-style-type: none;
  padding: 0px;
  margin: 0 auto;
}

.default-responsive-navlinks li {
  background-color: #d1d1e0;
  border-top: 1px solid rgb(121, 121, 121);
  transition: 0.3s;
}

.sidenav {
  height: 1100px;

  width: 290px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d1d1e0;
  overflow-x: hidden;
  padding-top: 20px;
  font-family: "fangsong", sans-serif;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  color: #8585ad;
  display: block;
  font-size: 18px;
  text-emphasis-color: #1a1aff;
}

.sidenav a:hover {
  color: white;
}

.sidenav li:hover {
  background-color: #9999ff;
}

#app {
  margin-left: 290px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-width: 800px) {
  .sidenav {
    display: block;
    position: static;
    width: 100%;
    height: auto;
    padding: 0px;
    overflow: hidden;
  }
  .default-responsive-navlinks a {
    display: none;
  }
  #app {
    margin-left: -290px;
  }
  .sidenav-logo-button-container {
    padding: 0px;
  }
}
</style>
