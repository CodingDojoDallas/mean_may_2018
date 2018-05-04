var bodyParser = require('body-parser');
var express = require("express");
var session = require('express-session');
var app = express();

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
  // set the name property of session.  
  req.session.name = req.body.name;
  console.log(req.session.name);
  //code to add user to db goes here!
  // redirect the user back to the root route. 
  res.redirect('/');
});

app.get("/users/:id", function (req, res){
  console.log("The user id requested is:", req.params.id);
  // just to illustrate that req.params is usable here:
  res.send("You requested the user with id: " + req.params.id);
  // code to get user from db goes here, etc...
});

app.listen(8000, function () {
  console.log("testing on 8000");
})
