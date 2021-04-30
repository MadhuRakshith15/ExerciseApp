const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const multer = require("multer");
const passportJWT = require("./server/middlewares/passportJWT")();
const errorHandler = require("./server/middlewares/errorHandler");
const postRoutes = require("./server/routes/post");
// const expenseRoutes = require("./routes/expense");
const authRoutes = require("./server/routes/auth");
const workoutsRoutes = require("./server/routes/workout");
const friendsRoutes = require("./server/routes/friendsRoute");
const exercisesRoutes = require("./server/routes/exercise");
const followRoutes = require("./server/routes/follow");
const userexerciseRoutes = require("./server/routes/userexercise");
const userworkoutsRoutes = require("./server/routes/userworkouts");

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
app.use(express.static('./server/public'));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://madhu:test123@cluster0.vfbif.mongodb.net/test", {
  useNewUrlParser: true,
}, {useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "/server/public")));
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
app.use(express.static('./server/uploads'));
app.use(errorHandler);
app.get('*', (req, res) => {
  res.sendFile( path.join(__dirname, './server/public/index.html' ) );
})

app.listen(8080, () => {
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
