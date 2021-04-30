<template>
  <div class="col-md-12">
    <topnavbar />
    <div class="row">
      <div class="col-md-12">
        <div class="routerview">
          <router-view />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container">
          <p v-html="error"></p>

          <div class="portlet box blue" style="width:1000px;opacity:0.95">
            <div class="portlet-title">
              <div class="caption"><i class="fa fa-gift"></i>Exercise List</div>
            </div>
            <div class="portlet-body">
              <div class="mycss">
                <table class="table">
                  <thead>
                    <tr style="color:blue">
                      <td>
                        Exercise Name
                      </td>
                      <td>
                        Sets
                      </td>
                      <td>
                        CaloriesBurnt
                      </td>
                      <td>
                        Workout Stage
                      </td>

                      <td>
                        Period Time
                      </td>
                      <td>
                        Completed
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      :key="userexercise._id"
                      v-for="userexercise in userexercises"
                    >
                      <td>{{ userexercise.name }}</td>
                      <td>{{ userexercise.sets }}</td>
                      <td>{{ userexercise.caloriesBurnt }}</td>
                      <td>{{ userexercise.workoutStage }}</td>
                      <td>{{ userexercise.period }}</td>
                      <td>{{ userexercise.completed }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div style="textAlign: center">
                <router-link to="/userexercise/add">
                  <button class="btn btn-primary pull-right">
                    Add UserExercise
                  </button>
                </router-link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import topnavbar from "./topnavbar.vue";

export default {
  data() {
    return {
      userexercises: [],
    };
  },

  methods: {},
  components: {
    topnavbar,
  },
  mounted() {
    axios
      .get("https://myappr.herokuapp.com:8000/api/userexercise")
      .then((response) => {
        this.userexercises = response.data;
        console.log("aaaaaaaaaa", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.mycss {
  border-color: #8080ff;
  background-color: whitesmoke;
  border-radius: 8px;
  margin: bottom 70px;
  border-style: solid;
  padding: 15px;
  border-width: 1px;
}
</style>
