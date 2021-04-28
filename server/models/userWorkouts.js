const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserWorkoutsSchema = new Schema({
    name: { type: String, required: true },
    sets: { type: String, required: false },
    caloriesBurnt: { type: String, required: false },
    completed: {type: String, required:false },
    timePeriod: { type: String, required:false },
    workoutTypes: {type: String, required:false},
    user: { type: Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("userWorkouts", UserWorkoutsSchema);