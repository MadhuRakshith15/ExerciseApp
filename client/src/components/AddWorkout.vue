<template>
  <div class="vue-template">
    <div class="col-md-12">
      <topnavbar />
    </div>
    <br />
    <br />
    <br />
    <br />

    <div class="inner-block" style="opacity:0.95">
      <div class="vertical-center">
        <form v-on:submit.prevent="addBtnClicked">
          <h3>Add workout</h3>

          <div class="form-group">
            <label>workout Name</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="name"
              required
              v-model="workout.name"
            />
          </div>

          <div class="form-group">
            <label>description</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="description"
              v-model.trim="workout.description"
              required
            />
          </div>
          <div class="form-group">
            <label>level</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="level."
              v-model.trim="workout.level"
              required
            />
          </div>

          <div class="form-group">
            <p class="help is-danger">
              {{ error }}
            </p>
          </div>

          <a>
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              ADD
            </button>
          </a>
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
  components: { topnavbar },
  name: "addworkout",
  data() {
    return {
      workout: {
        name: "",
        description: "",
        level: "",
      },
      error: "",
    };
  },

  methods: {
    validateFields() {
      if (this.workout.name.length === 0) {
        this.error = "name should not be empty";
        return false;
      }

      if (this.workout.description.length === 0) {
        this.error = "description should not be empty";
        return false;
      }

      if (this.workout.level.length === 0) {
        this.error = "level is required";
        return false;
      }

      return true;
    },

    addBtnClicked() {
      axios
        .post("http://localhost:8000/api/workouts", {
          name: this.workout.name,
          description: this.workout.description,
          level: this.workout.level,
          active: this.workout.active,
          bmi: this.workout.bmi,
        })
        .then((res) => {
          router.push("/admin-page/manageworkout");
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  resetForm() {
    this.workout.name = null;
    this.workout.description = null;
    this.workout.level = null;
    this.workout.active = null;
    this.workout.bmi = null;
  },
};
</script>

<style>
.w-100,
.field {
  width: 100%;
}
</style>
