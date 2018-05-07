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

var count = 0;

io.on('connection', (socket) => { //2

    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('epic_button', (data) => { //7 Recieved this message from the form, increment count and send updated message to ALL socket connections
        console.log(data.msg);
        count += 1;
        io.emit('updated_message', {msg: `The button has been pushed ${count} time(s)!`})
    socket.on('reset', (data) => {
        console.log(data.msg);
        count = 0;
        io.emit('updated_count', {msg: `The count has been reset to 0!`})
    })
    });
    

});