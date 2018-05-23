var User = require('../models/user');

module.exports = {
	index: (req, res) => {
		User.find({}, (err, users) => {
			if (err){
				console.log(err, "err in index");
				for (var key in err.errors){
					request.flash('All users', err.errors[key].message);
				}
				return res.json({message: "Err with Searching!"});
			}else{
				console.log("Success in index");
				return res.json({users});
			}

		})
	},
	create: (req, res) => {
		var userInstance = new User()
		userInstance.name = req.params.name;
		userInstance.save((err) => {
			if (err){
				console.log(err, "in add");
				for (var key in err.errors){
					request.flash('Add user', err.errors[key].message);
				}
			}else{
				console.log("Success in Add user");
				return res.json({name: "create routes"});
			}


		})
	},

	destroy: (req, res) => {
		User.remove( {name: req.params.name }, (err) => {
			if (err){
				console.log(err, "err in destroy");
				for (var key in err.errors){
					request.flash('destroy', err.errors[key].message);
				}
				return res.json({message: "Err with destroy!"});
			}else{
				console.log("Success in destroy");
				return res.json({message: "destroy that data"});
			}

		})
		// return res.json("destroy routes");
	},

	show: (req,res) => {
		User.findOne({name: req.params.name}, (err, user) =>{
			if (err){
				console.log(err, "in show");

			}else{

				return res.json("show routes");
			}
		})

		return res.json("You have made it " + req.params.name);
	}

}