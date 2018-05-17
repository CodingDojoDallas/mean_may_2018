var express     = require("express"),
    port        = 8000,
    app         = express(),
    path        = require('path'),
    session     = require('express-session'),
    bodyParser  = require('body-parser'),
    flash       = require('express-flash'),
    mongoose    = require('mongoose'),
    routes      = require('./server/config/routes.js');

require('./server/config/mongoose');

// app.set('views', path.join(__dirname, '/client/views'));
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/dist/client")));
app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

routes(app);

app.listen(port, function () {
  console.log("Hello? I'm listening! Do something!");
});
