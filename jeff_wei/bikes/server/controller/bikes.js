const mongoose = require('mongoose'),
	Bike = mongoose.model('Bike'),
	session = require('express-session')


module.exports = {
	showAll: (req,res) => {
		Bike.find({}).sort({'createdAt':'desc'}).exec((err,Bikes)=>{
			if(err){
				res.status(400).json(err.errors);
			}
			else{
				res.json(Bikes)
			}
		})
	},
	create: (req,res) => {
		Bike.create(req.body,(err)=>{
			if(err){
				console.log("server",err.errors)
				res.status(400).json(err.errors)
			}
			else{
				res.json({"message":"created successfully"})
			}
		})
	},
	show: (req,res) => {
		Bike.findOne({_id:req.params.id},(err,Bike) => {
			if(err){
				res.status(400).json(err.errors)
			}
			else{
				res.json(Bike)
			}
		})
	},
	update: (req,res) => {
		Bike.findOneAndUpdate({_id:req.params.id},req.body,{runValidators:true},(err,Bike)=>{
			if(err){
				res.status(400).json(err.errors)
			}
			else{
				console.log("updated"+Bike)
				res.json(Bike)
			}
		})
	},
	destroy: (req,res)=>{
		Bike.remove({_id:req.params.id},(err)=>{
			if(err){
				res.status(400).json(err.errors)
			}
			else{
				res.json({"message":"deleted successfully"})
			}
		})
	},
	search:(req,res)=>{
		console.log("searching for "+req.body.search)
		Bike.find({'title':{'$regex':req.body.search,'$options':'i'}},(err,bikes)=>{
			if(err){
				console.log("found nothing")
				res.json({'message':"nothing"})
			}
			else{
				console.log("found:"+ bikes)
				res.json({bikes:bikes})
			}
		})
	}
}