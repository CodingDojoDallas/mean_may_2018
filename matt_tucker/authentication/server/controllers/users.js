let session = require('express-session'),
	User 	= require('../models/user');

module.exports = {
	index: (req, res) => {
		User.find({}, (err, users) => {
			if (err) {
				return res.status(400).json(err.errors);
			}

			res.json(users);
		});
	},
	create: (req, res) => {
		const user = new User(req.body);

		user.save( (err) => {
			if (err) {
				return res.status(400).json(err.errors);
			}

			req.session.user_id = user._id;

			return res.json(user);
		});
	},
}
