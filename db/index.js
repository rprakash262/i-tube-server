const mongoose = require("mongoose");

const mongoDBURL =
  process.env.MONGODB_URL ||
  "mongodb+srv://ravi:ravi@cluster0.alaj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDb = () => {
  mongoose
    .connect(mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.error("Connection Error:", err));
};

module.exports = connectToDb;
