var mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
	title:{type:String, required:[true,"Must have a title"], minlength:4},
	price:{type:String,required:[true,"Must have a price"],minlength:1, match:[/^(\d{1,3})?(,?\d{3})*(\.\d{2})?$/,"Invalid format"]
},
	image:{type:String,default:"https://worldwideinterweb.com/wp-content/uploads/2017/10/dumb-products-list.jpg"}
},{timestamps:true});

var Product = mongoose.model('Product',ProductSchema);
module.exports = Product;