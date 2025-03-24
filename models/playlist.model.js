const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  audios: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Audio",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
