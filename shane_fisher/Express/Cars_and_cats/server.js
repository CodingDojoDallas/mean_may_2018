// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function (request, response) {
     response.render('index');
});
app.get('/cars', function(req, res){
    res.render('cars');
});
app.get('/cats', function (req, res) {
    res.render('cats');
});
app.get('/boxer', function (req, res) {
    data = {
        name: "Boxer",
        age: "2",
        scratched_people: ["Bryan"],
    }
    console.log(data.scratched_people)
    res.render('details', {data : data});
}); 
app.get('/tribe', function (req, res) {
    data = {
        name : "Thundercats",
        age:  "Combined: 1",
        scratched_people: ["Mack", "Mary", "Eric", "Todd"],
    }
    console.log(data.scratched_people)
    
    res.render('details', { data: data } );
});
app.get('/green', function (req, res) {
    data = {
        name: "Greeneyes",
        age: "4",
        scratched_people: ["Brandon", "Jacob"],
    }
    console.log(data.scratched_people)
    res.render('details', { data : data });
});
app.get('/form', function (req, res) {
    res.render('form');
});
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
    console.log("listening on port 8000");
});


