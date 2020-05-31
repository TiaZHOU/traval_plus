const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");
// Connect to MongoDB


mongoose.connect(db, {
      useMongoClient: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      dbName: "travelnew"
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error in connecting to DB: " + err));


require("./Comment");
require("./Post");
require("./User");
