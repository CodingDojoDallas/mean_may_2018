// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
});


// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

	var UserSchema = new mongoose.Schema({
	 name: {type: String},
	 age: {type: Number},
	 pets: {type: String}
	}, {timestamps: true})

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'

var User = mongoose.model('User'); // We are retrieving this Schema from our Models, named 'User'

// Use native promises
mongoose.Promise = global.Promise;


app.post('/users', function(req, res) {
	console.log("POST DATA", req.body);
	// create a new User with the name and age corresponding to those from req.body
	var user = new User({name: req.body.name, age: req.body.age});
	// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.copy
	user.save(function(err) {
	// if there is an error console.log that something went wrong!
	if(err) {
	  console.log('something went wrong');
	} else { // else console.log that we did well and then redirect to the root route
	  console.log('successfully added a user!');
	  res.redirect('/');
	}

});
})


var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.pets = {name: "kjsdhf", type: "khsdkfh"}
userInstance.save(function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Update complete successfully');
	}
 // This code will run when Mongo has attempted to save the record.
 // If (err) exists, the record was not saved, and (err) contains validation errors.
 // If (err) does not exist (undefined), Mongo saved the record successfully.
})

User.update({name:"Andriana"}, {$append: {pets: [name: 'Skippy', type: 'cactus']}}, function(err){

	if(err){
		console.log(err);
	}else{
		console.log('Update complete successfully');
	}

});

// User.find({name: 'Andriana'}, function(err, user){
//  user.name = 'Andriana';
//  user.pets.push({name: 'Skippy', type: 'cactus'});
//  user.save(function(err){
//      // if save was successful awesome!
//      if(err){
// 		console.log(err);
// 	}else{
// 		console.log('Update complete successfully');
// 	}
//  })
// })




// //Delete One user
// User.remove({_id: "5af1df8e21dc313e5a998305"}, function(err){
	
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Remove data successfully");

// 	}
// });


// // Remove Evything
// User.remove({}, function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Remove Everything completely")
// 	}
// })



// User.findOne({name: "derek"}, function(err, users) {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(users);
// 	}
//  // Retrieve an array of users
//  // This code will run when the DB is done attempting to retrieve all matching records to {}
// })


// // add user
// var userInstance = new User();
// userInstance.name = 'Andriana';
// userInstance.age = "29"
// userInstance.save(function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("saved data successfully")
// 	}
// })

	//find all users
User.find({}, function(err, users) {
	if(err){
		console.log(err);
	}else{
		console.log(users);
	}
 // Retrieve an array of users
 // This code will run when the DB is done attempting to retrieve all matching records to {}
})



// Setting our Server to Listen on Port: 8000
app.listen(6789, function() {
	console.log("listening on port 6789");
})









