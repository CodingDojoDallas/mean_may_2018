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
app.get("/xwing", function (request, response) {
  var ship = { name: "X-Wing", class: "Starfighter", }
  var pilots = [
    { name: "Luke Skywalker" },
    { name: "Wedge Antilies" }
  ]
  var car = "4"
  response.render("details", {ship:ship, pilots:pilots, car:car});
})
app.get("/tantive", function (request, response) {
  var ship = { name: "TantiveIV", class: "Corvette", }
  var pilots = [
    { name: "Leia Organa" },
    { name: "Bail Organa" }
  ]
  var car = "5"
  response.render("details", {ship:ship, pilots:pilots, car:car});
})
app.get("/falcon", function (request, response) {
  var ship = { name: "Millennium Falcon", class: "Freighter", }
  var pilots = [
    { name: "Han Solo" },
    { name: "Lando Calrissian",}
  ]
  var car = "6"
  response.render("details", {ship:ship, pilots:pilots, car:car});
})
app.listen(8000, function () {
  console.log("listening on 8000");
})
