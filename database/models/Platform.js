const { Schema, model } = require("mongoose");

const PlatformSchema = new Schema({
  platformName: { type: String },
});

const Platform = model("Platform", PlatformSchema, "platforms");

module.exports = Platform;
