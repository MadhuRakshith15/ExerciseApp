const userExercises = require("../models/userexercise");
const validationHandler = require("../validations/validationHandler");
const url = require("url");
const querystring = require("querystring");

exports.index = async (req, res) => {
  try {
    const userexercises = await userExercises.find({}).sort({ createdAt: -1 });
    res.send(userexercises);
  } catch (err) {
    next(err);
  }
};

exports.indexQuery = async (req, res) => {
  try {
    const userexercises = await userExercises
      .find({
        exercise: req.query.exercise,
      })
      .sort({ createdAt: -1 });
    res.send(userexercises);
  } catch (err) {
    next(err);
  }
};

exports.indexQuery = async (req, res) => {
  try {
    const userexercises = await userExercises
      .find({
        name: req.query.name,
      })
      .sort({ createdAt: -1 });
    res.send(userexercises);
  } catch (err) {
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    const userexercises = await userExercises.findOne({
      _id: req.params.id,
      // "contactNumber": req.query.number
    });
    res.send(userexercises);
  } catch (err) {
    next(err);
  }
};

exports.store = async (req, res, next) => {
  try {
    validationHandler(req);
    let userexercises = new userExercises();

    userexercises.name = req.body.name;

    userexercises.sets = req.body.sets;
    userexercises.caloriesBurnt = req.body.caloriesBurnt;
    userexercises.workoutStage = req.body.workoutStage;
    userexercises.period = req.body.period;
    userexercises.completed = req.body.completed;

    userexercises = await userexercises.save();
    res.send(userexercises);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    validationHandler(req);
    // this "Post.findById(req.params.id)" is method done by mongoose option
    let exercises = await Exercise.findById(req.params.id);
    exercises.description = req.body.description;
    exercises.name = req.body.name;
    exercises.address = req.body.address;
    exercises.contactNumber = req.body.contactNumber;
    exercises.contactName = req.body.contactName;
    exercises = await exercises.save();
    res.send(exercises);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    let exercises = await Exercises.findById(req.params.id);
    exercises = await exercises.delete();
    res.send({ message: "successfully removed the client" });
  } catch (err) {
    next(err);
  }
};
