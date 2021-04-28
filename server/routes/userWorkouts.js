const express = require ('express');
const userWorkoutsController = require ("../controllers/userExerciseController");
const uploadImage = require("../middlewares/multer");
const { hasDescription } = require("../validations/validators");
const router = express.Router();

router.get('/', userWorkoutsController.index);

router.get('/userWorkoutName', userWorkoutsController.indexQuery);

router.post('/',
userWorkoutsController.store
);


// router.patch("/:id", hasDescription, expenseController.update);
// router.delete("/:id", expenseController.delete);

module.exports = router;