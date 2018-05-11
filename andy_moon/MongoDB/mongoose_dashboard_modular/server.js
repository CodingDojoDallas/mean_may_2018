var express     = require("express"),
    port        = 8000,
    app         = express(),
    path        = require('path'),
    session     = require('express-session'),
    bodyParser  = require('body-parser'),
    flash       = require('express-flash'),
    mongoose    = require('mongoose'),
    routes      = require('./server/config/routes.js');

app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(body_parser.json());
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

mongoose.Promise = global.Promise;
routes(app);

app.listen(port, function () {
  console.log("Hello? I'm listening! Do something!");
});


// var Wolf = mongoose.model('Wolf');

// require('./server/config/routes.js')(app)

// var app = express();
// var path = require("path");
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var flash = require('express-flash');