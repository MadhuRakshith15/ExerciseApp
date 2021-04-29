<template>
  <div>
    <div>
      <topnavbar />
      <div class="sidenav">
        <br />
        <br />
        <br />
        <br />

        <ul class="default-responsive-navlinks">
          <h3><center>DashBoard</center></h3>

          <li>
            <router-link class="nav-link pr-4" to="/admin-page/manage-users"
              ><center>Manage Users</center></router-link
            >
          </li>
          <li>
            <router-link class="nav-link pr-4" to="/admin-page/manage-exercise"
              ><center>Manage Exercise</center></router-link
            >
          </li>
          <li>
            <router-link class="nav-link pr-4" to="/admin-page/manageworkout"
              ><center>Manage Workout</center></router-link
            >
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="routerview">
        <router-view />
      </div>
    </div>
    <div class="container">
      <p v-html="error"></p>

      <div class="portlet box blue" style="width:1000px;">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-gift"></i>Users List</div>
        </div>
        <div class="portlet-body">
          <table class="table">
            <thead>
              <tr>
                <td>
                  Username
                </td>
                <td>
                  Email
                </td>
                <td>
                  Age
                </td>
                <td>
                  Phonenumber
                </td>

                <td>
                  Height
                </td>
                <td>
                  Weight
                </td>
                <td>
                  Delete
                </td>
              </tr>
            </thead>
            <tbody>
              <tr :key="user._id" v-for="user in users">
                <td>{{ user.userName }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.mobileNumber }}</td>
                <td>{{ user.height }}</td>
                <td>{{ user.weight }}</td>
                <td>
                  <button class="btn btn-danger" @click="deleteData(user._id)">
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div style="textAlign: center">
      <router-link to="/admin-page/manage-users/add">
        <button class="btn btn-primary pull-right">
          Add User
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
      users: [],
    };
  },
  methods: {},
  components: {
    topnavbar,
  },

  mounted() {
    axios
      .get("http://localhost:8000/api/auth/showusers")
      .then((response) => {
        this.users = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
