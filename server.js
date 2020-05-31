const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");
var cors = require('cors');

const app = express();
app.use(cors());

require("./models");

app.use(express.json());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/posts/comments", require("./routes/api/comments"));
app.use("/api/posts/likes", require("./routes/api/likes"));

// Serve static assets if we're in production
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dir, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port 5000"));
