require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../../database/models/User");

const userLogin = (req, res, next) => {
  const { username, password } = req.body;

  const user = User.findOne({ username });
  if (!user) {
    const error = new Error("There is no user with this name...");
    error.statusCode = 403;

    next(error);
  } else {
    const matchingPassword = bcrypt.compare(password, user.password);

    const userData = {
      username: user.username,
      password: user.password,
    };

    if (!matchingPassword) {
      const error = new Error("Password is wrong...Please, try again...");
      error.code = 403;
      error.customError = "Oops, can't let you in with this password...";
      next(error);
    } else {
      const token = 
    }
  }
};

module.exports = {
  userLogin,
};
