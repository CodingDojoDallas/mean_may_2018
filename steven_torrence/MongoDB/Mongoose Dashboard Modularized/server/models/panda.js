var mongoose = require('mongoose');

var PandaSchema = new mongoose.Schema({
    name: { type: String, required: "You must enter a name!" },
    age: { type: Number, required: "You must enter an age!" },
    food: { type: String, required: "You must enter a favorite food!" }
}, { timestamps: true });
mongoose.model('Panda', PandaSchema); // We are setting this Schema in our Models as 'Panda'
