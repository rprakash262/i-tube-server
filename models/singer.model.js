const mongoose = require("mongoose");

const singerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
    default: "",
  },
  industry: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Industry",
    },
  ],
});

const Singer = mongoose.model("Singer", singerSchema);

module.exports = Singer;
