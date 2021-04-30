<template>
  <div class="vue-template">
    <topnavbar />

    <div class="vertical-center mt-5">
      <div class="inner-block mt-5" style="opacity:0.95">
        <form v-on:submit.prevent="addBtnClicked">
          <h3>Add Friend</h3>

          <div class="form-group">
            <label>Friend Name</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="name"
              required
              v-model="friend.name"
            />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control form-control-lg"
              placeholder="Email"
              v-model.trim="friend.email"
              required
            />
          </div>
          <div class="form-group">
            <label>PhoneNumber</label>
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="Phonenumber"
              v-model.trim="friend.phone"
              required
            />
          </div>
          <div class="form-group">
            <label>active</label>
            <input
              type="boolean"
              class="form-control form-control-lg"
              placeholder="Active(true or false)"
              v-model.trim="friend.active"
            />
          </div>

          <div class="form-group">
            <label>BMI</label>
            <input
              type="number"
              class="form-control form-control-lg"
              placeholder="bmi"
              v-model.trim="friend.bmi"
            />
          </div>

          <div class="form-group">
            <p class="help is-danger">
              {{ error }}
            </p>
          </div>

          <a>
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              ADD
            </button>
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import topnavbar from "./topnavbar.vue";
import router from "../router/index.js";
export default {
  components: { topnavbar },
  name: "addfriend",
  data() {
    return {
      friend: {
        name: "",
        email: "",
        phone: "",
        active: "",
        bmi: "",
      },
      error: "",
    };
  },

  methods: {
    validateFields() {
      if (this.friend.name.length === 0) {
        this.error = "name should not be empty";
        return false;
      }

      if (this.friend.email.length === 0) {
        this.error = "email should not be empty";
        return false;
      }

      if (this.friend.phone.length === 0) {
        this.error = "phone is required";
        return false;
      }

      if (this.friend.active.length === 0) {
        this.error = "active should not be empty";
        return false;
      }

      if (this.friend.bmi.length === 0) {
        this.error = "bmi should not be empty";
        return false;
      }
      return true;
    },

    addBtnClicked() {
      axios
        .post("https://myappr.herokuapp.com:8000/api/friends/add", {
          name: this.friend.name,
          email: this.friend.email,
          phone: this.friend.phone,
          active: this.friend.active,
          bmi: this.friend.bmi,
        })
        .then((res) => {
          router.push("/friends");
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  resetForm() {
    this.friend.name = null;
    this.friend.email = null;
    this.friend.phone = null;
    this.friend.active = null;
    this.friend.bmi = null;
  },
};
</script>

<style>
.w-100,
.field {
  width: 100%;
}
</style>
