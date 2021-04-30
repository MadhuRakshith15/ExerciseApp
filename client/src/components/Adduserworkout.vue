<template>
  <div class="vue-template">
    <topnavbar />

    <div class="vertical-center mt-5">
      <div class="inner-block mt-5" style="opacity:0.95">
        <h3>Choose Workout</h3>
        <div :key="workout._id" v-for="workout in workouts">
          <button
            @click="Toworkout(workout._id)"
            class="btn btn-primary btn-lg btn-block"
          >
            {{ workout.name }}
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
    Toworkout(ProId) {
      this.$router.push({ name: "workout_id", params: { Pid: ProId } });

      console.log("sdfafdsafdasfdasfdsa");
    },
  },
  mounted() {
    axios
      .get("https://myappr.herokuapp.com/api/workouts")
      .then((response) => {
        this.workouts = response.data;
        console.log("bbbbbbbbb", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
