var mongoose    = require('mongoose');

var DogSchema = new mongoose.Schema({
    name: {type: String, required: "Only letters for dog's name"},
    age: {type: Number, required: "Only Number for dog's age"},
    color: {type: String, required: "Only letters for dog's color"},
    type: {type: String, required: "Only Number for dog's type"}
}, {timestamps: true});

module.exports = mongoose.model('Dog', DogSchema);
