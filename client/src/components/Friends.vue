<template>
  <div>
    <topnavbar />

    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <p v-html="error"></p>

      <div class="portlet box blue" style="width:1000px;">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-gift"></i>Friends List</div>
        </div>
        <div class="portlet-body">
          <table class="table">
            <thead>
              <tr>
                <td>
                  Name
                </td>
                <td>
                  Phone
                </td>
                <td>
                  Email
                </td>
                <td>
                  Active
                </td>
                <td>
                  BMI
                </td>
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
      </div>
    </div>
    <div style="textAlign: center">
      <router-link to="/friends/add">
        <button class="btn btn-primary pull-right">
          Add Friend
        </button>
      </router-link>
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
      .get("http://localhost:8000/api/friends")
      .then((response) => {
        this.friends = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
