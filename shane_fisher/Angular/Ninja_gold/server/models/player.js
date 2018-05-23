
var mongoose = require('mongoose')

var PlayerSchema = new mongoose.Schema({
    name: { type: String },
    totalGold: { type: Number, default: 0},
    daysWorked: { type: Number, default: 0}
}, { timestamps: true })



var Player = mongoose.model('Player', PlayerSchema);

