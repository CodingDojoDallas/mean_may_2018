var Dog = require('../models/dog');

module.exports = {
	index: (req, res) => {
		Dog.find({}, (err, dogs) => {
	        if(err){
	            console.log('Something went wrong!', err);
	            res.redirect('/');
	        }else{
	            res.render('index', {dogs: dogs});
	        }
	    });

	},

	new: (req, res) => {
		res.render('new');
	},

	create: (req, res) => {
		var dogs = new Dog({ 

	        name: req.body.name, 
	        age: req.body.age, 
	        color: req.body.color,
	        type: req.body.type

     	});
		
		dogs.save((err) => {
	        if(err){
	            console.log('something went wrong', err);
	            for (var key in err.errors) {
	                req.flash('registration', err.errors[key].message);
	                console.log(err)
	           	}
	            // redirect the user to an appropriate route
	            res.redirect('/dogs/new');
	        } 
	        else{ // else console.log that we did well and then redirect to the root route
	            console.log('successfully added a quote!');
	            res.redirect('/');
	           
	        }
    });

	},
	show: (req, res) => {
		Dog.findOne({_id: req.params.id}, (err, dogs) => {
    		if (err){
                console.log("err",err);
            }else{
                res.render("id", {dogs:dogs});
            }
    	})
	},

	update: (req, res) => {
		Dog.findOne({_id: req.params.id}, (err, dogs) => {
        	if (err){
                console.log("err",err);
            }else{
            	res.render("edit", {dogs:dogs});
            }
    	})
		
	},

	edit: (req, res) => {
		Dog.findOne({_id: req.params.id}, (err, dogs) => {
	        dogs.name = req.body.name;
	        dogs.age = req.body.age;
	        dogs.color = req.body.color;
	        dogs.type = req.body.type;	


	        dogs.save( (err)  =>{
	            if(err){
	                console.log(err);

	            }else{
	                console.log("successfully changed");
	            }
       		})

    	})
    	response.redirect('/');
	},

	destroy: (req, res) => {
		console.log("Here!");
		Dog.remove({_id: req.params.id }, (err, dogs) => {
	        if(err){
	            console.log(err);
	            res.redirect('/');
            }else{
                console.log("successfully Deleted");
                res.redirect('/');
            }
	    })
	}



}