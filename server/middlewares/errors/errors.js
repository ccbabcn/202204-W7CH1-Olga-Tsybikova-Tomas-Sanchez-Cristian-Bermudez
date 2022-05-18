const chalk = require("chalk");

require("dotenv").cofing();
const debug = require("debug")("series:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404).json({ msg: "This endpoint was not found" });
  debug(chalk.red("Recieved a request for an unexisting endpoint"));
};

module.exports = {
  notFoundError,
};
