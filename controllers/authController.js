const jwt = require("jwt-simple");
const config = require("../config");

const User = require("../models/user");
const validationHandler = require("../validations/validationHandler");

exports.index = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.send(users);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      const error = new Error("Wrong Credentials");
      error.statusCode = 401;
      //  throw error;
      return res.send({ status: 401, msg: "Wrong Credentials" });
    }

    const validPassword = await user.validPassword(password);
    if (!validPassword) {
      const error = new Error("Wrong Credentials");
      error.statusCode = 401;
      //  throw error;
      return res.send({ status: 401, msg: "Wrong Credentials" });
    }

    const token = jwt.encode({ id: user.id }, config.jwtSecret);
    return res.send({ user, token, status: 200 });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    validationHandler(req);

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      const error = new Error("Email already used");
      error.statusCode = 403;
      throw error;
    }

    let user = new User();
    user.username = req.body.username;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.userName = req.body.userName;
    user.email = req.body.email;
    user.password = await user.encryptPassword(req.body.password);
    user.mobileNumber = req.body.mobileNumber;
    user.age = req.body.age;
    user.height = req.body.height;
    user.weight = req.body.weight;
    user = await user.save();

    const token = jwt.encode({ id: user.id }, config.jwtSecret);
    return res.send({ user, token });
  } catch (err) {
    next(err);
  }
};

exports.me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    return res.send(user);
  } catch (err) {
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    const user = await user.findOne({
      _id: req.params.id,
      // "contactNumber": req.query.number
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    user = await user.delete();
    res.send({ message: "successfully removed a user" });
  } catch (err) {
    next(err);
  }
};
