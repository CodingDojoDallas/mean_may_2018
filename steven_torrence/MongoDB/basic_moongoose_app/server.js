var express = require("express");
var app = express();
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, "/static")));
// Setting our Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, '/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Setting up Session
app.use(session({
    secret: '023409jdsedf',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
//Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
// Setting up Mongoose
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'


// Routes
// Root Request
app.get('/', (request, response) => {
    User.find({}, (err, users) =>{
        // This is the method that finds all of the users from the database
        // Notice how the first parameter is the options for what to find and the second is the
        //   callback function that has an error (if any) and all of the users
        // Keep in mind that everything you want to do AFTER you get the users from the database must
        //   happen inside of this callback for it to be synchronous 
        // Make sure you handle the case when there is an error, as well as the case when there is no error
        if(err){
            console.log(err);
        }
        else{
            console.log(users)
            response.render('index', { users: users })
        }
    });
});

// Add User Request 
app.post('/users', (request, response) => {
    console.log("POST DATA:", request.body);
    // This is where we would add the user from request.body to the database.
    
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({ name: request.body.name, age: request.body.age });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save((err) => {
        // if there is an error console.log that something went wrong!
        if(err){
            console.log('something went wrong');
        } 
        else{ // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            response.redirect('/');
        }
    });
});


// Setting our Server to Listen on Port: 6789
var server = app.listen(6789, () => {
    console.log("Running on port 6789");
});