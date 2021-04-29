const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserWorkoutsSchema = new Schema({
  name: { type: String, required: false },

  level: { type: String, required: false },

  period: { type: String, required: false },
  completed: { type: String, required: false },
});

module.exports = mongoose.model("userworkouts", UserWorkoutsSchema);
