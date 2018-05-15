var express= require('express');
var app=express()
app.use(express.static(__dirname + "/static"));
app.set('view engine','ejs');
var session=require('express-session')
app.use(session({
	secret: 'aslfdj23jr-o8ihjfiasjdfh',
	resave:false,
	saveUninitialized:true
}))
var mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/messageboard')
var flash = require('express-flash')
app.use(flash())
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

var CommentSchema = new mongoose.Schema({
	name:{type:String, required:true, minlength:2},
	comment:{type:String, required:true, minlength:2},
},{timestamps:true})
var PostSchema = new mongoose.Schema({
	name:{type:String, required:true, minlength:2},
	post:{type:String, required:true, minlength:2},
	comments: [CommentSchema]
},{timestamps:true})

var Post=mongoose.model('Post',PostSchema)
var Comment=mongoose.model('Comment',CommentSchema)

app.get('/',function(req,res){
	Post.find({},function(err,posts){
		if(err){
			console.log(err)
		}
		else{
			res.render('index',{posts:posts})
		}
	})
})
app.post('/post',function(req,res){
	Post.create(req.body,function(err){
		if (err){
			console.log(err)
		}
		res.redirect('/')
	})
})
app.post('/post/:id',function(req,res){
	Comment.create(req.body,function(err,comment){
		if (err){
			console.log(err)
			res.redirect('/')
		}
		else{
			Post.findOneAndUpdate({_id:req.params.id},{$push: {comments:comment}},function(err){
				if (err){
					console.log(err)
				}
				res.redirect('/')
			})
		}
	})
})

app.listen(8000,function(){
	console.log("listening on port 8000")
})