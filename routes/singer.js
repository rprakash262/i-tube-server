const express = require("express");

const Singer = require("../models/singer.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const singer = new Singer(data);

    const newSinger = await singer.save();
    res.json({ data: newSinger }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "something went wrong." }).status(500);
  }
});

router.get("/", async (req, res) => {
  try {
    let singers = await Singer.find();

    singers = singers.map((singer) => ({
      id: singer._id,
      name: singer.name,
      description: singer.description,
      thumbnail: singer.thumbnail,
      industry: singer.industry,
    }));

    res.json({ data: singers }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" }).status(500);
  }
});

module.exports = router;
