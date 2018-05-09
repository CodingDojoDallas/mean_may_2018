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
mongoose.connect('mongodb://localhost/dashboard');
var WolfSchema = new mongoose.Schema({
  name: { type: String, required: "Name is required", min: [2, "Name needs to be greater than 3 characters"] },
  color: { type: String, required: "Color is required" },
  stripes: { type: String, required: "Does the wolf have stripes?" },
  sex: { type: String, required: "Male or Female?" },
  age: { type: Number, required: "How old is the wolf??" }
}, { timestamps: true });
mongoose.model('Wolf', WolfSchema);
mongoose.Promise = global.Promise;
var Wolf = mongoose.model('Wolf');

app.get('/', function (req, res) {
  Wolf.find({}, function (err, wolves) {
    res.render('index', { wolves: wolves });
  });
});
app.get('/animal/new', function (req, res) {
  res.render('new');
});
app.get('/animal/:id', function (req, res) {
  Wolf.findOne({ _id: req.params.id }, function (err, info) {
    res.render('info', { info: info });
  });
});

app.get('/animal/edit/:id', function (req, res) {
  Wolf.findOne({ _id: req.params.id }, function (err, info) {
    res.render('edit', { info: info });
  });
});

app.post('/animals', function (req, res) {
  // console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var wolf = new Wolf({ name: req.body.name, color: req.body.color, stripes: req.body.stripes, sex: req.body.sex, age: req.body.age, });
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  wolf.save(function (err) {
    // if there is an error console.log that something went wrong!
    if (err) {
      // if there is an error upon saving, use console.log to see what is in the err object 
      console.log("We have an error!", err);
      // adjust the code below as needed to create a flash message with the tag and content you would like
      for (var key in err.errors) {
        req.flash('registration', err.errors[key].message);
      }
      res.redirect('/animal/new');
    }
    else {
      res.redirect('/');
    }
  });
});
app.post('/animal/:id', function (req, res) {
  // var wolf = new Wolf({ name: req.body.name, color: req.body.color, stripes: req.body.stripes, sex: req.body.sex, age: req.body.age, });
  Wolf.update({_id:req.params.id}, req.body, function (err) {
      if (err) {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
        res.redirect('/animal/edit/'+req.params.id);
      }
      else {
        res.redirect('/');
      }
    });
  });
app.get('/animal/destroy/:id', function (req, res) {
  // var wolf = new Wolf({ name: req.body.name, color: req.body.color, stripes: req.body.stripes, sex: req.body.sex, age: req.body.age, });
  Wolf.remove({_id:req.params.id}, function (err) {
      if (err) {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash('registration', err.errors[key].message);
        }
      }
        
      res.redirect('/');
    
    });
  });




app.listen(8000, function () {
  console.log("Hello? I'm listening! Do something!");
});