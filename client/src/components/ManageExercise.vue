<template>
  <div class="col-md-12">
    <topnavbar />
    <div class="row">
      <div class="col-md-3">
        <Sidebar />
      </div>
      <div class="col-md-9">
        <div class="routerview">
          <router-view />
        </div>
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

                      <td>
                        <button
                          @click.prevent="deleteExercise(exercise._id)"
                          class="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div style="textAlign: center">
                <router-link to="/admin-page/manage-exercise/add">
                  <button class="btn btn-primary pull-right">
                    Add Exercise
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
import Sidebar from "./Sidebar.vue";

export default {
  data() {
    return {
      exercises: [],
    };
  },

  methods: {
    deleteExercise(id) {
      let apiURL = `https://myappr.herokuapp.com/api/exercises/${id}`;
      let indexOfArrayItem = this.exercises.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.exercises.splice(indexOfArrayItem, 1);
            console.log("adfafda");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  components: {
    topnavbar,
    Sidebar,
  },
  mounted() {
    axios
      .get("https://myappr.herokuapp.com/api/exercises")
      .then((response) => {
        this.exercises = response.data;
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
