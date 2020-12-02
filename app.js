var express = require("express");
var bodyParser = require("body-parser");
const config = require('./config');
var logger = require('morgan');
var cors = require('cors');
const path = require('path');
const expressValidator = require('express-validator');
const helmet = require('helmet');
var app = express();

app.use(helmet());
app.use(logger('dev')); // dev tool
app.use(bodyParser.urlencoded({ extended: true })); // support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.json()); // use the body-parser middleware, which parses request bodies into req.body
app.use(express.static(path.join(__dirname, 'client/build'))); // Serve static files from the React app
app.use(cors());
app.use(expressValidator());

require('./models');

// Routers and routes
const alertRouter = require("./routes/alertRouter");
const taskRouter = require("./routes/taskRouter");
const requirementRouter = require("./routes/requirementRouter.js");
const forumRouter = require('./routes/api.js');

app.use('/forum', forumRouter);
app.use("/alert", alertRouter);
app.use("/tasks", taskRouter);
app.use("/requirement", requirementRouter);

// GET home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'))
});

// Start app and listen for incoming requests on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log('Travel+ is running!');
});

// Google Login
function onLoadFunction() {
  gapi.client.setApiKey('WUuWGWeveBT-0Krzfv1Fvn3D');
  gapi.client.load('plus', 'v1', function () { });
}

function start() {
  gapi.load('auth2', function () {
    auth2 = gapi.auth2.init({
      client_id: '224843828266-f10ub0u4vcqctftk6jch1840pec4k25i.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.profile'
    })
  })
}

function signInCallback(authResult) {
  if (authResult['code']) {
    $('#GoogleLogin').attr('style', 'display: none');

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/storeauthcode',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      contentType: 'application/octet-stream; charset=utf-8',
      success: function (result) {

      },
      processData: false,
      data: authResult['code']
    });
  } else {

  }
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  //console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
