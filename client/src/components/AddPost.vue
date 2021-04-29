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
          <div class="caption"><i class="fa fa-gift"></i>posts List</div>
        </div>
        <div class="portlet-body">
          <form v-on:submit.prevent="addBtnClicked">
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
                  <input type="text" v-model.trim="post.user" />

                  <p>Title</p>
                  <input type="text" v-model.trim="post.title" />
                  <p>Description</p>

                  <textarea
                    rows="4"
                    cols="22"
                    type="text"
                    v-model.trim="post.description"
                  />
                </div>
              </div>
            </div>
            <br />

            <div style="textAlign: center">
              <a>
                <button class="btn btn-primary pull-right">
                  Add Post
                </button>
              </a>
            </div>
          </form>

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
import router from "../router/index.js";
export default {
  components: { topnavbar, FileUpload },
  name: "addpost",
  data() {
    return {
      post: {
        imageurl: "",
        user: "",
        title: "",
        description: "",
      },
      error: "",
    };
  },

  methods: {
    validateFields() {
      if (this.post.imageurl.length === 0) {
        this.error = "Image should not be empty";
        return false;
      }

      if (this.post.description.length === 0) {
        this.error = "description should not be empty";
        return false;
      }

      if (this.post.title.length === 0) {
        this.error = "title is required";
        return false;
      }

      if (this.post.user.length === 0) {
        this.error = "user should not be empty";
        return false;
      }

      return true;
    },

    addBtnClicked() {
      axios
        .post("http://localhost:8000/api/post", {
          image: this.post.imageurl,
          user: this.post.user,
          title: this.post.title,
          description: this.post.description,
        })
        .then((res) => {
          router.push("/posts");
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  resetForm() {
    this.post.image = null;
    this.post.user = null;
    this.post.description = null;
    this.post.title = null;
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
