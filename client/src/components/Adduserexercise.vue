<template>
  <div class="vue-template">
    <topnavbar />

    <div class="vertical-center mt-5">
      <div class="inner-block mt-5" style="opacity:0.95">
        <h3>Choose Exercise</h3>
        <div :key="exercise._id" v-for="exercise in exercises">
          <button
            @click="Toexercise(exercise._id)"
            class="btn btn-primary btn-lg btn-block"
          >
            {{ exercise.name }}
          </button>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import topnavbar from "./topnavbar.vue";
export default {
  components: { topnavbar },
  name: "TopNavbar",
  data() {
    return { exercises: [], workouts: [] };
  },
  methods: {
    logout() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("isLoggedIn");
      this.$router.push("/");
    },
    Toexercise(ProId) {
      this.$router.push({ name: "exercise_id", params: { Pid: ProId } });

      console.log("sdfafdsafdasfdasfdsa");
    },
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/exercises")
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
