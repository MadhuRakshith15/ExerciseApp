const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const multer = require("multer");
const passportJWT = require("./middlewares/passportJWT")();
const errorHandler = require("./middlewares/errorHandler");
const postRoutes = require("./routes/post");
// const expenseRoutes = require("./routes/expense");
const authRoutes = require("./routes/auth");
const workoutsRoutes = require("./routes/workout");
const friendsRoutes = require("./routes/friendsRoute");
const exercisesRoutes = require("./routes/exercise");
const followRoutes = require("./routes/follow");
const userexerciseRoutes = require("./routes/userexercise");
const userworkoutsRoutes = require("./routes/userworkouts");

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.options("*", cors());

app.use(cors());

app.enable("trust proxy");
const limiter = rateLimit({
  // 15 seconds
  windowMs: 15 * 1000,
  // limit each IP to 10 requests per windowMs
  max: 5,
});

app.use((err, req, res, next) => {
  if (err.code === "INCORRECT_FILETYPE") {
    res.status(422).json({ error: "Only images are allowed" });
    return;
  }
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(422).json({ error: "Allow file size is 500KB" });
    return;
  }
});

app.use(express.static(__dirname));

// app.use(multer({ storage: storageConfig }).single('filedata'));

// -------------end File upload---------
app.use(express.static('./public'));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://madhu:test123@cluster0.vfbif.mongodb.net/test", {
  useNewUrlParser: true,
}, {useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use(passportJWT.initialize());

app.use("/api/auth", authRoutes);
// app.use("/api/expense", passportJWT.authenticate(), expenseRoutes);
app.use("/api/post", postRoutes);
app.use("/api/exercises", exercisesRoutes);
app.use("/api/workouts", workoutsRoutes);
app.use("/api/friends", friendsRoutes);
app.use("/api/userexercise", userexerciseRoutes);
app.use("/api/userworkouts", userworkoutsRoutes);
app.use("/api/follow", passportJWT.authenticate(), followRoutes);
app.use(express.static('./uploads'));
app.use(errorHandler);
app.get('*', (req, res) => {
  res.sendFile( path.join(__dirname, './public/index.html' ) );
})




// app.listen(port);
app.listen(port, () => {
  console.log("port number: "+port);
  console.log(`       
░█──░█ ░█▀▀▀ ░█─── ░█▀▀█ ░█▀▀▀█ ░█▀▄▀█ ░█▀▀▀ 　 
░█░█░█ ░█▀▀▀ ░█─── ░█─── ░█──░█ ░█░█░█ ░█▀▀▀ 　 
░█▄▀▄█ ░█▄▄▄ ░█▄▄█ ░█▄▄█ ░█▄▄▄█ ░█──░█ ░█▄▄▄ 　 

░█▀▀█ ─█▀▀█ ░█▀▀█ ░█─▄▀ 　 
░█▀▀▄ ░█▄▄█ ░█─── ░█▀▄─ 　 
░█▄▄█ ░█─░█ ░█▄▄█ ░█─░█ 　 

    `);

  console.log(`
█▀ ▀█▀ ▄▀█ █▀█ ▀█▀ █ █▄░█ █▀▀   █▀ █▀▀ █▀█ █ █ █▀▀ █▀█   
▄█  █  █▀█ █▀▄  █  █ █░▀█ █▄█   ▄█ ██▄ █▀▄ ▀▄▀ ██▄ █▀▄ ▄ ▄
    `);
});
