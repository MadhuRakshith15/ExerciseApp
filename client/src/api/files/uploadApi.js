// import * as domain from "../../api/constants/domain";

const axios = require("axios");

export default {
  async addFile(formData) {
    axios
      .post("https://myappr.herokuapp.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
      .then((res) => console.log(res));
  },
};

