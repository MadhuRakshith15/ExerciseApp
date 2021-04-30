const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserExercisesSchema = new Schema({
        name: { type: String, required: false },
        
        sets: { type: Number, required: false },
        caloriesBurnt: { type: String, required: false },
        workoutStage: { type: String, required: false },
        period: { type: String, required: false },
        completed: { type: String, required: false },
});

module.exports = mongoose.model("userexercises", UserExercisesSchema); 