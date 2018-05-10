// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// session module
var session = require('express-session');
// io module
const server = app.listen(8000);
const io = require('socket.io')(server);
// message dictionary
var messages = [];
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
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function (req, res) {
    if (req.session.name == null) {
        var name = "Anonymous";
    } else {
        var name = req.session.name;
    }
    
    res.render("index", { name: name});
})

app.post('/', function (req, res) {
    req.session.name = req.body.name;
    res.redirect("/");
})

io.on('connection', function (socket) { //2

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server', messages: messages });
    socket.on('posting_form', function(message) {
        messages.push(message);
        io.emit('message', messages[messages.length -1]);
    });

});