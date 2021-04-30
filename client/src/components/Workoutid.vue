<template>
  <div class="vue-template">
    <topnavbar />
    <br />
    <br />
    <br />
    <br />
    <div class="inner-block" style="opacity:0.95">
      <div class="vertical-center">
        <form v-on:submit.prevent="addBtnClicked">
          <h3 class="pt-3" style="color:blue">User workout</h3>
          <br />
          <div class="row">
            <div class="col-md-6">
              <label><center>Name</center></label>
            </div>
            <div class="col-md-6">
              <input style="text-align: center" v-model="workout.name" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <label><center>Level</center></label>
            </div>
            <div class="col-md-6">
              <input style="text-align: center" v-model="workout.level" />
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-md-6">
              <label><center>Period Time</center></label>
            </div>
            <div class="col-md-6">
              <input style="text-align: center" v-model.trim="workout.period" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <label><center>Completed</center></label>
            </div>
            <div class="col-md-6">
              <center>
                <input
                  style="text-align: center"
                  v-model.trim="workout.completed"
                />
              </center>
            </div>
          </div>

          <div class="form-group">
            <p class="help is-danger">
              {{ error }}
            </p>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">
            Add
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import topnavbar from "./topnavbar.vue";
import router from "../router/index.js";

export default {
  data() {
    return {
      ProId: this.$route.params.Pid,
      workout: {
        name: "",
        level: "",

        period: "",
        completed: "",
      },
      error: "",
    };
  },

  methods: {
    addBtnClicked() {
      console.log("post", this.workout);
      axios
        .post("https://myappr.herokuapp.com/api/userworkouts", {
          // name: this.workout.name,
          // level: this.workout.level,

          // period: this.workout.period,
          // completed: this.workout.completed,
          ...this.workout,
        })
        .then((res) => {
          router.push("/userworkout");
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  components: {
    topnavbar,
  },
  mounted() {
    console.log("workoutid mount");
    axios
      .get("https://myappr.herokuapp.com/api/workouts")
      .then((response) => {
        var workouts = response.data;
        var id = this.$route.params.Pid;
        this.workout = workouts.filter((workout) => workout._id == id)[0];
        // this.workout = { ...this.exerciese, period: "", completed: "" };
        this.workout.period = "";
        this.workout.completed = "";
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
