const UserExercises = require("../models/userExercise");
const validationHandler = require("../validations/validationHandler");
const url = require('url');  
const querystring = require('querystring');

exports.index = async (req, res) => {
    try {
        const userExercises = await UserExercises.find({
        }).sort({ createdAt: -1 });
        res.send( userExercises);
    } catch (err) {
        next(err);
    }
};  

exports.indexQuery = async (req, res) => {
    try {
        const userExercises = await UserExercises.find({
            "userExercise": req.query.exercise
        }).sort({ createdAt: -1 });
        res.send( userExercises);
    } catch (err) {
        next(err);
    }
}



exports.store = async(req, res, next) => {
  try {
      validationHandler(req);
      let userExercises = new UserExercises();
      userExercises.name = req.body.name;
      userExercises.sets = req.body.sets;
      userExercises.caloriesBurnt = req.body.caloriesBurnt;
      userExercises.completed = req.body.completed;
      userExercises.timePeriod = req.body.timePeriod;
      userExercises.user = req.user;
      userExercises = await userExercises.save();
      res.send(userExercises);

  }catch(err){
      next(err);
  }
}


  exports.delete = async(req, res, next) => {
    try {
        let userExercises = await UserExercises.findById(req.params.id);
        userExercises = await userExercises.delete();
        res.send({"message":"successfully removed the client"});
  
    }catch(err){
        next(err);
    }
  }