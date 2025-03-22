const express = require("express");
// const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const audioRoutes = require("./routes/audio");
const connectToDb = require("./db/index");
// const mongoDBURL = process.env.MONGODB_URL;

const app = express();

connectToDb();
// mongoose
//   .connect(mongoDBURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: "itube",
//   })
//   .then(() => console.log("Connection Successful"))
//   .catch((err) => console.error("Connection Error:", err));

// body-parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
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

app.use("/audio", audioRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
