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
    
    response.render('index', { count: request.session.count })
});

app.post('/count', (request, response) => {
    request.session.count++;
    console.log(request.session.count);
    response.redirect('/')
});

app.post('/double', (request, response) => {
    request.session.count += 2;
    console.log(request.session.count);
    response.redirect('/')
});

app.post('/delete', (request, response) => {
    request.session.destroy();
    response.redirect('/')
});

app.listen(6789, () => {
    console.log("Running on port 6789");
});