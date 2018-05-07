var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(express.static(path.join(__dirname, "/static")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(session({
    secret: '023409jdsedf',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.get('/', (request, response) => {
    response.render('index')
});

var server = app.listen(6789, () => {
    console.log("Running on port 6789");
});
const io = require('socket.io')(server);

io.on('connection', (socket) => { //2

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('posting_form', (data) => { //7
        console.log(data);
        socket.emit('updated_message', { msg: `You emitted the following information to the server: {name : ${data.name}, location: ${data.location}, language: ${data.language}, comment: ${data.comment}}. Your lucky number is: ${Math.floor((Math.random() * 999) + 1)}` })
    });
    

});