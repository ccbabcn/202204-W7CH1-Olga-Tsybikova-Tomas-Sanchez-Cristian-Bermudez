const { Schema, model, default: mongoose } = require("mongoose");

const UserShcema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
  series: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "Serie" },
    watched: { type: Boolean, default: false },
  },
});

const User = model("User", UserShcema, "users");

module.exports = User;
