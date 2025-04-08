const express = require("express");

const Genre = require("../models/genre.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const genre = new Genre(data);

    const newGenre = await genre.save();
    res.json({ data: newGenre }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "something went wrong." }).status(500);
  }
});

router.post("/ids", async (req, res) => {
  const { ids } = req.body;

  try {
    const resonse = await Genre.find({
      _id: {
        $in: ids,
      },
    });

    const genres = resonse.map((genre) => ({
      id: genre._id,
      title: genre.title,
      description: genre.description,
    }));

    res.json({ data: genres }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "something went wrong." }).status(500);
  }
});

router.get("/", async (req, res) => {
  try {
    let genres = await Genre.find();

    genres = genres.map((genre) => ({
      id: genre._id,
      title: genre.title,
      description: genre.description,
    }));

    res.json({ data: genres }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" }).status(500);
  }
});

module.exports = router;
