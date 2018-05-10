let session = require('express-session'),
	bcrypt	= require('bcrypt-as-promised'),
	User 	= require('../models/user');

module.exports = {
	create: (req, res) => {
		User.findOne({email: req.body.email}, (err, user) => {
			if (!user) {
				return res.status(400).json("Account not registered.");
			}

			bcrypt.compare(req.body.password, user.password)
			.then( () => {
				req.session.user_id = user._id;

				return res.json(user);
			})
			.catch( () => {
				return res.status(400).json("Invalid password.");
			});
		});
	},
	destroy: (req, res) => {
		if ('user_id' in req.session) {
			delete req.session.user_id
		}

		return res.json("Logged Out");
	},
}
