<template>
  <div class="vue-template">
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
        <a
          class="navbar-brand float-left"
          href="http://localhost/"
          target="_blank"
        >
          Fitness Freak
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <!-- <li class="nav-item">
            <router-link class="nav-link pr-3" to="/workouts">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-5" to="/exercise">Exercises</router-link>
          </li> -->
          <!-- <li class="nav-item">
            <router-link class="nav-link pr-3" to="/posts">Posts</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary mr-3" to="/signup"
              >Sign up</router-link
            >
          </li>
          <!-- <li class="nav-item" style="">
            <router-link class="btn btn-outline-info" to="/admin-login">Admin Login</router-link>
          </li> -->
        </ul>
      </div>
    </nav>
    <div class="inner-block">
      <div class="vertical-center">
        <form id="signup-form" v-on:submit.prevent="registerClicked">
          <h3 class="pt-5">Sign Up</h3>

          <div class="form-group">
            <label>First Name</label>
            <!-- <input type="text" class=""/> -->
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Your Firstname"
              required
              v-model="user.firstName"
            />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <!-- <input type="text" class=""/> -->
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Your Lastname"
              required
              v-model="user.lastName"
            />
          </div>
          <div class="form-group">
            <label>User Name</label>
            <!-- <input type="text" class=""/> -->
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Your username"
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
            Signup
          </button>

          <p class="forgot-password text-right">
            Already registered
            <router-link :to="{ name: 'login' }">sign in?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
export default {
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
        this.error = "FirstName should not be empty";
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
      console.log(JSON.parse(sessionStorage.getItem("users")));

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
            router.push("/login");
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
  mounted() {
    if (sessionStorage.isLoggedIn) {
      this.$router.push("/user-dashboard");
    }
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
