<template>
<div>
     <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://myappr.herokuapp.com/" target="_blank">
           Fitness Freak
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/user-dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/workouts">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/exercise">Exercises</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-4" to="/friends">Friends</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mr-4" to="/user-profile">Profile</router-link>
          </li>
          <li class="nav-item" style="">
            <button class="btn btn-outline-danger">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  <div>

  </div> 

  <br />
  <br />
  <br />
  <br />

<div class="outer-block">

<form>
  <h2>Today's Exercise Profile</h2>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="In Miles"
                  required
                  v-model.trim="exercise.run"
                />
        <label class="form-label" for="form6Example1">Running(in miles)</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
         <input
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="In sets(10 each)"
                  required
                  v-model.trim="exercise.squats"
                />
        <label class="form-label" for="form6Example2">Squats(in sets)</label>
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
       <input
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="In sets(10 each)"
                  required
                  v-model.trim="exercise.pushups"
                />
        <label class="form-label" for="form6Example1">Push Ups(in sets)</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
       <input
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="In sets(10 each)"
                  required
                  v-model.trim="exercise.press"
                />
        <label class="form-label" for="form6Example2">Bench Press(in sets)</label>
      </div>
    </div>
  </div>

  <a @click="submitClicked()">
            <button type="submit" class="btn btn-primary btn-lg btn-block">
                Here I go!
            </button>
                </a>


</form>

</div>
<br />
<div class="outer-block">
  <h3>Facing some errors to display the fields but values are getting stored..</h3>
<table class="table table-info table-striped table-light">
  <thead>
    <tr>
      <th scope="col">Running</th>
      <th scope="col">Squats</th>
      <th scope="col">Pushups</th>
      <th scope="col">Bench Press</th>
    </tr>
  </thead>
  <tbody>
    <tr v-repeat="getallexcerise in getallexcerises">
      <td>{{ getallexcerises.run }}</td>
      <td>{{ getallexcerises.squats }}</td>
      <td>{{ getallexcerises.pushups }}</td>
      <td>{{ getallexcerises.press }}</td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>  



</div>

</template>
<script>

// import router from "../router/index.js";

export default {
  name: "Exercise",
  data() {
    return {
      exercise: {
        run: "",
        squats: "",
        pushups: "",
        press: ""
      }
    };
  },
  methods: {

    validateFields() {
      // run
      if (this.exercise.run === 0) {
        this.error = "You should run minimum 1 mile!!";
        return false;
      }
      // squats
      if (this.exercise.squats === 0) {
        this.error = "You have to be Fit!! work for it";
        return false;
      }
      // pushups
      if (this.exercise.pushups === 0) {
        this.error = "You have to be Fit!! work for it";
        return false;
      }
        // press
      if (this.exercise.press === 0) {
        this.error = "You have to be Fit!! work for it";
        return false;
      }
      return true;
    },

    

    //registers a new user
    submitClicked() {
        console.log("check");
        console.log(JSON.parse(sessionStorage.getItem("exercises")));
      //  if fields are valid
      if (this.validateFields()) {
        //  get exercises in the session
        let exercises = sessionStorage.exercises
          ? JSON.parse(sessionStorage.getItem("exercises"))
          : [];
        exercises.push(this.exercise);
        sessionStorage.setItem("exercises", JSON.stringify(exercises));
        sessionStorage.setItem("exercise", JSON.stringify(this.exercise));
        this.clearForm();

      }
      console.log(JSON.parse(sessionStorage.getItem("exercises")));
    },
    clearForm() {
      var exerciseToClear = this.exercise;
      exerciseToClear.run = "";
      exerciseToClear.squats = "";
      exerciseToClear.pushups = "";
      exerciseToClear.press = "";
    },
  },

  computed: {
    getallexcerises: function() {
      console.log(sessionStorage.getItem("exercises"));
      return JSON.parse(sessionStorage.getItem("exercises"));
    }
  },


};
</script>
