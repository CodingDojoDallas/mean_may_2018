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
mongoose.connect('mongodb://localhost/pandas');
var PandaSchema = new mongoose.Schema({
    name: {type: String, required: "You must enter a name!"},
    age: {type: Number, required: "You must enter an age!"},
    food: { type: String, required: "You must enter a favorite food!" }
}, {timestamps: true});
mongoose.model('Panda', PandaSchema); // We are setting this Schema in our Models as 'Panda'
var Panda = mongoose.model('Panda') // We are retrieving this Schema from our Models, named 'Panda'


// All Routes
// Root Request
app.get('/', (request, response) => {
    Panda.find({}, (err, pandas) => {
        if(err){
            console.log(err);
        }
        else{
            response.render('index', { pandas: pandas });
        }
    });
});


// Add a new Panda
app.get('/panda/new', (request, response) => {
    response.render('add_panda');
});


// POST route for adding a new Panda
app.post("/pandas", (request, response) => {
    var pandas = new Panda({name: request.body.name, age: request.body.age, food: request.body.food});
    pandas.save((err) => {
        if(err){
            console.log('Something went wrong', err);
            for(var key in err.errors){
                request.flash('registration', err.errors[key].message);
            }
            response.redirect('/panda/new');
        }
        else{
            console.log('Successfully added a panda!');
            response.redirect('/');
        }
    });
});


// View a specific Panda
app.get('/panda/:id', (request, response) => {
    console.log("The panda id requested is:", request.params.id);
    Panda.findOne({_id: request.params.id}, (err, panda) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(panda);
            response.render('display', {panda: panda});
        }
    });
});


// Display a form to Edit a specific Panda
app.get('/panda/edit/:id', (request, response) => {
    console.log('The panda id requested is:', request.params.id);
    Panda.findOne({_id: request.params.id}, (err, panda) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(panda);
            response.render('edit_panda', {panda: panda});
        }
    });
});


// Edit form is submitted/processed to this route
app.post('/pandas/:id', (request, response) => {
    console.log('The panda id requested is:', request.params.id);
    Panda.update({_id: request.params.id}, {name: request.body.name, age: request.body.age, food: request.body.food }, (err) => {
        if(err){
            console.log('There was an error', err);
        }
        else{
            console.log('Successfully edited a panda!')
            response.redirect('/')
        }
    });
});

app.post('/panda/release/:id', (request, response) => {
    console.log('The panda id requested is:', request.params.id);
    Panda.remove({_id: request.params.id}, (err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log('Panda has successfully been released into the wild!')
            response.redirect('/')
        }
    });
});

// Setting our Server to Listen on Port: 6789
var server = app.listen(6789, () => {
    console.log("Running on port 6789");
});