const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectToDb = require("./db/index");
const industryRoutes = require("./routes/industry");
const genreRoutes = require("./routes/genre");
const singerRoutes = require("./routes/singer");
const audioRoutes = require("./routes/audio");
const playlistRoutes = require("./routes/playlist");

const app = express();

connectToDb();

app.use(express.json());

//cors
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const PORT = process.env.PORT || 8080;

app.use("/industry", industryRoutes);
app.use("/genre", genreRoutes);
app.use("/singer", singerRoutes);
app.use("/audio", audioRoutes);
app.use("/playlist", playlistRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
