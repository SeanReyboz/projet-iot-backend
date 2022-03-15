const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// TODO: à affiner: Séparer le schéma `User` du schéma `Seance`

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastAuthentication: {
    type: Date,
    default: Date.now(),
  },

  info: {
    age: Number,
    weight: Number,
  },
});

module.exports = model("User", UserSchema);
