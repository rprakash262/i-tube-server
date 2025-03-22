const express = require("express");

const audioModel = require("../models/audio");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let audios = await audioModel.find();
    res.send(audios).status(200);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const data = req.body;

  const newAudio = new audioModel({
    ...data,
    visits: "0",
  });

  try {
    const response = await newAudio.save();
    console.log(res);
    res.json({newSong: response})
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
