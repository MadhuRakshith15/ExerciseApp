const UserWorkouts = require("../models/userWorkouts");
const validationHandler = require("../validations/validationHandler");
const url = require('url');  
const querystring = require('querystring');

exports.index = async (req, res) => {
    try {
        const userWorkouts = await UserWorkouts.find({
        }).sort({ createdAt: -1 });
        res.send( userWorkouts);
    } catch (err) {
        next(err);
    }
};  

exports.indexQuery = async (req, res) => {
    try {
        const userWorkouts = await UserWorkouts.find({
            "userWorkout": req.query.exercise
        }).sort({ createdAt: -1 });
        res.send( userWorkouts);
    } catch (err) {
        next(err);
    }
}



exports.store = async(req, res, next) => {
  try {
      validationHandler(req);
      let userWorkouts = new UserWorkouts();
      userWorkouts.name = req.body.name;
      userWorkouts.sets = req.body.sets;
      userWorkouts.caloriesBurnt = req.body.caloriesBurnt;
      userWorkouts.completed = req.body.completed;
      userWorkouts.timePeriod = req.body.timePeriod;
      userWorkouts.workoutTypes = req.body.timePeriod;
      userWorkouts.user = req.user;
      userWorkouts = await userWorkouts.save();
      res.send(userWorkouts);

  }catch(err){
      next(err);
  }
}


  exports.delete = async(req, res, next) => {
    try {
        let userWorkouts = await UserWorkouts.findById(req.params.id);
        userWorkouts = await userWorkouts.delete();
        res.send({"message":"successfully removed the Workouts"});
  
    }catch(err){
        next(err);
    }
  }