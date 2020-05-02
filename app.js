var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.json()); // use the body-parser middleware, which parses request bodies into req.body
app.use(express.static('views'));

const alertRouter = require("./routes/alertRouter");
const planRouter = require("./routes/planRouter");
const taskRouter = require("./routes/taskRouter");
const requirementRouter = require("./routes/requirementRouter.js");
const forumRouter = require("./routes/forumRouter.js");

app.use("/alert", alertRouter);
app.use("/plan", planRouter);
app.use("/tasks", taskRouter);
app.use("/requirement", requirementRouter);
app.use("/user-management", forumRouter.userRouter);
app.use("/post-management", forumRouter.postRouter);
app.use("/comment-management", forumRouter.commentRouter);

// GET home page
app.get("/", (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

app.get('/alert_test',function (req, res) {
    res.send('<H1>Alert test</H1>' +
        '<a href="/plan">All Plans</a> <a href="/plan/1">Plan 1</a> <a href="/plan/2">Plan 2</a> ' +
        '<a href="/alert">Alerts</a> <a href="/alert/1">Alert 1</a> <a href="/alert/2">Alert 2</a>')
});

// start app and listen for incoming requests on port
app.listen(process.env.PORT || 3000, () => {
    console.log('Travel+ is running!');
});
