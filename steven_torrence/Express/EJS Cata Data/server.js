var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/', function (request, response) {
    response.send("<h1>Hello! Try typing localhost:8000/cats in the URL to get to where you need to go.</h1>");
});
app.get("/cats", function (request, response) {
    response.render('cats');
});
app.get("/first_cat", function (request, response) {
    var sleeping_spots = [
        { spot: 'Hidden in the tall grass' },
        { spot: 'In the sun' },
        { spot: 'In the mud' },
        { spot: 'Under the stars' }
    ];
    response.render('first', { sleeping: sleeping_spots });
});
app.get("/second_cat", function (request, response) {
    var sleeping_spots = [
        { spot: 'Under the couch' },
        { spot: 'In the yard' },
        { spot: 'In the kitchen' },
        { spot: "Can't sleep until I catch that mouse..." }
    ];
    response.render('second', { sleeping: sleeping_spots });
});
app.get("/third_cat", function (request, response) {
    var sleeping_spots = [
        { spot: 'Anywhere in Wakanda!' },
        { spot: 'In the Quinjet' },
        { spot: 'Stark Headquarters' },
    ];
    response.render('third', { sleeping: sleeping_spots });
});
app.listen(8000, function () {
});

// var sleeping_spots = [
//     { food: 'Gazelle', age: '15', [{spots: 'Hidden in the tall grass'}, {spot: 'In the sun'}, {spot: 'In the mud'}, {spot: 'Under the stars'}]},
// ]