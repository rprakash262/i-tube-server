const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});

const Industry = mongoose.model("Industry", industrySchema);

module.exports = Industry;
