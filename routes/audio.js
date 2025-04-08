const express = require("express");

const Audio = require("../models/audio.model");
const Singer = require("../models/singer.model");
const { default: mongoose } = require("mongoose");
const Genre = require("../models/genre.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let audios = await Audio.find();

    audios = audios.map((audio) => ({
      id: audio._id.toString(),
      title: audio.title,
      description: audio.description,
      url: audio.url,
      visits: audio.visits,
      thumbnail: audio.thumbnail,
      tags: audio.tags,
      genre: audio.genre,
      singer: audio.singer,
    }));

    res.json({ data: audios }).status(200);
  } catch (err) {
    console.log(err);
    res.json({ error: "Something went wrong." }).status(500);
  }
});

router.get(`/:audioId`, async (req, res) => {
  try {
    const audio = await Audio.findById(req.params.audioId);

    const data = {
      id: audio._id,
      title: audio.title,
      description: audio.description,
      url: audio.url,
      visits: audio.visits,
      thumbnail: audio.thumbnail,
      tags: audio.tags,
      genre: audio.genre,
      singer: audio.singer,
    };

    res.json({ data }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" }).status(500);
  }
});

router.post("/", async (req, res) => {
  const data = req.body;
  const newAudio = new Audio(data);

  try {
    const response = await newAudio.save();
    res.json({ data: response }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong." }).status(500);
  }
});

router.put("/:audioId", async (req, res) => {
  const data = req.body;

  try {
    const response = await Audio.findByIdAndUpdate(req.params.audioId, data);
    res.json({ data: response }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong." }).status(500);
  }
});


router.patch("/", (req, res) => {
  const data = req.body;
  const updatedAudio = new Audio();
  try {
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong." }).status(500);
  }
});

module.exports = router;
