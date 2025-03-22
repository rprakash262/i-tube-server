const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AudioSchema = new Schema({
  url: String,
  title: String,
  singer: String,
  description: String,
  visits: String,
  thumbnail: String,
  tags: [String],
});

// Compile model from schema
const audioModel = mongoose.model("audios", AudioSchema);

module.exports = audioModel;
