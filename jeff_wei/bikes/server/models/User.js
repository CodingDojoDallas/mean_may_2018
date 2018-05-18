var mongoose = require('mongoose'),
	uniqueValidator= require('mongoose-unique-validator')

var UserSchema = new mongoose.Schema({
	first_name:{type:String, required:[true,'First Name required'], minlength:2},
	last_name:{type:String, required:[true,'Last Name required'], minlength:2},
	email:{type:String, required:[true,'Email required'], minlength:2, unique:true, match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Email is not valid"]},
	password:{type:String, required:[true,'Password required'], minlength:6},
	bikes:[{ref:"Bike",type:mongoose.Schema.Types.ObjectId}]
})
UserSchema.plugin(uniqueValidator);

module.exports= mongoose.model('User',UserSchema)
