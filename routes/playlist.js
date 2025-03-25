const express = require("express");

const Playlist = require("../models/playlist.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const playlist = new Playlist(data);

    const newPlaylist = await playlist.save();
    res.json({ data: newPlaylist }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "something went wrong." }).status(500);
  }
});

router.get("/", async (req, res) => {
  try {
    let playlists = await Playlist.find();

    playlists = playlists.map((playlist) => ({
      id: playlist._id,
      title: playlist.title,
      description: playlist.description,
      thumbnail: playlist.thumbnail,
      audios: playlist.audios,
      owner: playlist.owner,
      tags: playlist.tags,
    }));

    res.json({ data: playlists }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" }).status(500);
  }
});

router.get(`/:playlistId`, async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.playlistId);

    const data = {
      id: playlist._id,
      title: playlist.title,
      description: playlist.description,
      thumbnail: playlist.thumbnail,
      audios: playlist.audios,
      owner: playlist.owner,
      tags: playlist.tags,
    };

    res.json({ data }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" }).status(500);
  }
});

router.delete(`/:playlistId`, async (req, res) => {
  try {
    const playlist = await Playlist.deleteOne({ _id: req.params.playlistId });

    res.json({ data: "deleted" }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" }).status(500);
  }
});

router.put("/", async (req, res) => {
  const data = req.body;

  const { id, ...rest } = data;
  console.log(data);

  try {
    const newPlaylist = await Playlist.findOneAndUpdate({ _id: id }, rest);
    console.log(newPlaylist);
    res.json({ data: newPlaylist }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" }).status(500);
  }
});

module.exports = router;
