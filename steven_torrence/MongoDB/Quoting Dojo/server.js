var express = require("express");
var app = express();
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');
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
//Setting up Flash messages
app.use(flash());
// Setting up Session
app.use(session({
    secret: '023409jdsedf',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
//Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
// Setting up Mongoose
mongoose.connect('mongodb://localhost/quotes');
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quote: {type: String, required: true}
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'


// Routes
// Root Request
app.get('/', (request, response) => {
    // User.find({}, (err, users) => {
    //     // This is the method that finds all of the users from the database
    //     // Notice how the first parameter is the options for what to find and the second is the
    //     //   callback function that has an error (if any) and all of the users
    //     // Keep in mind that everything you want to do AFTER you get the users from the database must
    //     //   happen inside of this callback for it to be synchronous 
    //     // Make sure you handle the case when there is an error, as well as the case when there is no error
    // });
    response.render('index');
});

// Add User Request 
app.post('/quotes', (request, response) => {
    console.log("POST DATA:", request.body);
    // This is where we would add the user from request.body to the database.
    
    // create a new User with the name and age corresponding to those from req.body
    var quotes = new Quote({ name: request.body.name, quote: request.body.quote });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    quotes.save((err) => {
        // if there is an error upon saving, use console.log to see what is in the err object
        if(err){
            console.log('something went wrong', err);
            for (var key in err.errors) {
                request.flash('registration', err.errors[key].message);
                console.log(err)
            }
            // redirect the user to an appropriate route
            response.redirect('/');
        } 
        else{ // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
            Quote.find({}, (err, quotes) => {
                // This is the method that finds all of the users from the database
                // Notice how the first parameter is the options for what to find and the second is the
                //   callback function that has an error (if any) and all of the users
                // Keep in mind that everything you want to do AFTER you get the users from the database must
                //   happen inside of this callback for it to be synchronous 
                // Make sure you handle the case when there is an error, as well as the case when there is no error
                response.render('quotes', { quotes: quotes });
            });
        }
    });
});


// Setting our Server to Listen on Port: 6789
var server = app.listen(6789, () => {
    console.log("Running on port 6789");
});