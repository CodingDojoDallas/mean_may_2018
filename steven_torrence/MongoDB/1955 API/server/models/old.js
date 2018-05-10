var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: "You must enter a name!" },
}, { timestamps: true });
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Panda'
