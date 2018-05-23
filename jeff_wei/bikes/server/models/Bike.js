var mongoose = require('mongoose')

var BikeSchema = new mongoose.Schema({
	title:{type:String, required:[true,"Must have a title"], minlength:4},
	description:{type:String, required:[true,"Must have a description"], minlength:5},
	price:{type:Number,required:[true,"Must have a price"],min:1},
	location:{type:String,required:[true,"Must have a location"]},
	image:{type:String,default:"http://i.imgur.com/iQVVc.jpg"},
	user:{ref:"User",type: mongoose.Schema.Types.ObjectId}
},{timestamps:true});

module.exports = mongoose.model('Bike',BikeSchema);
