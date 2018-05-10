var express = require("express");
var app = express();
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name: { type: String, required: "Name is required.", minlength: [10, 'Try again slick']},
  age: { type: Number, required: "Age is required.", min: [3, "Must be above 3 years old."]}
})
mongoose.model('User', UserSchema); // We ,are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

app.get('/', function (req, res) {
  User.find({}, function (err, users) {
    
    console.log("++", err);
    console.log(users);
    res.render('index', {users:users});    // This is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous 
    // Make sure you handle the case when there is an error, as well as the case when there is no error
  })
});
// Use native promises
mongoose.Promise = global.Promise;

app.post('/users', function (req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({ name: req.body.name, age: req.body.age });
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function (err) {
    // if there is an error console.log that something went wrong!
    if(err){
      // if there is an error upon saving, use console.log to see what is in the err object 
      console.log("We have an error!", err);
      // adjust the code below as needed to create a flash message with the tag and content you would like
      for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
      }
      // redirect the user to an appropriate route
      res.redirect('/');
  }
  else {
      res.redirect('/users');
    }
  })
})

app.listen(8000, function () {
  console.log("listening on port 8000++");
});
