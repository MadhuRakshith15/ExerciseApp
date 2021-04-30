const userWorkouts = require("../models/userworkout");
const validationHandler = require("../validations/validationHandler");
const url = require("url");
const querystring = require("querystring");

exports.index = async (req, res) => {
  try {
    const userworkouts = await userWorkouts.find({}).sort({ createdAt: -1 });
    res.send(userworkouts);
  } catch (err) {
    next(err);
  }
};

exports.indexQuery = async (req, res) => {
  try {
    const userworkouts = await userWorkouts
      .find({
        exercise: req.query.exercise,
      })
      .sort({ createdAt: -1 });
    res.send(userworkouts);
  } catch (err) {
    next(err);
  }
};

exports.indexQuery = async (req, res) => {
  try {
    const userworkouts = await userWorkouts
      .find({
        name: req.query.name,
      })
      .sort({ createdAt: -1 });
    res.send(userworkouts);
  } catch (err) {
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    const userworkouts = await userWorkouts.findOne({
      _id: req.params.id,
      // "contactNumber": req.query.number
    });
    res.send(userworkouts);
  } catch (err) {
    next(err);
  }
};

exports.store = async (req, res, next) => {
  try {
    let userworkouts = new userWorkouts();

    userworkouts.name = req.body.name;

    userworkouts.level = req.body.level;

    userworkouts.period = req.body.period;
    userworkouts.completed = req.body.completed;

    userworkouts = await userworkouts.save();
    res.send(userworkouts);
  } catch (err) {
    next(err);
  }
};

// exports.update = async(req, res, next) => {
//     try {
//         validationHandler(req);
//         // this "Post.findById(req.params.id)" is method done by mongoose option
//         let exercises = await Exercise.findById(req.params.id);
//         exercises.description = req.body.description;
//         exercises.name= req.body.name;
//         exercises.address= req.body.address;
//         exercises.contactNumber= req.body.contactNumber;
//         exercises.contactName= req.body.contactName;
//         exercises = await exercises.save();
//         res.send(exercises);

//     }catch(err){
//         next(err);
//     }
//   }

//   exports.delete = async(req, res, next) => {
//     try {
//         let exercises = await Exercises.findById(req.params.id);
//         exercises = await exercises.delete();
//         res.send({"message":"successfully removed the client"});

//     }catch(err){
//         next(err);
//     }
//   }
