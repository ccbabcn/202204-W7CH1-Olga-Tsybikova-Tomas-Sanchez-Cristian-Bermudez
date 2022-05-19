const { Schema, default: mongoose, model } = require("mongoose");

const SerieChema = new Schema({
  name: { type: String, required: true },
  platform: [{ id: { type: mongoose.Schema.Types.ObjectId, ref: "Platfomr" } }],
});

const Serie = model("Serie", SerieChema, "series");

module.exports = Serie;
