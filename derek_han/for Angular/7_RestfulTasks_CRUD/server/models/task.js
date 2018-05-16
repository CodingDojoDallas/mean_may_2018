var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	title: {
		type: String
	},
	
	description: {
		type: String
	},

	// completed: {
	// 	type: Boolean,
	// 	required: ' defalult to false',
	// 	defalult: false
	// }

}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);

