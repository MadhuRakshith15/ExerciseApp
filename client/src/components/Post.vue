<template>
  <div>
    <topnavbar />

    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <p v-html="error"></p>

      <div class="portlet box blue" style="width:1000px;">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-gift"></i>Friends List</div>
        </div>
        <div class="portlet-body">
          <div class="col-md-12 mycss">
            <div class="row">
              <div class="col-md-6">
                <p><center>Image</center></p>

                <div>
                  <FileUpload />
                </div>
              </div>

              <div class="col-md-6">
                <p>User</p>
                <input type="text" />

                <p>Title</p>
                <input type="text" />
                <p>Description</p>

                <textarea rows="4" cols="22" type="text" afdas />
              </div>
            </div>
          </div>
          <br />
          <div style="textAlign: center">
            <router-link to="/post/add">
              <button class="btn btn-primary pull-right">
                Add Post
              </button>
            </router-link>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from "./FileUpload";
import axios from "axios";
import topnavbar from "./topnavbar.vue";

export default {
  data() {
    return {
      friends: [],
    };
  },
  methods: {},
  components: {
    topnavbar,
    FileUpload,
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/friends")
      .then((response) => {
        this.friends = response.data;
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
