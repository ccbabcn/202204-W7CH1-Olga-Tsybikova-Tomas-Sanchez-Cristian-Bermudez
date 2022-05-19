require("dotenv").config();
const express = require("express");

const userRouter = express.Router();

userRouter.post("/users/login");

module.exports = userRouter;
