require("dotenv").config();

const debug = require("debug")("series:root");
const chalk = require("chalk");
const connectDataBase = require("./database");
const initializeServer = require("./server/initializeServer");

(async () => {
  try {
    await connectDataBase(process.env.MONGO_STRING);
    await initializeServer(process.env.SERVER_PORT || 4005);
  } catch {
    debug(chalk.red("Error initializing server"));
  }
})();
