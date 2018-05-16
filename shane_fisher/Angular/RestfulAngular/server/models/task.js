
var mongoose = require('mongoose')

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: 'Title must not be blank', minlength: 3},
    description: {type: String, required: 'Description must not be empty', minlength: 3},
    completed: {type: Boolean, default: false}
}, { timestamps: true })



var Task = mongoose.model('Task', TaskSchema);

