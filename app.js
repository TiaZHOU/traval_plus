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

const router = require("./routes/index.js");
app.use("/user-management", router.userRouter);

app.use("/post-management", router.postRouter);

app.use("/comment-management", router.commentRouter);



// start app and listen for incoming requests on port 3000
app.listen(3000, () => {
  console.log("The app is listening on port 3000!");
});
