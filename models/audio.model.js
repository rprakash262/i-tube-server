const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const audioSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  singer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Singer",
  },
  description: {
    type: String,
    default: "",
  },
  visits: {
    type: String,
    default: "0",
  },
  thumbnail: {
    type: String,
  },
  tags: {
    type: [String],
    default: [],
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
});

const Audio = mongoose.model("Audio", audioSchema);

module.exports = Audio;
