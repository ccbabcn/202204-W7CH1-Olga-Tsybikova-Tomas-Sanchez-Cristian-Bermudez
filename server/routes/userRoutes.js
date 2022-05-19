require("dotenv").config();
const express = require("express");
const { userLogin } = require("../controllers/usercontrollers");

const userRouter = express.Router();

userRouter.post("/users/login", userLogin);

module.exports = userRouter;
