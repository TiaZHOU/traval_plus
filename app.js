var express = require("express");
var bodyParser = require("body-parser");
var logger = require('morgan');
var cors = require('cors');
const path = require('path');
var app = express();

app.use(logger('dev')); // dev tool
app.use(bodyParser.urlencoded({ extended: true })); // support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.json()); // use the body-parser middleware, which parses request bodies into req.body
app.use(express.static(path.join(__dirname, 'client/build'))); // Serve static files from the React app
app.use(cors());

require('./models');

const alertRouter = require("./routes/alertRouter");
const taskRouter = require("./routes/taskRouter");
const requirementRouter = require("./routes/requirementRouter.js");
const forumRouter = require("./routes/forumRouter.js");
const userRouter = require("./routes/userRouter.js");

app.use("/alert", alertRouter);
app.use("/tasks", taskRouter);
app.use("/requirement", requirementRouter);
app.use("/forum", forumRouter);
app.use("/user", userRouter);

// GET home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public', 'index.html'));
});

// start app and listen for incoming requests on port
app.listen(process.env.PORT || 3000, () => {
    console.log('Travel+ is running!');
});