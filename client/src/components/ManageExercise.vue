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
          <div class="caption"><i class="fa fa-gift"></i>Exercise List</div>
        </div>
        <div class="portlet-body">
          <table class="table">
            <thead>
              <tr>
                <td>
                  Exercise Name
                </td>
                <td>
                  description
                </td>
                <td>
                  Sets
                </td>
                <td>
                  CakiruesBurnt
                </td>

                <td>
                  WorkoutStage
                </td>
                <td>
                  Delete
                </td>
              </tr>
            </thead>
            <tbody>
              <tr :key="exercise._id" v-for="exercise in exercises">
                <td>{{ exercise.name }}</td>
                <td>{{ exercise.description }}</td>
                <td>{{ exercise.sets }}</td>
                <td>{{ exercise.caloriesBurnt }}</td>
                <td>{{ exercise.workoutStage }}</td>

                <td><button class="btn btn-danger">delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div style="textAlign: center">
      <router-link to="/admin-page/manage-exercise/add">
        <button class="btn btn-primary pull-right">
          Add Exercise
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
      exercises: [],
    };
  },
  methods: {},
  components: {
    topnavbar,
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/exercises")
      .then((response) => {
        this.exercises = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
