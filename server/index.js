const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");

const passportJWT = require("./middlewares/passportJWT")();
const errorHandler = require("./middlewares/errorHandler");
const postRoutes = require("./routes/post");
const userExercisesRoutes = require("./routes/userExercise");
const userWorkoutsRoutes = require("./routes/userWorkouts");
const authRoutes = require("./routes/auth");
const workoutsRoutes = require("./routes/workout");
const friendsRoutes = require("./routes/friendsRoute");
const exercisesRoutes = require("./routes/exercise");
const followRoutes = require("./routes/follow");

const app = express();



app.use(cors());

app.enable("trust proxy");
const limiter = rateLimit({
    // 15 seconds
    windowMs: 15 * 1000,
    // limit each IP to 10 requests per windowMs
    max: 5
});

app.use(limiter);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/rest-apis", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(passportJWT.initialize());

app.use("/api/auth", authRoutes);
// app.use("/api/expense", passportJWT.authenticate(), expenseRoutes);
app.use("/api/post", passportJWT.authenticate(), postRoutes);
app.use("/api/exercises", exercisesRoutes);
app.use("/api/userExercises", userExercisesRoutes);
app.use("/api/userWorkouts",userWorkoutsRoutes);
app.use("/api/workouts", workoutsRoutes);
app.use("/api/friends", friendsRoutes);
app.use("/api/follow", passportJWT.authenticate(), followRoutes);

app.use(errorHandler);

app.listen(8000, () => {
    
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