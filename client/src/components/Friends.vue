<template>
  <div>
    <topnavbar />

    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <p v-html="error"></p>

      <div class="portlet box blue" style="width:1000px; opacity:0.95">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-gift"></i>Friends List</div>
        </div>
        <div class="portlet-body">
          <div class="mycss">
            <table class="table">
              <thead>
                <tr>
                  <td><b> Name</b></td>
                  <td><b> Phone</b></td>
                  <td><b> Email</b></td>
                  <td><b> Active</b></td>
                  <td><b> BMI</b></td>
                </tr>
              </thead>
              <tbody>
                <tr :key="friend._id" v-for="friend in friends">
                  <td>{{ friend.name }}</td>
                  <td>{{ friend.phone }}</td>
                  <td>{{ friend.email }}</td>
                  <td>{{ friend.active }}</td>
                  <td>{{ friend.bmi }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div style="textAlign: center">
            <router-link to="/friends/add">
              <button class="btn btn-primary pull-right">
                Add Friend
              </button>
            </router-link>
          </div>
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
  data() {
    return {
      friends: [],
    };
  },
  methods: {},
  components: {
    topnavbar,
  },
  mounted() {
    axios
      .get("https://myappr.herokuapp.com:8000/api/friends")
      .then((response) => {
        this.friends = response.data;
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
