var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(express.static(path.join(__dirname, "/static")));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(session({
    secret: '023409jdsedf',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


app.get('/', (request, response) => {
    if(!request.session.count){
        request.session.count = 0;
    }
    response.render('index')
});

app.post('/process', (request, response) => {
    request.session.name = request.body.name;
    request.session.location = request.body.location;
    request.session.language = request.body.language;
    request.session.comment = request.body.comment;
    console.log(request.session.name);
    request.session.count++;
    response.redirect('/results')
});

app.get('/results', (request, response) => {
    var context = {
        name: request.session.name,
        location: request.session.location,
        language: request.session.language,
        comment: request.session.comment,
        count: request.session.count
    }
    response.render('results', context)
});

app.listen(6789, () => {
    console.log("Running on port 6789");
});