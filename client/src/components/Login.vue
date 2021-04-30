<template>
  <div class="vue-template">
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
        <a
          class="navbar-brand float-left"
          href="https://myappr.herokuapp.com/"
          target="_blank"
        >
          Fitness Freak
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary mr-3" to="/signup"
              >Sign up</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <div class="vertical-center mt-5">
      <div class="inner-block mt-5" style="opacity:0.95">
        <form v-on:submit.prevent="loginBtnClicked">
          <h3>Sign In</h3>

          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              class="form-control form-control-lg"
              placeholder="Your Email"
              v-model.trim="credentials.username"
              required
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Your password.."
              v-model.trim="credentials.password"
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
              login
            </button>
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
export default {
  name: "SignIn",
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
      error: "",
    };
  },

  mounted() {
    if (sessionStorage.isLoggedIn) {
      this.$router.push("/user-dashboard");
    }
  },
  methods: {
    validateFields() {
      if (this.credentials.username.length === 0) {
        this.error = "Username is required";
        return false;
      }

      if (this.credentials.password.length === 0) {
        this.error = "Password is required";
        return false;
      }
      return true;
    },
    loginBtnClicked() {
      if (this.validateFields()) {
        axios
          .post("https://myappr.herokuapp.com:8000/api/auth/login", {
            email: this.credentials.username,
            password: this.credentials.password,
          })
          .then((res) => {
            console.log(res);
            if (res.data.status == 401) {
              alert(res.data.msg);
            } else if (res.data.status == 200) {
              sessionStorage.setItem("token", res.data.token);
              sessionStorage.setItem("isLoggedIn", true);
              sessionStorage.setItem("user", JSON.stringify(res.data.user));
              router.push("/user-dashboard");
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    },
    resetForm() {
      this.credentials.username = null;
      this.credentials.password = null;
    },
  },
};
</script>
<style>
.w-100,
.field {
  width: 100%;
}
</style>
