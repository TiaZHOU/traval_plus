const express = require('express');
const bodyParser = require("body-parser");

const app = express();

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.send("<H1>Discussion Forum system</H1>");
});

const forumRouter = require("./routes/forumRouter.js");
app.use("/forum", forumRouter);


// start app and listen for incoming requests on port 3000
app.listen(process.env.PORT || 3000, () => {
   console.log("The library app is running!");
});
