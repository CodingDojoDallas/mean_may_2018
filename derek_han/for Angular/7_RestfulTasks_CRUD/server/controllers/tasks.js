var Task 	= require('../models/task');

module.exports = {
	index: (req, res) => {
		Task.find({}, (err, tasks) => {
			if(err){
				console.log("Err in index");
				res.json(err);
			}else{
				console.log('Successfully loading task!');
				res.json(tasks);
			}
		})
	},

	show: (req,res) => {
		Task.findOne({ _id: req.params.id }, (err, task) => {	
			console.log('Something Sucks', err);
			if (err) {
				console.log('Something wrong in show', err);
				res.json(err);
			}else{
				console.log('Successfully show a task!');
				res.json(task);
			}
		})
	},

	create: (req, res) => {
		var tasks = new Task({ title : req.body.title, description: req.body.description });
			console.log(tasks);
			tasks.save((err) => {
				if (err) {
					console.log('Something wrong in create', err.errors);
					res.json(err);
				} else {
					console.log('Successfully added a task!');
					return res.json('/tasks');
				}
		})
	},

	update: (req, res) => {
		console.log(req.body.title, req.body.description , req.params.id);
		Task.update({_id: req.params.id }, { title : req.body.title, description: req.body.description }, (err, task) => {
			if (err) {
					console.log('Something wrong in update', err);
					res.json(err);
				} else {
					console.log('Successfully updated a task!');
					res.json(task);
				}
			})		
	},

	destroy: (req, res) => {
		Task.remove({_id: req.params.id }, (err) =>{
			console.log(req.params.id);
			if (err) {
					console.log('Something wrong in delete', err);
					res.json(err);
				} else {
					console.log('Successfully deleted a task!');
					res.json("Done");
				}
		})
	}
};