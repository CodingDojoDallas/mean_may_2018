

// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
// Body parsing - req.body
var bodyParser = require('body-parser');
// session module
var session = require('express-session');
// mongoose db manipulation
var mongoose = require('mongoose')

// use body-parser!
app.use(bodyParser.urlencoded({ extended: true }));
// use module session code
app.use(session({
    secret: 'f8382-83838dk-83832lla-13423br',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
}))
// static content
app.use(express.static(__dirname + '/client/dist/client'));


// this route will be triggered if any of the routes above did not match
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});



require('./server/config/mongoose');


require('./server/config/routes.js')(app)


app.listen(8000, function () {
    console.log("listening on port 8000");
})

