var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var models = require('./server/models/panda.js')
var db_connect = require('./server/config/mongoose.js')

app.use(express.static(path.join(__dirname, "client/static")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');

// All Routes
// Root Request
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 6789
var server = app.listen(6789, () => {
    console.log("Running on port 6789");
});