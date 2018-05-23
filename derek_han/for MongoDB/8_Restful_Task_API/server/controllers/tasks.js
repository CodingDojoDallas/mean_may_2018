var Task 	= require('../models/task');
	// flash	= require('express-flash');

module.exports = {
	index: (req, res) => {
		Task.find({}, (err, tasks) => {
			if(err){
				console.log("Err in index");
				for (var key in err.errors) {
					req.flash('create', err.errors[key].message);
				}
				return res.json({tasks});
			}
			console.log('Successfully loading task!');
			res.json({tasks});
		})
	},

	show: (req,res) => {
		Task.findOne({ _id: req.params.id }, (err, task) => {	
			console.log('Something Sucks', err);
			if (err) {
				console.log('Something wrong in show', err);
				for (var key in err.errors) {
					req.flash('show', err.errors[key].message);
				}
				
			}
			console.log('Successfully show a task!');
			return res.json({task});
			
		})
	},

	create: (req, res) => {
		var tasks = new Task({ title : req.params.title });
			console.log(tasks);
			tasks.save((err) => {
				if (err) {
					console.log('Something wrong in create', err);
					// for (var key in err.errors) {
					// 	req.flash('create', err.errors[key].message);
					// };
					// res.json({message: 'There was an errors', error:err});
					return res.redirect('/tasks');
				} else {
				console.log('Successfully added a task!');
				return res.json({tasks});
			}
			
		})

	},
	update: (req, res) => {
		Task.update({_id: req.params.id}, {title: "updated", desc:"Do not skip"}, (err, task) => {
			if (err) {
					console.log('Something wrong in update', err);
					// for (var key in err.errors) {
					// 	req.flash('update', err.errors[key].message);
					// };
					// res.json({message: 'There was an errors', error:err});
					res.redirect('/tasks');
				} else {
				console.log('Successfully updated a task!');
				return res.json({task});
				}
			})
		// return res.json("Using modular routes");
		
	},

	destroy: (req, res) => {
		Task.remove({ _id: req.params.id}, (err) =>{
			if (err) {
					console.log('Something wrong in delete', err);
				} else {
				console.log('Successfully deleted a task!');
				return res.redirect('/tasks');
				}
		})
		// return res.json("Using modular routes");
	}
	

};