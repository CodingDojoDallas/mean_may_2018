var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must enter an author's name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
}, { timestamps: true });

mongoose.model('Author', AuthorSchema); // We are setting this Schema in our Models as 'Author'