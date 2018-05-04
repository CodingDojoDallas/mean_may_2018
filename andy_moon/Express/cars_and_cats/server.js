// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();
app.use(express.static(__dirname + "/static"));

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response){
  // use the response object's .send() method to respond with an h1
     response.send("<h1>Hello from server.js file.</h1>");
});
app.get("/cars.html", function(request, response){
  response.render("cars.html");
})



app.listen(8000, function() {
  console.log("listening on port 8000");
})
