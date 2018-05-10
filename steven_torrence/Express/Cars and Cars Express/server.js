var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/', function (request, response) {
    response.send("<h1>Hello! Try typing localhost:8000/cars in the URL to get to where you need to go.</h1>");
});
app.get("/cars", function (request, response) {
    response.render('cars');
});
app.get("/cats", function (request, response) {
    response.render('cats');
});
app.get("/form", function (request, response) {
    response.render('form');
});
app.listen(8000, function () {
})