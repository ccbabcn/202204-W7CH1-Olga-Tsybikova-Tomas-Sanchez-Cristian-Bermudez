require("dotenv").config();
const debug = require("debug")("series:root");
const chalk = require("chalk");

// eslint-disable-next-line no-unused-vars
const generalError = (error, req, res, next) => {
  debug(chalk.red(`Error: ${error.message}`));
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.errorMessage ? error.errorMessage : "Severe Error";

  res.status(statusCode).json({ message: errorMessage });
};

module.exports = { generalError };
