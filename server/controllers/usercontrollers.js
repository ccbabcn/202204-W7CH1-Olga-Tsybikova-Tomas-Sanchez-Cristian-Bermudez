const debug = require("debug")("series:server:controller");
const bcrypt = require("bcrypt");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");

const User = require("../../database/models/User");

const registrerUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    const error = new Error();
    error.statusCode = 409;
    error.customMessage = "user already exists";

    next(error);
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      username,
      password: encryptedPassword,
    });

    res
      .status(201)
      .json({ user: { username: newUser.username, id: newUser.id } });
    debug(chalk.green("User added"));
  } catch (error) {
    error.statusCode = 400;

    error.customMessage = "wrong user data";
    debug(chalk.red("Failed to create user"));

    next(error);
  }
};

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
      const token = jwt.sign(userData, process.env.JWT_SECRET);
      res.json(token);
    }
  }
};

module.exports = {
  registrerUser,
  userLogin,
};
