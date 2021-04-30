<template>
  <div class="vue-template">
    <topnavbar />
    <br />
    <br />
    <br />
    <br />
    <div class="inner-block" style="opacity:0.95">
      <div class="vertical-center">
        <form id="signup-form" v-on:submit.prevent="registerClicked">
          <h3 class="pt-5">Add Exercises</h3>

          <div class="form-group">
            <label>Exercise Name</label>

            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Name"
              required
              v-model="exercise.name"
            />
          </div>
          <div class="form-group">
            <label>Description</label>

            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Description"
              required
              v-model="exercise.description"
            />
          </div>

          <div class="form-group">
            <label>Sets</label>
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="sets"
              v-model.trim="exercise.sets"
            />
          </div>
          <div class="form-group">
            <label>CaloriesBurnt</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder=""
              required
              v-model="exercise.caloriesBurnt"
            />
          </div>
          <div class="form-group">
            <label>WorkoutStage</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="workoutstage"
              required
              v-model="exercise.workoutStage"
            />
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
import router from "../router/index.js";
import topnavbar from "./topnavbar.vue";
export default {
  components: { topnavbar },
  name: "AddExercise",
  data() {
    return {
      exercise: {
        name: "",
        description: "",
        sets: "",
        caloriesBurnt: "",
        workoutStage: "",
      },
      error: "",
      picture: null,
      notificationModal: {
        isVisible: false,
        modalColor: "is-success",
        title: "",
        text: "",
      },
      uploadProgressBar: {
        isUploading: false,
        uploadProgress: 0,
      },
    };
  },
  methods: {
    validateFields() {
      if (this.exercise.name.length === 0) {
        this.error = "Email should not be empty";
        return false;
      }

      if (this.exercise.description.length === 0) {
        this.error = "fullname should not be empty";
        return false;
      }

      if (this.exercise.sets.length === 0) {
        this.error = "Password is required";
        return false;
      }

      if (this.exercise.caloriesBurnt.length === 0) {
        this.error = "age should not be empty";
        return false;
      }
      if (this.exercise.workoutStage.length === 0) {
        this.error = "weight should not be empty";
        return false;
      }

      return true;
    },

    registerClicked() {
      if (this.validateFields()) {
        axios
          .post("https://myappr.herokuapp.com:8000/api/exercises", {
            name: this.exercise.name,
            description: this.exercise.description,
            sets: this.exercise.sets,
            caloriesBurnt: this.exercise.caloriesBurnt,
            workoutStage: this.exercise.workoutStage,
          })
          .then((res) => {
            router.push("/admin-page/manage-exercise");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.w-100,
.field {
  width: 100%;
}
.h-100perc {
  height: 100%;
}
</style>
