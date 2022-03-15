const mongoose = require("mongoose");
const { Schema } = mongoose;

//  TODO Voir comment lier plusieurs schema mongo entre eux !
const SeanceSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },

  duration: {
    type: Number,
    required: true,
  },

  bpm: {
    min: Number,
    max: Number,
    average: Number,
  },

  pressions: {
    total: Number,
  },
});

module.exports = mongoose.model("Seance", SeanceSchema);
