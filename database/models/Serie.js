const { Schema, default: mongoose, model } = require("mongoose");

const SerieSchema = new Schema({
  title: { type: String, required: true },
  platform: [{ id: { type: mongoose.Schema.Types.ObjectId, ref: "Platfomr" } }],
});

const Serie = model("Serie", SerieSchema, "series");

module.exports = Serie;
