const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserExercisesSchema = new Schema({
        name: { type: String, required: false },
        sets: { type: Number, required: false },
        caloriesBurnt: { type: String, required: false },
        completed: {type: String, required:false },
        timePeriod: { type: String, required:false },
        user: { type: Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("userExercises", UserExercisesSchema); 