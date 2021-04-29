<template>
  <div>
    <topnavbar />
    <br />
    <br />
    <br />
    <br />

    <div class="container emp-profile" style="opacity:0.95">
      <form method="post">
        <!-- First Row -->
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              <div class="file btn btn-lg btn-primary">
                Profile Image
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>
                Madhu Rakshith
              </h5>
              <h6>
                Student at SUNY Newpaltz
              </h6>
              <p class="proile-rating">Computer science</p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    >About</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <button type="" class="profile-edit-btn" name="btnAddMore" value="">
              Edit Profile
            </button>
          </div>
        </div>
        <!-- Next Row -->
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <a href="https://github.com/MadhuRakshith15/ExerciseApp"
                >Github ExerciseApp</a
              ><br />
            </div>
          </div>
          <div class="col-md-8">
            <!-- Bug Area -->
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>User Id/Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ getCurrentUser.userName }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Full Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ getCurrentUserFullName }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Height"</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ getCurrentUser.height || "" }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Weight(lbs)</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ getCurrentUser.weight || "" }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Age</label>
                  </div>
                  <div class="col-md-6">
                    <p>{{ getCurrentUser.age || "" }}</p>
                  </div>
                </div>
              </div>
              <!-- Bug Area  -->
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div class="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div class="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div class="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label>Your Bio</label><br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import topnavbar from "./topnavbar.vue";

export default {
  components: { topnavbar },
  name: "UserProfile",
  data() {
    return {
      getCurrentUser: {},
    };
  },
  mounted() {
    this.getCurrentUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(sessionStorage.getItem("user"));
    if (!sessionStorage.isLoggedIn) {
      this.$router.push("/login");
    }
  },
  computed: {
    getCurrentUserFullName() {
      return this.getCurrentUser.firstName + " " + this.getCurrentUser.lastName;
    },
  },

  methods: {
    logout() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("isLoggedIn");
    },
  },
};
</script>
