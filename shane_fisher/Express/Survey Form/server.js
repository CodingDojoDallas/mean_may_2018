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
    res.render("index");
})
// post route for adding a user
app.post('/result', function (req, res) {
    var info = req.body
    
    res.render("results", {info: info});
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});