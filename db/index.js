const mongoose = require("mongoose");

const mongoDBURL = process.env.MONGODB_URL;

const connectToDb = () => {
  mongoose
    .connect(mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "itube",
    })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.error("Connection Error:", err));
};

module.exports = connectToDb;
