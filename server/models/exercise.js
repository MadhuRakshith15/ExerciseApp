const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
        name: { type: String, required: false },
        description: { type: String, required: false },
        sets: { type: Number, required: false },
        caloriesBurnt: { type: String, required: false },
        workoutStage: { type: String, required: false },
});

module.exports = mongoose.model("exercises", ExercisesSchema); 