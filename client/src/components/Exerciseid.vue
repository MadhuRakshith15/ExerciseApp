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
          <h3 class="pt-3" style="color:blue">User Exercise</h3>
          <br />
          <div class="row">
            <div class="col-md-6">
              <label><center>Name</center></label>
            </div>
            <div class="col-md-6">
              <input style="text-align: center" v-model="exercise.name" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <label><center>Sets</center></label>
            </div>
            <div class="col-md-6">
              <input style="text-align: center" v-model="exercise.sets" />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <label><center>CaloriesBurnt</center></label>
            </div>
            <div class="col-md-6">
              <input
                style="text-align: center"
                v-model="exercise.caloriesBurnt"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <label><center>Workout Stage</center></label>
            </div>
            <div class="col-md-6">
              <input
                style="text-align: center"
                v-model="exercise.workoutStage"
              />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <label><center>Period Time</center></label>
            </div>
            <div class="col-md-6">
              <input
                style="text-align: center"
                v-model.trim="exercise.period"
              />
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
                  v-model.trim="exercise.completed"
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
      exercise: {
        name: "",
        sets: "",
        caloriesBurnt: "",
        workoutStage: "",
        period: "",
        completed: "",
      },
      error: "",
    };
  },

  methods: {
    addBtnClicked() {
      console.log("post", this.exercise);
      axios
        .post("https://myappr.herokuapp.com:8000/api/userexercise", {
          // name: this.exercise.name,
          // sets: this.exercise.sets,
          // caloriesBurnt: this.exercise.caloriesBurnt,
          // workoutStage: this.exercise.workoutStage,
          // period: this.exercise.period,
          // completed: this.exercise.completed,
          ...this.exercise,
        })
        .then((res) => {
          router.push("/userexercise");
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
    console.log("exerciseid mount");
    axios
      .get("https://myappr.herokuapp.com:8000/api/exercises")
      .then((response) => {
        var exercises = response.data;
        var id = this.$route.params.Pid;
        this.exercise = exercises.filter((exercise) => exercise._id == id)[0];
        // this.exercise = { ...this.exerciese, period: "", completed: "" };
        this.exercise.period = "";
        this.exercise.completed = "";
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
