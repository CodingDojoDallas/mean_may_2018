var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: {
    	type: String, 
    	required: "Only letters for your name"
    },
    quote: {
    	type: String, 
    	required: "only words for Quote"
    }
}, {timestamps: true});

module.exports = mongoose.model('Quote', QuoteSchema )
