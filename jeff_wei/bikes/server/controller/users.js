var bcrypt= require('bcrypt'),
	User = require('../models/User.js'),
	session = require('express-session')


module.exports = {
	create: (req,res)=>{
		let user=req.body
		bcrypt.hash(user.password,10,function(err,hash){
			user.password=hash
			console.log(user)
			User.create(user,(err,user)=>{

				if(err){
					console.log("server error:",err.errors)

					return res.status(400).json(err.errors)
				}
				else{
					req.session.userid=user._id
					res.json({'id':req.session.userid})
				}
			})
		})
	},
	login: (req,res) =>{
		User.findOne({email:req.body.email},function(err,user){
			if (err || user==undefined){
					return res.status(400).json({'email':{"message":"Fields cannot be empty"}})
			}
			else{
				bcrypt.compare(req.body.password,user.password,function(err,result){
					if (err){
						console.log("err1",err)
						return res.status(400).json({'email':{"message":"Email not found"}})
					}
					else if (result){
						req.session.userid=user._id
						res.json({'message':'success','id':req.session.userid})
					}
					else{
						console.log("err2",err)
						return res.status(400).json({'password':{"message":"Password doesnt match"}})
					}
				})
				
			}
		})
	},
	logout: (req,res)=>{
		delete req.session.userid
		res.json({'message':'logged out'})
	},
	getid:(req,res)=> {
		if(req.session.userid){
			console.log("session ID"+req.session.userid)
			return res.json({'id':`${req.session.userid}`})
		}
		else{
			res.status(400).json({'err':"not logged in"})
		}
	}
}