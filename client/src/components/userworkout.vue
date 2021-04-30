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
              <div class="caption"><i class="fa fa-gift"></i>Workout List</div>
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
                        Level
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
                      :key="userworkout._id"
                      v-for="userworkout in userworkouts"
                    >
                      <td>{{ userworkout.name }}</td>
                      <td>{{ userworkout.level }}</td>
                      <td>{{ userworkout.period }}</td>
                      <td>{{ userworkout.completed }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div style="textAlign: center">
                <router-link to="/userworkout/add">
                  <button class="btn btn-primary pull-right">
                    Add UserWorkout
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
      userworkouts: [],
    };
  },

  methods: {},
  components: {
    topnavbar,
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/userworkouts")
      .then((response) => {
        this.userworkouts = response.data;
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
