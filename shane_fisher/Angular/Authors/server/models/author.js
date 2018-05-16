
var mongoose = require('mongoose')

var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: 'Name must be entered', minlength: 3}
}, { timestamps: true })



var Author = mongoose.model('Author', AuthorSchema);

