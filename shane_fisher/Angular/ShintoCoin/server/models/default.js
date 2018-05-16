
var mongoose = require('mongoose')

var DefaultSchema = new mongoose.Schema({
    name: { type: String }
}, { timestamps: true })



var Default = mongoose.model('Default', DefaultSchema);

