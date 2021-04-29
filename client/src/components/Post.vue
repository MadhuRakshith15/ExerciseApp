<template>
  <div>
    <topnavbar />

    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <p v-html="error"></p>

      <div class="portlet box blue" style="width:1000px; opacity:0.95">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-gift"></i>posts List</div>
        </div>
        <div class="portlet-body">
          <div class="mycss">
            <table class="table">
              <thead>
                <tr>
                  <td>
                    <b><center>Image</center></b>
                  </td>
                  <td><b> User</b></td>
                  <td><b> Title</b></td>
                  <td><b> Description</b></td>
                </tr>
              </thead>
              <tbody>
                <tr :key="post._id" v-for="post in posts">
                  <td>
                    <div class="profile-img">
                      <img
                        :src="`http://localhost:8000/${post.image}`"
                        style="height:70px;width:70px"
                        
                        alt=""
                        
                      />
                    </div>
                  </td>
                  <td>{{ post.user }}</td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div style="textAlign: center">
            <router-link to="/post/add">
              <button class="btn btn-primary pull-right">
                Add post
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
// import FileUpload from "./FileUpload";
import axios from "axios";
import topnavbar from "./topnavbar.vue";

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {},
  components: {
    topnavbar,
    // FileUpload,
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/post")
      .then((response) => {
        this.posts = response.data;
        console.log(this.posts);
        console.log(response.data);
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
