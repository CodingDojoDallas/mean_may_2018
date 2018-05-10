var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
  response.render("index");
});
app.get("/cars", function (request, response) {
  response.render("cars");
})
app.get("/cats", function (request, response) {
  response.render("cats");
})
app.get("/cars/new", function (request, response) {
  response.render("form");
})
app.listen(8000, function () {
  console.log("listening on 8000");
})
