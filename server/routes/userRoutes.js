require("dotenv").config();
const express = require("express");
const { userLogin, registrerUser } = require("../controllers/usercontrollers");

const userRouter = express.Router();

userRouter.post("/users/login", userLogin);
userRouter.post("/users/register", registrerUser);
module.exports = userRouter;
