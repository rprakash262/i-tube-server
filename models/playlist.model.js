const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  thumbnail: {
    type: String,
    default:
      "https://jdnnhpkgrugqtpwfozux.supabase.co/storage/v1/object/public/itube/thumbnails/360_F_320567729_aIbFC4DPHx56oEx1ZtqubZx9o3v5Ldfl.jpg",
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
    default: null,
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
