<template>
  <div>
    <div>
      <topnavbar />
      <div class="sidenav">
        <br />
        <br />
        <br />
        <br />
        <ul class="default-responsive-navlinks">
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
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <p v-html="error"></p>

      <div class="portlet box blue" style="width:1000px;">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-gift"></i>Workout List</div>
        </div>
        <div class="portlet-body">
          <table class="table">
            <thead>
              <tr>
                <td>
                  Workout Name
                </td>
                <td>
                  Description
                </td>
                <td>
                  Level
                </td>

                <td>
                  Delete
                </td>
              </tr>
            </thead>
            <tbody>
              <tr :key="workout._id" v-for="workout in workouts">
                <td>{{ workout.name }}</td>
                <td>{{ workout.description }}</td>
                <td>{{ workout.level }}</td>

                <td><button class="btn btn-danger">delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div style="textAlign: center">
      <router-link to="/admin-page/manageworkout/add">
        <button class="btn btn-primary pull-right">
          Add Workout
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import topnavbar from "./topnavbar.vue";

export default {
  data() {
    return {
      workouts: [],
    };
  },
  methods: {},
  components: {
    topnavbar,
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/workouts")
      .then((response) => {
        this.workouts = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
