<template>
    <div class="vue-template">
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://myappr.herokuapp.com/" target="_blank">
           Fitness Freak
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <!-- <li class="nav-item">
            <router-link class="nav-link pr-3" to="/workouts">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-5" to="/exercise">Exercises</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary mr-3" to="/signup">Sign up</router-link>
          </li>
          <!-- <li class="nav-item" style="">
            <router-link class="btn btn-outline-info" to="/admin-login">Admin Login</router-link>
          </li> -->
        </ul>
      </div>
    </nav>
    
       <div class="vertical-center mt-5">
        <div class="inner-block mt-5">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Your username"
                v-model.trim="credentials.username"
                required
                />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Your password"
                v-model.trim="credentials.password"
                required
              />
            </div>
            <div class="form-group">
                <p class="help is-danger">
                {{ error }}
                </p>
             </div>
            <button type="submit" class="btn btn-success btn-lg btn-block" @click="loginBtnClicked()">Sign In</button>

            <!-- <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p> -->

        </form>
        </div>
        </div>
    </div>
</template>

<script>
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
      this.$router.push("/");
    }
  },
  methods: {
    validateFields() {
      // email
      if (this.credentials.username.length === 0) {
        this.error = "Username is required";
        return false;
      }
      // password
      if (this.credentials.password.length === 0) {
        this.error = "Password is required";
        return false;
      }
      return true;
    },
    loginBtnClicked() {
      if (this.validateFields()) {
        let users = JSON.parse(sessionStorage.getItem("users"));
        const user = users.find((x) => x.username == this.credentials.username);
        if (user != undefined && user != "") {
          if (user.password == this.credentials.password) {
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("isLoggedIn", true);
            this.wrongCredentials = true;
            this.resetForm();
            router.push("/user-dashboard");
          }
        }
        this.resetForm();
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