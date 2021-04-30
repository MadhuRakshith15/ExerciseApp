const express = require("express");

const userworkoutsController = require("../controllers/userworkoutsController");
// const { hasDescription } = require("../validations/validators");

const router = express.Router();

router.get("/", userworkoutsController.index);
router.get("/level", userworkoutsController.indexQuery);
router.get("/:id", userworkoutsController.show);
router.post("/", userworkoutsController.store);

// router.patch("/:id", hasDescription, userworkoutsController.update);
// router.delete("/:id", userworkoutsController.delete);

// router.patch("/:id", hasDescription, employeesController.update);
// router.delete("/:id", employeesController.delete);

module.exports = router;
