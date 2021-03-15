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
        <div class="inner-block">
            <div class="vertical-center">
        <form id="signup-form">
            <h3 class="pt-5">Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <!-- <input type="text" class=""/> -->
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Your Full name"
                  required
                  v-model.trim="user.fullname"
                />
            </div>

            <div class="form-group">
                <label>Email address</label>
                <!-- <input type="email" class="form-control form-control-lg" /> -->
                <input
                type="text"
                class="form-control form-control-lg "
                placeholder="Email"
                v-model.trim="user.username"
                required
              />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Your password"
                v-model.trim="user.password"
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
                <label>Weight(lbs)</label>
                <input
                type="number"
                class="form-control form-control-lg"
                placeholder="Weight"
                v-model.trim="user.weight"
              />
                
            </div>

            <div class="form-group">
                <label>Height"</label>
                <input
                type="number"
                class="form-control form-control-lg"
                placeholder="Weight"
                v-model.trim="user.height"
              />
            </div>

            <div class="form-group">
             <p class="help is-danger">
            {{ error }}
             </p>
           </div>

            <a @click="registerClicked()">
            <button type="submit" class="btn btn-primary btn-lg btn-block">
                Signup
            </button>
                </a>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
        </div>
        </div>
    </div>
</template>

<script>
import router from "../router/index.js";
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        username: "",
        password: "",
        fullname: "",
        age: "",
        weight: "",
        height: ""
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
      // username
      if (this.user.username.length === 0) {
        this.error = "Email should not be empty";
        return false;
      }
      // firstname
      if (this.user.fullname.length === 0) {
        this.error = "fullname should not be empty";
        return false;
      }
      // password
      if (this.user.password.length === 0) {
        this.error = "Password is required";
        return false;
      }
        // lastname
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

    

    //registers a new user
    registerClicked() {
        console.log("check");
        console.log(JSON.parse(sessionStorage.getItem("users")));
      //  if fields are valid
      if (this.validateFields()) {
        //  get users in the session
        let users = sessionStorage.users
          ? JSON.parse(sessionStorage.getItem("users"))
          : [];
        users.push(this.user);
        sessionStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem("user", JSON.stringify(this.user));
        sessionStorage.setItem("isLoggedIn", true);
        this.clearForm();
        router.push("/");
      }
      console.log(JSON.parse(sessionStorage.getItem("user")));
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