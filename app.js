const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
// GET home page
app.get('/', (req, res) => {
    res.send('<H1>Travel+</H1><a href="/homepage">Homepage</a>  <a href="/alert_test">alert test</a>')
});
const alertRouter = require("./routes/alertRouter");
const planRouter = require("./routes/planRouter");
const router = require("./routes/index.js");

app.get('/homepage', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/alert_test',function (req,res) {
    res.send('<H1>Alert test</H1><a href="/plan">All Plans</a> <a href="/plan/1">Plan 1</a> <a href="/plan/2">Plan 2</a> <a href="/alert">Alerts</a> <a href="/alert/1">Alert 1</a> <a href="/alert/2">Alert 2</a>')
})
app.use("/alert", alertRouter);
app.use("/plan", planRouter);

app.use("/user-management", router.userRouter);

app.use("/post-management", router.postRouter);

app.use("/comment-management", router.commentRouter);



// start app and listen for incoming requests on port 3000
app.listen(3000, () => {
  console.log("The app is listening on port 3000!");
});
