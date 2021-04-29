<template>
  <div class="col-md-12">
    <topnavbar />
    <div class="row">
      <div class="col-md-3">
        <Sidebar />
      </div>
      <div class="col-md-9">
        <br />
        <br />
        <br />
        <br />
        <div class="routerview">
          <router-view />
        </div>
        <div class="container">
          <p v-html="error"></p>

          <div class="portlet box blue" style="width:1000px;opacity:0.95">
            <div class="portlet-title">
              <div class="caption"><i class="fa fa-gift"></i>Users List</div>
            </div>
            <div class="portlet-body mycss">
              <div class="mycss">
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
                        <button
                          @click.prevent="deleteUser(user._id)"
                          class="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div style="textAlign: center">
                <router-link to="/admin-page/manage-users/add">
                  <button class="btn btn-primary pull-right">
                    Add User
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
import Sidebar from "./Sidebar.vue";
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    deleteUser(id) {
      let apiURL = `http://localhost:8000/api/auth/${id}`;
      let indexOfArrayItem = this.users.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.users.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  components: {
    topnavbar,
    Sidebar,
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
