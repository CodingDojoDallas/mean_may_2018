const mongoose = require('mongoose'),
	Product = mongoose.model('Product'),
	flash = require('express-flash')


module.exports = {
	showAll: (req,res) => {
		Product.find({},(err,products)=>{
			if(err){
				res.status(400).json(err.errors);
			}
			else{
				res.json(products)
			}
		})
	},
	create: (req,res) => {
		Product.create(req.body,(err)=>{
			if(err){
				console.log(err.errors)
				res.json(err)
			}
			else{
				res.json({"message":"created successfully"})
			}
		})
	},
	show: (req,res) => {
		Product.findOne({_id:req.params.id},(err,product) => {
			if(err){
				res.status(400).json(err.errors)
			}
			else{
				res.json(product)
			}
		})
	},
	update: (req,res) => {
		Product.findOneAndUpdate({_id:req.params.id},req.body,{runValidators:true},(err,product)=>{
			if(err){
				res.json(err)
			}
			else{
				console.log("updated"+product)
				res.json(product)
			}
		})
	},
	destroy: (req,res)=>{
		Product.remove({_id:req.params.id},(err)=>{
			if(err){
				res.status(400).json(err.errors)
			}
			else{
				res.json({"message":"deleted successfully"})
			}
		})
	}
}