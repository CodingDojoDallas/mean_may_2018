var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("index");
})
app.post('/survey', function (req, res) {
  console.log(req.body);
  req.session.result = req.body
  res.redirect('/result');
})
app.get('/result', function (req, res) {
  context = req.session
  console.log("++", context)
  res.render("result");
})
app.listen(8000, function () {
  console.log("listening on port ++8000++");
});
