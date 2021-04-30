<template>
  <div>
    <topnavbar />
    <br />
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
          <form @submit.prevent="onSubmit" enctype="multipart/form-data">
            <div class="col-md-12 mycss">
              <div class="row">
                <div class="col-md-6">
                  <p><center>Image</center></p>
                  <!-- ------fileupload part-- start------- -->
                  <div class="file">
                    <div class="fields">
                      <input type="file" ref="file" @change="onSelect" />
                    </div>

                    <div class="message">
                      <h5>{{ message }}</h5>
                    </div>
                    <!-- </form> -->
                  </div>
                  <!-- ------fileupload part end--------- -->
                </div>

                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-3"><p>User</p></div>
                    <div class="col-md-6">
                      <input type="text" v-model.trim="post.user" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3"><p>Title</p></div>
                    <div class="col-md-6">
                      <input type="text" v-model.trim="post.title" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3"><p>Description</p></div>
                    <div class="col-md-6">
                      <textarea
                        rows="3"
                        cols="23"
                        type="text"
                        v-model.trim="post.description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BR />
            <center>
              <div class="col-md-2">
                <button
                  style="heigh:2px;font-size:15px"
                  type="submit"
                  class="fields btn btn-primary btn-lg btn-block"
                >
                  Add
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import uploadApi from "@/api/files/uploadApi";
import topnavbar from "./topnavbar.vue";
import axios from "axios";
import router from "../router/index.js";

export default {
  components: { topnavbar },
  name: "FileUpload",

  data() {
    return {
      file: "",
      message: "",
      fileurl: "",
      post: {
        image: "",
        description: "",
        title: "",
        user: "",
      },
    };
  },
  methods: {
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      console.log("onselected", this.file);
      this.file = file;

      if (!allowedTypes.includes(file.type)) {
        this.message = "Filetype is wrong!!";
      }
      if (file.size > 500000) {
        this.message = "Too large, max size allowed is 500kb";
      }
      // this.onSubmit();
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      // formData.append("file", this.file);
      // formData.append("title", this.post.title);
      // formData.append("description", this.post.description);
      // formData.append("user", this.post.user);
      try {
        const response = await axios.post(
          "https://myappr.herokuapp.com/api/post/upload",
          formData
        );
        console.log("UPLOAD RESPONSE:", response);
        const imageFilePath = response.data.file;

        {
          axios
            .post("https://myappr.herokuapp.com/api/post/add", {
              user: this.post.user,
              title: this.post.title,
              image: imageFilePath,
              description: this.post.description,
            })
            .then((res) => {
              router.push("/post");
              console.log(res);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      } catch (err) {
        console.log(err);
      }
    },

    addBtnClicked() {
      // console.log(this.file.name);

      axios
        .post("https://myappr.herokuapp.com/api/post/add", {
          title: this.post.title,
          description: this.post.description,
          user: this.post.user,
          image: this.post.image
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
