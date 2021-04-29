const express = require("express");
const router = express.Router();

const passportJWT = require("../middlewares/passportJWT")();
const authController = require("../controllers/authController");
const { isEmail, hasPassword, hasName } = require("../validations/validators");

router.post("/login", authController.login);
router.post("/signup", [isEmail, hasPassword], authController.signup);
router.get("/me", passportJWT.authenticate(), authController.me);


router.get("/showusers",  authController.index);

router.post("/deleteuser", authController.delete);
router.delete("/:id", authController.delete);

module.exports = router;