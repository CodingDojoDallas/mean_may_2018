var express = require("express");
var app = express();
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, "/static")));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'ejs');

app.use(flash());

app.use(session({
    secret: '023409jdsedf',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

mongoose.connect('mongodb://localhost/dogs');
var DogSchema = new mongoose.Schema({
    name: {type: String, required: "Only letters for dog's name"},
    age: {type: Number, required: "Only Number for dog's age"},
    color: {type: String, required: "Only letters for dog's color"},
    type: {type: String, required: "Only Number for dog's type"}
}, {timestamps: true});
mongoose.model('Dog', DogSchema); // We are setting this Schema in our Models as 'User'
var Dog = mongoose.model('Dog') // We are retrieving this Schema from our Models, named 'User'


app.get('/', (request, response) => {
    Dog.find({}, (err, dogs) => {
        if(err){
            console.log('Something went wrong!', err);
            response.redirect('/');
        }else{
            response.render('index', {dogs: dogs});
        }
    });
});


app.get('/dogs/new', (request, response) => {

    response.render('new');
})


// Add User Request 
app.post('/dogs', (request, response) => {
    console.log("POST DATA:", request.body);
 
    var dogs = new Dog({ 
        name: request.body.name, 
        age: request.body.age, 
        color: request.body.color,
        type: request.body.type
     });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    dogs.save((err) => {
        // if there is an error upon saving, use console.log to see what is in the err object
        if(err){
            console.log('something went wrong', err);
            for (var key in err.errors) {
                request.flash('registration', err.errors[key].message);
                console.log(err)
            }
            // redirect the user to an appropriate route
            response.redirect('/dogs/new');
        } 
        else{ // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
            response.redirect('/');
           
        }
    });
});
//how to find name with _id
app.get('/dogs/:id', (request, response) => {
    console.log("The user id requested in dog info is:", request.params.id);
    Dog.findOne({_id: request.params.id}, function(err, dogs) {
        
        if (err){
                    console.log("err",err);
                    //return done(err, null);
                }else{
                    // console.log(dogs, "in dogsId");
                    response.render("id", {dogs:dogs});
                }
    })
    })
    

app.get('/dogs/edit/:id', (request, response) => {
    console.log("The user id requested in get edit is:", request.params.id);
    Dog.findOne({_id: request.params.id}, function(err, dogs) {
        
        if (err){
                    console.log("err",err);
                    //return done(err, null);
                }else{
            
                    // console.log(dogs._id, "in editInfo");
                    response.render("edit", {dogs:dogs});
                }
    })
});

// app.post('/dogs/:id', (request, response) => {
//     console.log('The user id requested in post is: ', request.params.id);
//     Dog.update({_id: request.params.id}, {name: request.body.name, age: request.body.age, color: request.body.color, type: request.body.type}, (err, dogs) => {
//         if(err){
//                 console.log(err);

//             }else{
//                 console.log("successfully changed")
//                 // response.render("id" , {dogs:dogs})
//             }
        
//         })

//     })
//     // console.log(request.body, "in edit post");
//     response.redirect('/')
// })

app.post('/dogs/:id', (request, response) => {
    console.log('The user id requested in post is: ', request.params.id);
    Dog.findOne({_id: request.params.id}, (err, dogs) => {
        dogs.name = request.body.name;
        dogs.age = request.body.age;
        dogs.color = request.body.color;
        dogs.type = request.body.type;
        console.log(dogs);
        dogs.save( function(err) {
            if(err){
                console.log(err);

            }else{
                console.log("successfully changed")
                // response.render("id" , {dogs:dogs})
            }
        })

    })
    // console.log(request.body, "in edit post");
    response.redirect('/')
})

app.post('/dogs/destroy/:id', (request, response) => {
    console.log('ID in destroy is: ', request.params.id);
    Dog.remove({_id: request.params.id}, (err, dogs) => {
        if(err){
                console.log(err);

            }else{
                console.log("successfully Deleted");
                response.redirect('/');
            }
    })

})

// Setting our Server to Listen on Port: 6789
var server = app.listen(6789, () => {
    console.log("Running on port 6789");
});


//Questions...1. how can we get id number for the route. long dizits
// What's the "__v:0" in document