<template>
  <div class="col-md-12">
    <topnavbar />
    <div class="row">
      <div class="col-md-3">
        <Sidebar />
      </div>
      <div class="col-md-9">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="routerview">
          <router-view />
        </div>
        <div class="container">
          <p v-html="error"></p>
          <div class="portlet box blue" style="width:1000px; opacity:0.95">
            <div class="portlet-title">
              <div class="caption"><i class="fa fa-gift"></i>Workout List</div>
            </div>
            <div class="portlet-body">
              <div class="mycss">
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

                      <td>
                        <button
                          @click.prevent="deleteWorkout(workout._id)"
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
                <router-link to="/admin-page/manageworkout/add">
                  <button class="btn btn-primary pull-right">
                    Add Workout
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
      workouts: [],
    };
  },
  methods: {
    deleteWorkout(id) {
      let apiURL = `http://localhost:8000/api/workouts/${id}`;
      let indexOfArrayItem = this.workouts.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.workouts.splice(indexOfArrayItem, 1);
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
