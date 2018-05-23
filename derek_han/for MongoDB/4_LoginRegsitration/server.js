
// ================ MAIN SERVER SETUP AND SETTINGS ================
// --- setting up all node js modules ---
var express = require("express");
var session = require('express-session');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var app = express();
// npm install --save mongoose-unique-validator
var uniqueValidator = require('mongoose-unique-validator');
var validator = require('validator');
const flash = require('express-flash');

// --- basic app settings views path, static path, view engine ---
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + "/static"));
app.use(bodyparser.urlencoded({extended: true}));
app.use(flash());

// setting up the session data
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

// ================ ROUTES AND CONTROLLERS ================
// --- root route to render the index.ejs page ---


// --- setting up my mongoDB and mongoose ---
mongoose.connect('mongodb://localhost/MongooseDB')
var Schema = new mongoose.Schema({
    first_name: {type: String, required: "first name is required", min: [3, "first name must have 3 characters"]},
    last_name: {type: String, required: "last name is required", min: [3, "last name must have 3 characters"]},
    email: {type: String, required: true, unique: [true, "email is taken"], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email not valid"]},
    password: {type: String, required: true, min: [8, "password must have minimum 8 characters"]},
    birthday: {type: Date, required: true}
}, {timestamps: true})
var User = mongoose.model('User', Schema);

Schema.plugin(uniqueValidator);
// Schema.plugin(validator);

// get all the critters in the db and render in the root page
app.get('/', function(req, res) {
    res.render('index');
})


// renders the new critter form page
app.get("/critters/new", function(req, res) {
    res.render("form");
})



// Registers a user 
app.post('/Register', function(req, res) { 
    if (! req.body.password ){
         req.flash('erroneous', "That password can not be empty!");
        //  res.redirect('/');
    }
    var d = new Date();

    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = yyyy + '-' + mm + '-' + dd;

    console.log(today, req.body.bday, "in 68");
    if ( Date(req.body.bday) < today ){
        req.flash('erroneous', "That bday can not be empty!");
       //  res.redirect('/');
   }       
    if (req.body.password == req.body.confirm){
       bcrypt.hash(req.body.password, 10, (err, hash) => {
            // Store hash password in DB
            if (err){
                console.log(err);
                for(var key in err.errors){
                    req.flash('erroneous', err.errors[key].message);
                }
                res.redirect('/');
            }
            else{
                var user = {first_name: req.body.first_name, last_name: req.body.last_name,
                    email: req.body.email, password: hash, birthday: req.body.bday};
                User.create(user, function(err, user){
                    if(err){
                        console.log(err);
                        for(var key in err.errors){
                            req.flash('erroneous', err.errors[key].message);
                        }
                        res.redirect('/');
                    }
                    else{
                        res.redirect('/success');
                    }
                })
            }
        });
    }
})

app.get('/success', function(req, res) {
    res.render("success");
})


app.post("/Login", function(req, res) {
    console.log("inside login", req.body.email);
    if(!req.body.password){
        req.flash('erroneous', "That password required!");
    }
    User.findOne({email: req.body.email}, function(err, user){
        if (err){
            console.log("inside if");
            for(var key in err.errors){
                req.flash('erroneous', err.errors[key].message);
            }
            res.redirect('/');
        }
        else if (user != null){
            // console.log(`inside else ${user}`);
           
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.render("success");
            }
            else{
                req.flash('erroneous', "That password is wrong!!");
                res.redirect('/');
            }
        }
        else{
            req.flash('erroneous', "That email does not exist");
            res.redirect('/');
        }
    })
})


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
    console.log("listening on port 8000");
})


 // User.find({}).exec(
    //     function(err, user){
    //     console.log("inside the User.find");
    //         if(err){
    //             console.log(err);
    //             for(var key in err.errors){
    //                 req.flash('erroneous', err.errors[key].message);
    //             }
    //             res.redirect('/');
    //         }
    //         else{
    //             console.log(`inside else statement found: ${user}`);
    //             if (bcyrpt.compareSync(req.body.password, user.password)){
    //                 res.render("/success");
    //             }
    //             else{
    //                 console.log('password failed');
    //                 res.redirect('/');
    //             }
    //         // result == true or result == false
    //         }
    //     }
    // )
