const express = require ('express');
const userexercisesController = require ("../controllers/userexerciseController");

const { hasDescription } = require("../validations/validators");
const router = express.Router();

router.get('/', userexercisesController.index);

router.get('/exerciseName', userexercisesController.indexQuery);

router.get("/:id", userexercisesController.show);


router.post('/',userexercisesController.store);

router.patch("/:id", hasDescription, userexercisesController.update);
router.delete("/:id", userexercisesController.delete);



module.exports = router;