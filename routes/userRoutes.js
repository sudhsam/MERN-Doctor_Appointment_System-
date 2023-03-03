const express = require("express");
const {
  loginController,
  registerController,
} = require("../controller/userController");

//route object
const router = express.Router();

//login route post Method
router.post("/login", loginController);

//login route post Method
router.post("/register", registerController);

module.exports = router;
