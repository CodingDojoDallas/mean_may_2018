var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
}, { timestamps: true });
mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'Panda'
