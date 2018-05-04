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
var id=1
var users=[]
var chats=[]
app.get('/',function(req,res){
	res.render('index',{users:users, chats:chats})
});

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
var io= require('socket.io')(server);
io.on('connection',function(socket){
	console.log('user connected')
	console.log(socket.id)
	// let ids=[]
	// for (let i=0;i<users.length;i++){
	// 	ids.push(users[i].id)
	// }
	if(!(find_user(socket.id))){
		socket.emit('prompt',{id:socket.id})
	}
	socket.on('create_user',function(user){
		users.push(user)
		io.emit('new_user',user)
	})
	socket.on('send',function(data){
		console.log(data)
		console.log(socket.id)
		user=find_user(socket.id)
		chats.push({message:data.message,user:user.name})
		io.emit('new_message',{message:data.message,user:user.name})
	})
	socket.on('disconnect',function(){
		console.log(socket.id+'disconnected')
		for (let i in users){
			if(users[i].id==socket.id){
				users.splice(i,1)
			}
		}
		console.log(users)
		io.emit('delete_user',{id:socket.id})
		if(users.length <=0){
			chats=[]
		}
	})

})
function find_user(id){
	for (let i in users){
		if(users[i].id==id){
			return users[i]
		}
	}
	return false
}