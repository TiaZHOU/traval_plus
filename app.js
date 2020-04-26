var express = require("express");
var bodyParser = require("body-parser");
var logger = require('morgan');
var app = express();

require('./models/task');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.json()); // use the body-parser middleware, which parses request bodies into req.body
app.use(express.static('views'));

// GET home page
app.get("/", (req, res) => {
  res.sendFile(__dirname +'/index.html');
});

// handle destination related requests, import task router
var taskRouter = require('./routes/taskRouter');

// the task routes are added onto the end of '/immunisation-schedule' (might change to a better string)
app.use('/travel-tasks', taskRouter);

// start app and listen for incoming requests on port
app.listen(process.env.PORT || 3000, () => {
  console.log('Travel+ is running!');
});
