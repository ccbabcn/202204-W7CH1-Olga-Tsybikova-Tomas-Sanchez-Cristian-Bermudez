const { Schema, model, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
  series: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Serie" },
      watched: { type: Boolean, default: false },
    },
  ],
});

const User = model("User", UserSchema, "users");

module.exports = User;
