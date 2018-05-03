// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// session module
var session = require('express-session');
// use body-parser!
app.use(bodyParser.urlencoded({ extended: true }));
// use module session code
app.use(session({
    secret: 'omiron',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function (req, res) {
    if (!req.session.number) {
        req.session.number = Math.floor(Math.random()* 100);
        console.log(req.session.number);
    }
    if (req.session.status) {
        var status = req.session.status;
    } else {
        var status = null;
    }
    res.render("index", {status: status, number: req.session.number});
})
app.get('/reset', function(req, res) {
    req.session.destroy();
    res.redirect('/');
})
// post route for adding a user
app.post('/check', function (req, res) {
    if (req.body.number == req.session.number) {
        req.session.status = "correct";
    } else {
        if (req.body.number < req.session.number) {
            req.session.status = "too low";
        } else {
            req.session.status = "too high";
        }
    }
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});