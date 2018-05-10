var express = require("express");
var app = express();
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');
const saltRounds = 10;
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

mongoose.connect('mongodb://localhost/login');
var UserSchema = new mongoose.Schema({
  email: { type: String, required: "You must enter an email address.", match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], unique: "Email address is already in the database." },
  first_name: { type: String, required: "You must enter your first name.", minlength: [3, "Your first name must be longer than 3 characters."] },
  last_name: { type: String, required: "You must enter your last name.", minlength: [3, "Your last name must be longer than 3 characters."] },
  password: { type: String, required: "You must enter a password" },
  birthday: { type: Date, required: "You must enter a birthday" }
})
UserSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);
mongoose.Promise = global.Promise;
var User = mongoose.model('User');

app.get('/', function (req, res) {
  if (req.session.userid) {
    return res.redirect('/secrets')
  }
    res.render('index')
  
});
app.post('/', function (req, res) {
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
  var user = new User({ email: req.body.email, password: hash, first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday })
  user.save(function (err) {
    if (err) {
      console.log("We have an error!", err);
      for (var key in err.errors) {
        req.flash('registration', err.errors[key].message);
      }
      res.redirect('/');
    }
    else {
      req.session.userid = user._id;
      res.redirect('/secrets');
    }
  })
});
app.post('/session', function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      
      return render.json("Fields are empty")
      }
    
    if (user) {
      console.log("There is a user", user.password)
      var unhash = bcrypt.compareSync(req.body.password, user.password);
      if (unhash) {
        req.session.userid = user._id;
        return res.redirect('/secrets');
      } 
    }
    res.redirect('/');
  })
})
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/')
})

app.get('/secrets', function (req, res) {
  if (!req.session.userid) {
    res.redirect('/');
  } else {
    res.render('secrets')
  }
});



app.listen(8000, function () {
  console.log("Hello? I'm listening! Do something!");
});



