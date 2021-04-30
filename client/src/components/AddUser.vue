<template>
  <div class="vue-template">
    <div class="col-md-12">
      <topnavbar />
    </div>
    <div class="inner-block" style="opacity:0.95">
      <div class="vertical-center">
        <form id="signup-form" v-on:submit.prevent="registerClicked">
          <h3 class="pt-5">Add User</h3>

          <div class="form-group">
            <label>First Name</label>

            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Firstname"
              required
              v-model="user.firstName"
            />
          </div>
          <div class="form-group">
            <label>Last Name</label>

            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Lastname"
              required
              v-model="user.lastName"
            />
          </div>
          <div class="form-group">
            <label>User Name</label>

            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Username"
              required
              v-model="user.userName"
            />
          </div>

          <div class="form-group">
            <label>Email address</label>
            <!-- <input type="email" class="form-control form-control-lg" /> -->
            <input
              type="text"
              class="form-control form-control-lg "
              placeholder="Email"
              v-model="user.email"
              required
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Your password"
              v-model="user.password"
            />
          </div>
          <div class="form-group">
            <label>mobileNumber</label>
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="phone"
              v-model.trim="user.mobileNumber"
            />
          </div>
          <div class="form-group">
            <label>Age</label>
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="Age"
              v-model.trim="user.age"
            />
          </div>
          <div class="form-group">
            <label>Weight</label>
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="Weight"
              v-model.trim="user.weight"
            />
          </div>

          <div class="form-group">
            <label>Height(lbs)</label>
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="Height"
              v-model.trim="user.height"
            />
          </div>

          <div class="form-group">
            <p class="help is-danger">
              {{ error }}
            </p>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block">
            Add User
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
  name: "SignUp",
  data() {
    return {
      user: {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: "",
        age: "",
        height: "",
        weight: "",
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
      if (this.user.firstName.length === 0) {
        this.error = "Firstname should not be empty";
        return false;
      }

      if (this.user.lastName.length === 0) {
        this.error = "Lastname should not be empty";
        return false;
      }

      if (this.user.password.length === 0) {
        this.error = "Password is required";
        return false;
      }

      if (this.user.age.length === 0) {
        this.error = "age should not be empty";
        return false;
      }
      if (this.user.weight.length === 0) {
        this.error = "weight should not be empty";
        return false;
      }

      if (this.user.height.length === 0) {
        this.error = "height should not be empty";
        return false;
      }
      return true;
    },

    registerClicked() {
      if (this.validateFields()) {
        axios
          .post("http://localhost:8000/api/auth/signup", {
            userName: this.user.userName,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            mobileNumber: this.user.mobileNumber,
            email: this.user.email,
            password: this.user.password,
            age: this.user.age,
            height: this.user.height,
            weight: this.user.weight,
          })
          .then((res) => {
            router.push("/manage-users");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    clearForm() {
      this.picture = null;
      var userToClear = this.user;
      userToClear.username = "";
      userToClear.password = "";
      userToClear.fullname = "";
      userToClear.age = "";
      userToClear.weight = "";
      userToClear.height = "";
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
