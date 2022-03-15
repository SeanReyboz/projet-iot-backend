const mongoose = require("mongoose");
const { Schema } = mongoose;

// TODO: sécuriser les informations utilisateur
const accountSchema = new Schema({
  username: String,
  password: String,

  lastAuthentication: Date,
});

module.exports = mongoose.model("accounts", accountSchema);
