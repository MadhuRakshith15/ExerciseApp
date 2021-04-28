const express = require ('express');
const userExercisesController = require ("../controllers/userExerciseController");
const uploadImage = require("../middlewares/multer");
const { hasDescription } = require("../validations/validators");
const router = express.Router();

router.get('/', userExercisesController.index);

router.get('/userExerciseName', userExercisesController.indexQuery);


router.post('/',
userExercisesController.store
);


// router.patch("/:id", hasDescription, expenseController.update);
// router.delete("/:id", expenseController.delete);

module.exports = router;