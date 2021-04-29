<template>
  <div class="vue-template">
    <div class="vertical-center mt-5">
      <div class="inner-block mt-5">
        <form v-on:submit.prevent="loginBtnClicked">
          <h3>Admin's Only</h3>

          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              v-model.trim="credentials.username"
              name="email"
              class="form-control form-control-lg"
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              v-model.trim="credentials.password"
              name="password"
              class="form-control form-control-lg"
            />
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block">
            Sign In
          </button>
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

      admin: [],
      error: "",
    };
  },

  mounted() {
    if (sessionStorage.isLoggedIn) {
      this.$router.push("/user-dashboard");
    }

    axios
      .get("http://localhost:8000/api/auth/showusers")
      .then((response) => {
        this.admin = response.data;
        // console.log(this.admin);
      })
      .catch((err) => {
        console.log(err);
      });
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
          .post("http://localhost:8000/api/auth/login", {
            email: this.credentials.username,
            password: this.credentials.password,
          })
          .then((res) => {
            console.log(res);
            console.log(this.admin);

            if (res.data.status == 401) {
              alert(res.data.msg);
            } else if (res.data.status == 200) {
              sessionStorage.setItem("token", res.data.token);
              sessionStorage.setItem("isLoggedIn", true);
              sessionStorage.setItem("user", JSON.stringify(res.data.user));
              router.push("/admin-page");
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
