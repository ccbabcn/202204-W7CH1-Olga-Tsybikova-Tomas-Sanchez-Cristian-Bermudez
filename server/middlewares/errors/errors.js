const chalk = require("chalk");
const debug = require("debug")("series:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404).json({ message: "This endpoint was not found" });
  debug(chalk.red("Recieved a request for an unexisting endpoint"));
};

// eslint-disable-next-line no-unused-vars
const generalError = (error, req, res, next) => {
  debug(chalk.red(`Error: ${error.message}`));
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.message ? error.message : "Server Error";

  res.status(statusCode).json({ message: errorMessage });
};

module.exports = {
  notFoundError,
  generalError,
};
